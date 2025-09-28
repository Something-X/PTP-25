<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class LoginController extends Controller
{
    /**
     * Menampilkan halaman login admin.
     */
    public function create(): Response
    {
        return Inertia::render('Admin/Auth/Login');
    }

    /**
     * Menangani permintaan login dari admin.
     */
    public function store(Request $request): RedirectResponse
    {
        // 1. Validasi input
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        // 2. Cek Rate Limiting (mencegah brute force)
        $this->ensureIsNotRateLimited($request);

        // 3. Coba untuk melakukan login
        if (! Auth::attempt($request->only('email', 'password'), $request->boolean('remember'))) {
            RateLimiter::hit($this->throttleKey($request));

            throw ValidationException::withMessages([
                'email' => __('auth.failed'),
            ]);
        }

        // 4. Cek apakah user adalah admin
        if (! Auth::user()->is_admin) {
            $isAdmin = false;
            // Jika bukan admin, langsung logout lagi
            Auth::logout();
        } else {
            $isAdmin = true;
        }

        // Hapus rate limiter setelah berhasil login
        RateLimiter::clear($this->throttleKey($request));

        // Jika bukan admin, kembalikan ke halaman login dengan error
        if (! $isAdmin) {
            return back()->withErrors([
                'email' => 'You do not have admin access.',
            ]);
        }

        // 5. Jika berhasil login sebagai admin, regenerate session
        $request->session()->regenerate();

        // Arahkan ke dashboard admin
        return redirect()->intended(route('admin.dashboard'));
    }

    /**
     * Memastikan permintaan tidak terkena rate limit.
     */
    protected function ensureIsNotRateLimited(Request $request): void
    {
        if (! RateLimiter::tooManyAttempts($this->throttleKey($request), 5)) {
            return;
        }

        $seconds = RateLimiter::availableIn($this->throttleKey($request));

        throw ValidationException::withMessages([
            'email' => trans('auth.throttle', [
                'seconds' => $seconds,
                'minutes' => ceil($seconds / 60),
            ]),
        ]);
    }

    /**
     * Mendapatkan kunci throttle untuk permintaan.
     */
    protected function throttleKey(Request $request): string
    {
        return Str::transliterate(Str::lower($request->input('email')).'|'.$request->ip());
    }
}
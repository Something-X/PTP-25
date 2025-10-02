import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\FlightController::index
 * @see app/Http/Controllers/Admin/FlightController.php:14
 * @route '/admin/flights'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/flights',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\FlightController::index
 * @see app/Http/Controllers/Admin/FlightController.php:14
 * @route '/admin/flights'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\FlightController::index
 * @see app/Http/Controllers/Admin/FlightController.php:14
 * @route '/admin/flights'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\FlightController::index
 * @see app/Http/Controllers/Admin/FlightController.php:14
 * @route '/admin/flights'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\FlightController::index
 * @see app/Http/Controllers/Admin/FlightController.php:14
 * @route '/admin/flights'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\FlightController::index
 * @see app/Http/Controllers/Admin/FlightController.php:14
 * @route '/admin/flights'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\FlightController::index
 * @see app/Http/Controllers/Admin/FlightController.php:14
 * @route '/admin/flights'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Admin\FlightController::create
 * @see app/Http/Controllers/Admin/FlightController.php:24
 * @route '/admin/flights/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/flights/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\FlightController::create
 * @see app/Http/Controllers/Admin/FlightController.php:24
 * @route '/admin/flights/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\FlightController::create
 * @see app/Http/Controllers/Admin/FlightController.php:24
 * @route '/admin/flights/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\FlightController::create
 * @see app/Http/Controllers/Admin/FlightController.php:24
 * @route '/admin/flights/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\FlightController::create
 * @see app/Http/Controllers/Admin/FlightController.php:24
 * @route '/admin/flights/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\FlightController::create
 * @see app/Http/Controllers/Admin/FlightController.php:24
 * @route '/admin/flights/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\FlightController::create
 * @see app/Http/Controllers/Admin/FlightController.php:24
 * @route '/admin/flights/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\Admin\FlightController::store
 * @see app/Http/Controllers/Admin/FlightController.php:33
 * @route '/admin/flights'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/flights',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\FlightController::store
 * @see app/Http/Controllers/Admin/FlightController.php:33
 * @route '/admin/flights'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\FlightController::store
 * @see app/Http/Controllers/Admin/FlightController.php:33
 * @route '/admin/flights'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\FlightController::store
 * @see app/Http/Controllers/Admin/FlightController.php:33
 * @route '/admin/flights'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\FlightController::store
 * @see app/Http/Controllers/Admin/FlightController.php:33
 * @route '/admin/flights'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\FlightController::show
 * @see app/Http/Controllers/Admin/FlightController.php:0
 * @route '/admin/flights/{flight}'
 */
export const show = (args: { flight: string | number } | [flight: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/flights/{flight}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\FlightController::show
 * @see app/Http/Controllers/Admin/FlightController.php:0
 * @route '/admin/flights/{flight}'
 */
show.url = (args: { flight: string | number } | [flight: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { flight: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    flight: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        flight: args.flight,
                }

    return show.definition.url
            .replace('{flight}', parsedArgs.flight.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\FlightController::show
 * @see app/Http/Controllers/Admin/FlightController.php:0
 * @route '/admin/flights/{flight}'
 */
show.get = (args: { flight: string | number } | [flight: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\FlightController::show
 * @see app/Http/Controllers/Admin/FlightController.php:0
 * @route '/admin/flights/{flight}'
 */
show.head = (args: { flight: string | number } | [flight: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\FlightController::show
 * @see app/Http/Controllers/Admin/FlightController.php:0
 * @route '/admin/flights/{flight}'
 */
    const showForm = (args: { flight: string | number } | [flight: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\FlightController::show
 * @see app/Http/Controllers/Admin/FlightController.php:0
 * @route '/admin/flights/{flight}'
 */
        showForm.get = (args: { flight: string | number } | [flight: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\FlightController::show
 * @see app/Http/Controllers/Admin/FlightController.php:0
 * @route '/admin/flights/{flight}'
 */
        showForm.head = (args: { flight: string | number } | [flight: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\Admin\FlightController::edit
 * @see app/Http/Controllers/Admin/FlightController.php:48
 * @route '/admin/flights/{flight}/edit'
 */
export const edit = (args: { flight: number | { id: number } } | [flight: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/flights/{flight}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\FlightController::edit
 * @see app/Http/Controllers/Admin/FlightController.php:48
 * @route '/admin/flights/{flight}/edit'
 */
edit.url = (args: { flight: number | { id: number } } | [flight: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { flight: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { flight: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    flight: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        flight: typeof args.flight === 'object'
                ? args.flight.id
                : args.flight,
                }

    return edit.definition.url
            .replace('{flight}', parsedArgs.flight.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\FlightController::edit
 * @see app/Http/Controllers/Admin/FlightController.php:48
 * @route '/admin/flights/{flight}/edit'
 */
edit.get = (args: { flight: number | { id: number } } | [flight: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\FlightController::edit
 * @see app/Http/Controllers/Admin/FlightController.php:48
 * @route '/admin/flights/{flight}/edit'
 */
edit.head = (args: { flight: number | { id: number } } | [flight: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\FlightController::edit
 * @see app/Http/Controllers/Admin/FlightController.php:48
 * @route '/admin/flights/{flight}/edit'
 */
    const editForm = (args: { flight: number | { id: number } } | [flight: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\FlightController::edit
 * @see app/Http/Controllers/Admin/FlightController.php:48
 * @route '/admin/flights/{flight}/edit'
 */
        editForm.get = (args: { flight: number | { id: number } } | [flight: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\FlightController::edit
 * @see app/Http/Controllers/Admin/FlightController.php:48
 * @route '/admin/flights/{flight}/edit'
 */
        editForm.head = (args: { flight: number | { id: number } } | [flight: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\Admin\FlightController::update
 * @see app/Http/Controllers/Admin/FlightController.php:58
 * @route '/admin/flights/{flight}'
 */
export const update = (args: { flight: number | { id: number } } | [flight: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/flights/{flight}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\FlightController::update
 * @see app/Http/Controllers/Admin/FlightController.php:58
 * @route '/admin/flights/{flight}'
 */
update.url = (args: { flight: number | { id: number } } | [flight: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { flight: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { flight: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    flight: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        flight: typeof args.flight === 'object'
                ? args.flight.id
                : args.flight,
                }

    return update.definition.url
            .replace('{flight}', parsedArgs.flight.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\FlightController::update
 * @see app/Http/Controllers/Admin/FlightController.php:58
 * @route '/admin/flights/{flight}'
 */
update.put = (args: { flight: number | { id: number } } | [flight: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\FlightController::update
 * @see app/Http/Controllers/Admin/FlightController.php:58
 * @route '/admin/flights/{flight}'
 */
update.patch = (args: { flight: number | { id: number } } | [flight: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Admin\FlightController::update
 * @see app/Http/Controllers/Admin/FlightController.php:58
 * @route '/admin/flights/{flight}'
 */
    const updateForm = (args: { flight: number | { id: number } } | [flight: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\FlightController::update
 * @see app/Http/Controllers/Admin/FlightController.php:58
 * @route '/admin/flights/{flight}'
 */
        updateForm.put = (args: { flight: number | { id: number } } | [flight: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Admin\FlightController::update
 * @see app/Http/Controllers/Admin/FlightController.php:58
 * @route '/admin/flights/{flight}'
 */
        updateForm.patch = (args: { flight: number | { id: number } } | [flight: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Admin\FlightController::destroy
 * @see app/Http/Controllers/Admin/FlightController.php:73
 * @route '/admin/flights/{flight}'
 */
export const destroy = (args: { flight: number | { id: number } } | [flight: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/flights/{flight}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\FlightController::destroy
 * @see app/Http/Controllers/Admin/FlightController.php:73
 * @route '/admin/flights/{flight}'
 */
destroy.url = (args: { flight: number | { id: number } } | [flight: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { flight: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { flight: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    flight: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        flight: typeof args.flight === 'object'
                ? args.flight.id
                : args.flight,
                }

    return destroy.definition.url
            .replace('{flight}', parsedArgs.flight.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\FlightController::destroy
 * @see app/Http/Controllers/Admin/FlightController.php:73
 * @route '/admin/flights/{flight}'
 */
destroy.delete = (args: { flight: number | { id: number } } | [flight: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\FlightController::destroy
 * @see app/Http/Controllers/Admin/FlightController.php:73
 * @route '/admin/flights/{flight}'
 */
    const destroyForm = (args: { flight: number | { id: number } } | [flight: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\FlightController::destroy
 * @see app/Http/Controllers/Admin/FlightController.php:73
 * @route '/admin/flights/{flight}'
 */
        destroyForm.delete = (args: { flight: number | { id: number } } | [flight: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const flights = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default flights
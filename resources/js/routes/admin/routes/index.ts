import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\FlightRouteController::index
 * @see app/Http/Controllers/Admin/FlightRouteController.php:12
 * @route '/admin/routes'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/routes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\FlightRouteController::index
 * @see app/Http/Controllers/Admin/FlightRouteController.php:12
 * @route '/admin/routes'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\FlightRouteController::index
 * @see app/Http/Controllers/Admin/FlightRouteController.php:12
 * @route '/admin/routes'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\FlightRouteController::index
 * @see app/Http/Controllers/Admin/FlightRouteController.php:12
 * @route '/admin/routes'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\FlightRouteController::index
 * @see app/Http/Controllers/Admin/FlightRouteController.php:12
 * @route '/admin/routes'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\FlightRouteController::index
 * @see app/Http/Controllers/Admin/FlightRouteController.php:12
 * @route '/admin/routes'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\FlightRouteController::index
 * @see app/Http/Controllers/Admin/FlightRouteController.php:12
 * @route '/admin/routes'
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
* @see \App\Http\Controllers\Admin\FlightRouteController::create
 * @see app/Http/Controllers/Admin/FlightRouteController.php:19
 * @route '/admin/routes/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/routes/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\FlightRouteController::create
 * @see app/Http/Controllers/Admin/FlightRouteController.php:19
 * @route '/admin/routes/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\FlightRouteController::create
 * @see app/Http/Controllers/Admin/FlightRouteController.php:19
 * @route '/admin/routes/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\FlightRouteController::create
 * @see app/Http/Controllers/Admin/FlightRouteController.php:19
 * @route '/admin/routes/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\FlightRouteController::create
 * @see app/Http/Controllers/Admin/FlightRouteController.php:19
 * @route '/admin/routes/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\FlightRouteController::create
 * @see app/Http/Controllers/Admin/FlightRouteController.php:19
 * @route '/admin/routes/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\FlightRouteController::create
 * @see app/Http/Controllers/Admin/FlightRouteController.php:19
 * @route '/admin/routes/create'
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
* @see \App\Http\Controllers\Admin\FlightRouteController::store
 * @see app/Http/Controllers/Admin/FlightRouteController.php:24
 * @route '/admin/routes'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/routes',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\FlightRouteController::store
 * @see app/Http/Controllers/Admin/FlightRouteController.php:24
 * @route '/admin/routes'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\FlightRouteController::store
 * @see app/Http/Controllers/Admin/FlightRouteController.php:24
 * @route '/admin/routes'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\FlightRouteController::store
 * @see app/Http/Controllers/Admin/FlightRouteController.php:24
 * @route '/admin/routes'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\FlightRouteController::store
 * @see app/Http/Controllers/Admin/FlightRouteController.php:24
 * @route '/admin/routes'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\FlightRouteController::show
 * @see app/Http/Controllers/Admin/FlightRouteController.php:0
 * @route '/admin/routes/{flightRoute}'
 */
export const show = (args: { flightRoute: string | number } | [flightRoute: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/routes/{flightRoute}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\FlightRouteController::show
 * @see app/Http/Controllers/Admin/FlightRouteController.php:0
 * @route '/admin/routes/{flightRoute}'
 */
show.url = (args: { flightRoute: string | number } | [flightRoute: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { flightRoute: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    flightRoute: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        flightRoute: args.flightRoute,
                }

    return show.definition.url
            .replace('{flightRoute}', parsedArgs.flightRoute.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\FlightRouteController::show
 * @see app/Http/Controllers/Admin/FlightRouteController.php:0
 * @route '/admin/routes/{flightRoute}'
 */
show.get = (args: { flightRoute: string | number } | [flightRoute: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\FlightRouteController::show
 * @see app/Http/Controllers/Admin/FlightRouteController.php:0
 * @route '/admin/routes/{flightRoute}'
 */
show.head = (args: { flightRoute: string | number } | [flightRoute: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\FlightRouteController::show
 * @see app/Http/Controllers/Admin/FlightRouteController.php:0
 * @route '/admin/routes/{flightRoute}'
 */
    const showForm = (args: { flightRoute: string | number } | [flightRoute: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\FlightRouteController::show
 * @see app/Http/Controllers/Admin/FlightRouteController.php:0
 * @route '/admin/routes/{flightRoute}'
 */
        showForm.get = (args: { flightRoute: string | number } | [flightRoute: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\FlightRouteController::show
 * @see app/Http/Controllers/Admin/FlightRouteController.php:0
 * @route '/admin/routes/{flightRoute}'
 */
        showForm.head = (args: { flightRoute: string | number } | [flightRoute: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\FlightRouteController::edit
 * @see app/Http/Controllers/Admin/FlightRouteController.php:37
 * @route '/admin/routes/{flightRoute}/edit'
 */
export const edit = (args: { flightRoute: number | { id: number } } | [flightRoute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/routes/{flightRoute}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\FlightRouteController::edit
 * @see app/Http/Controllers/Admin/FlightRouteController.php:37
 * @route '/admin/routes/{flightRoute}/edit'
 */
edit.url = (args: { flightRoute: number | { id: number } } | [flightRoute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { flightRoute: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { flightRoute: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    flightRoute: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        flightRoute: typeof args.flightRoute === 'object'
                ? args.flightRoute.id
                : args.flightRoute,
                }

    return edit.definition.url
            .replace('{flightRoute}', parsedArgs.flightRoute.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\FlightRouteController::edit
 * @see app/Http/Controllers/Admin/FlightRouteController.php:37
 * @route '/admin/routes/{flightRoute}/edit'
 */
edit.get = (args: { flightRoute: number | { id: number } } | [flightRoute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\FlightRouteController::edit
 * @see app/Http/Controllers/Admin/FlightRouteController.php:37
 * @route '/admin/routes/{flightRoute}/edit'
 */
edit.head = (args: { flightRoute: number | { id: number } } | [flightRoute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\FlightRouteController::edit
 * @see app/Http/Controllers/Admin/FlightRouteController.php:37
 * @route '/admin/routes/{flightRoute}/edit'
 */
    const editForm = (args: { flightRoute: number | { id: number } } | [flightRoute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\FlightRouteController::edit
 * @see app/Http/Controllers/Admin/FlightRouteController.php:37
 * @route '/admin/routes/{flightRoute}/edit'
 */
        editForm.get = (args: { flightRoute: number | { id: number } } | [flightRoute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\FlightRouteController::edit
 * @see app/Http/Controllers/Admin/FlightRouteController.php:37
 * @route '/admin/routes/{flightRoute}/edit'
 */
        editForm.head = (args: { flightRoute: number | { id: number } } | [flightRoute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\FlightRouteController::update
 * @see app/Http/Controllers/Admin/FlightRouteController.php:44
 * @route '/admin/routes/{flightRoute}'
 */
export const update = (args: { flightRoute: number | { id: number } } | [flightRoute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/routes/{flightRoute}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\FlightRouteController::update
 * @see app/Http/Controllers/Admin/FlightRouteController.php:44
 * @route '/admin/routes/{flightRoute}'
 */
update.url = (args: { flightRoute: number | { id: number } } | [flightRoute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { flightRoute: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { flightRoute: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    flightRoute: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        flightRoute: typeof args.flightRoute === 'object'
                ? args.flightRoute.id
                : args.flightRoute,
                }

    return update.definition.url
            .replace('{flightRoute}', parsedArgs.flightRoute.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\FlightRouteController::update
 * @see app/Http/Controllers/Admin/FlightRouteController.php:44
 * @route '/admin/routes/{flightRoute}'
 */
update.put = (args: { flightRoute: number | { id: number } } | [flightRoute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\FlightRouteController::update
 * @see app/Http/Controllers/Admin/FlightRouteController.php:44
 * @route '/admin/routes/{flightRoute}'
 */
update.patch = (args: { flightRoute: number | { id: number } } | [flightRoute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Admin\FlightRouteController::update
 * @see app/Http/Controllers/Admin/FlightRouteController.php:44
 * @route '/admin/routes/{flightRoute}'
 */
    const updateForm = (args: { flightRoute: number | { id: number } } | [flightRoute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\FlightRouteController::update
 * @see app/Http/Controllers/Admin/FlightRouteController.php:44
 * @route '/admin/routes/{flightRoute}'
 */
        updateForm.put = (args: { flightRoute: number | { id: number } } | [flightRoute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Admin\FlightRouteController::update
 * @see app/Http/Controllers/Admin/FlightRouteController.php:44
 * @route '/admin/routes/{flightRoute}'
 */
        updateForm.patch = (args: { flightRoute: number | { id: number } } | [flightRoute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\FlightRouteController::destroy
 * @see app/Http/Controllers/Admin/FlightRouteController.php:57
 * @route '/admin/routes/{flightRoute}'
 */
export const destroy = (args: { flightRoute: number | { id: number } } | [flightRoute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/routes/{flightRoute}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\FlightRouteController::destroy
 * @see app/Http/Controllers/Admin/FlightRouteController.php:57
 * @route '/admin/routes/{flightRoute}'
 */
destroy.url = (args: { flightRoute: number | { id: number } } | [flightRoute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { flightRoute: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { flightRoute: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    flightRoute: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        flightRoute: typeof args.flightRoute === 'object'
                ? args.flightRoute.id
                : args.flightRoute,
                }

    return destroy.definition.url
            .replace('{flightRoute}', parsedArgs.flightRoute.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\FlightRouteController::destroy
 * @see app/Http/Controllers/Admin/FlightRouteController.php:57
 * @route '/admin/routes/{flightRoute}'
 */
destroy.delete = (args: { flightRoute: number | { id: number } } | [flightRoute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\FlightRouteController::destroy
 * @see app/Http/Controllers/Admin/FlightRouteController.php:57
 * @route '/admin/routes/{flightRoute}'
 */
    const destroyForm = (args: { flightRoute: number | { id: number } } | [flightRoute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\FlightRouteController::destroy
 * @see app/Http/Controllers/Admin/FlightRouteController.php:57
 * @route '/admin/routes/{flightRoute}'
 */
        destroyForm.delete = (args: { flightRoute: number | { id: number } } | [flightRoute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const routes = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default routes
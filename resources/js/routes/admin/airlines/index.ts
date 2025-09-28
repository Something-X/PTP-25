import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\AirlineController::index
 * @see app/Http/Controllers/Admin/AirlineController.php:12
 * @route '/admin/airlines'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/airlines',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\AirlineController::index
 * @see app/Http/Controllers/Admin/AirlineController.php:12
 * @route '/admin/airlines'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AirlineController::index
 * @see app/Http/Controllers/Admin/AirlineController.php:12
 * @route '/admin/airlines'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\AirlineController::index
 * @see app/Http/Controllers/Admin/AirlineController.php:12
 * @route '/admin/airlines'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\AirlineController::index
 * @see app/Http/Controllers/Admin/AirlineController.php:12
 * @route '/admin/airlines'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\AirlineController::index
 * @see app/Http/Controllers/Admin/AirlineController.php:12
 * @route '/admin/airlines'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\AirlineController::index
 * @see app/Http/Controllers/Admin/AirlineController.php:12
 * @route '/admin/airlines'
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
* @see \App\Http\Controllers\Admin\AirlineController::create
 * @see app/Http/Controllers/Admin/AirlineController.php:19
 * @route '/admin/airlines/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/airlines/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\AirlineController::create
 * @see app/Http/Controllers/Admin/AirlineController.php:19
 * @route '/admin/airlines/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AirlineController::create
 * @see app/Http/Controllers/Admin/AirlineController.php:19
 * @route '/admin/airlines/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\AirlineController::create
 * @see app/Http/Controllers/Admin/AirlineController.php:19
 * @route '/admin/airlines/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\AirlineController::create
 * @see app/Http/Controllers/Admin/AirlineController.php:19
 * @route '/admin/airlines/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\AirlineController::create
 * @see app/Http/Controllers/Admin/AirlineController.php:19
 * @route '/admin/airlines/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\AirlineController::create
 * @see app/Http/Controllers/Admin/AirlineController.php:19
 * @route '/admin/airlines/create'
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
* @see \App\Http\Controllers\Admin\AirlineController::store
 * @see app/Http/Controllers/Admin/AirlineController.php:24
 * @route '/admin/airlines'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/airlines',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\AirlineController::store
 * @see app/Http/Controllers/Admin/AirlineController.php:24
 * @route '/admin/airlines'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AirlineController::store
 * @see app/Http/Controllers/Admin/AirlineController.php:24
 * @route '/admin/airlines'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\AirlineController::store
 * @see app/Http/Controllers/Admin/AirlineController.php:24
 * @route '/admin/airlines'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AirlineController::store
 * @see app/Http/Controllers/Admin/AirlineController.php:24
 * @route '/admin/airlines'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\AirlineController::show
 * @see app/Http/Controllers/Admin/AirlineController.php:0
 * @route '/admin/airlines/{airline}'
 */
export const show = (args: { airline: string | number } | [airline: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/airlines/{airline}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\AirlineController::show
 * @see app/Http/Controllers/Admin/AirlineController.php:0
 * @route '/admin/airlines/{airline}'
 */
show.url = (args: { airline: string | number } | [airline: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { airline: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    airline: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        airline: args.airline,
                }

    return show.definition.url
            .replace('{airline}', parsedArgs.airline.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AirlineController::show
 * @see app/Http/Controllers/Admin/AirlineController.php:0
 * @route '/admin/airlines/{airline}'
 */
show.get = (args: { airline: string | number } | [airline: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\AirlineController::show
 * @see app/Http/Controllers/Admin/AirlineController.php:0
 * @route '/admin/airlines/{airline}'
 */
show.head = (args: { airline: string | number } | [airline: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\AirlineController::show
 * @see app/Http/Controllers/Admin/AirlineController.php:0
 * @route '/admin/airlines/{airline}'
 */
    const showForm = (args: { airline: string | number } | [airline: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\AirlineController::show
 * @see app/Http/Controllers/Admin/AirlineController.php:0
 * @route '/admin/airlines/{airline}'
 */
        showForm.get = (args: { airline: string | number } | [airline: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\AirlineController::show
 * @see app/Http/Controllers/Admin/AirlineController.php:0
 * @route '/admin/airlines/{airline}'
 */
        showForm.head = (args: { airline: string | number } | [airline: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\AirlineController::edit
 * @see app/Http/Controllers/Admin/AirlineController.php:31
 * @route '/admin/airlines/{airline}/edit'
 */
export const edit = (args: { airline: string | number | { id: string | number } } | [airline: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/airlines/{airline}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\AirlineController::edit
 * @see app/Http/Controllers/Admin/AirlineController.php:31
 * @route '/admin/airlines/{airline}/edit'
 */
edit.url = (args: { airline: string | number | { id: string | number } } | [airline: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { airline: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { airline: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    airline: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        airline: typeof args.airline === 'object'
                ? args.airline.id
                : args.airline,
                }

    return edit.definition.url
            .replace('{airline}', parsedArgs.airline.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AirlineController::edit
 * @see app/Http/Controllers/Admin/AirlineController.php:31
 * @route '/admin/airlines/{airline}/edit'
 */
edit.get = (args: { airline: string | number | { id: string | number } } | [airline: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\AirlineController::edit
 * @see app/Http/Controllers/Admin/AirlineController.php:31
 * @route '/admin/airlines/{airline}/edit'
 */
edit.head = (args: { airline: string | number | { id: string | number } } | [airline: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\AirlineController::edit
 * @see app/Http/Controllers/Admin/AirlineController.php:31
 * @route '/admin/airlines/{airline}/edit'
 */
    const editForm = (args: { airline: string | number | { id: string | number } } | [airline: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\AirlineController::edit
 * @see app/Http/Controllers/Admin/AirlineController.php:31
 * @route '/admin/airlines/{airline}/edit'
 */
        editForm.get = (args: { airline: string | number | { id: string | number } } | [airline: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\AirlineController::edit
 * @see app/Http/Controllers/Admin/AirlineController.php:31
 * @route '/admin/airlines/{airline}/edit'
 */
        editForm.head = (args: { airline: string | number | { id: string | number } } | [airline: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\AirlineController::update
 * @see app/Http/Controllers/Admin/AirlineController.php:38
 * @route '/admin/airlines/{airline}'
 */
export const update = (args: { airline: string | number | { id: string | number } } | [airline: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/airlines/{airline}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\AirlineController::update
 * @see app/Http/Controllers/Admin/AirlineController.php:38
 * @route '/admin/airlines/{airline}'
 */
update.url = (args: { airline: string | number | { id: string | number } } | [airline: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { airline: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { airline: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    airline: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        airline: typeof args.airline === 'object'
                ? args.airline.id
                : args.airline,
                }

    return update.definition.url
            .replace('{airline}', parsedArgs.airline.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AirlineController::update
 * @see app/Http/Controllers/Admin/AirlineController.php:38
 * @route '/admin/airlines/{airline}'
 */
update.put = (args: { airline: string | number | { id: string | number } } | [airline: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\AirlineController::update
 * @see app/Http/Controllers/Admin/AirlineController.php:38
 * @route '/admin/airlines/{airline}'
 */
update.patch = (args: { airline: string | number | { id: string | number } } | [airline: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Admin\AirlineController::update
 * @see app/Http/Controllers/Admin/AirlineController.php:38
 * @route '/admin/airlines/{airline}'
 */
    const updateForm = (args: { airline: string | number | { id: string | number } } | [airline: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AirlineController::update
 * @see app/Http/Controllers/Admin/AirlineController.php:38
 * @route '/admin/airlines/{airline}'
 */
        updateForm.put = (args: { airline: string | number | { id: string | number } } | [airline: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Admin\AirlineController::update
 * @see app/Http/Controllers/Admin/AirlineController.php:38
 * @route '/admin/airlines/{airline}'
 */
        updateForm.patch = (args: { airline: string | number | { id: string | number } } | [airline: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\AirlineController::destroy
 * @see app/Http/Controllers/Admin/AirlineController.php:45
 * @route '/admin/airlines/{airline}'
 */
export const destroy = (args: { airline: string | number | { id: string | number } } | [airline: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/airlines/{airline}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\AirlineController::destroy
 * @see app/Http/Controllers/Admin/AirlineController.php:45
 * @route '/admin/airlines/{airline}'
 */
destroy.url = (args: { airline: string | number | { id: string | number } } | [airline: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { airline: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { airline: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    airline: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        airline: typeof args.airline === 'object'
                ? args.airline.id
                : args.airline,
                }

    return destroy.definition.url
            .replace('{airline}', parsedArgs.airline.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AirlineController::destroy
 * @see app/Http/Controllers/Admin/AirlineController.php:45
 * @route '/admin/airlines/{airline}'
 */
destroy.delete = (args: { airline: string | number | { id: string | number } } | [airline: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\AirlineController::destroy
 * @see app/Http/Controllers/Admin/AirlineController.php:45
 * @route '/admin/airlines/{airline}'
 */
    const destroyForm = (args: { airline: string | number | { id: string | number } } | [airline: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AirlineController::destroy
 * @see app/Http/Controllers/Admin/AirlineController.php:45
 * @route '/admin/airlines/{airline}'
 */
        destroyForm.delete = (args: { airline: string | number | { id: string | number } } | [airline: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const airlines = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default airlines
export const APP_CONSTANST = {
    languages: ['es', 'en'],
    local_storage: {
        language: 'cocinando_language',
        token: 'cocinando_token',
        login: 'cocinando_login',
        customer: {
            id: 'cocinando_customer_id',
            type: 'cocinando_customer_type'
        },
        order_id: 'cocinando_order_id',
    },
    persist_storage: {
        language: 'cocinando_persisted_language'
    },
    TOKEN_TYPES: {
        PUBLIC: 'PUBLIC',
        LOGGED: 'LOGGED',
        CONFIRMATION_PAGE: 'CONFIRMATION_PAGE'
    },
    customer_type: {
        private: 'PRIVATE',
        registered: 'TICKET',
        public: 'PUBLIC'
    }
}

var mix = {
    data() {
        return {
            message: '',
            isError: false
        };
    },
    methods: {
        async signUp() {
            try {
                const name = document.querySelector('#name').value;
                const username = document.querySelector('#login').value;
                const password = document.querySelector('#password').value;
                const confirmPassword = document.querySelector('#confirmPassword').value;

                if (password !== confirmPassword) {
                    alert('Пароли не совпадают. Пожалуйста, попробуйте снова.', true);
                    return;
                }

                const response = await this.postData('/api/sign-up/',
                    JSON.stringify({ name, username, password })
                );

                if (response.status === 200 || response.status === 201) {
                    alert('Аккаунт успешно зарегистрирован');
                    window.location.href = '/';
                } else if (response.status === 400) {
                    alert('Ошибка регистрации: ' + (response.data.message || 'Неправильные данные'), true);
                } else if (response.status >= 500) {
                    alert('Ошибка сервера: Попробуйте позже.', true);
                } else {
                    alert('Неизвестная ошибка: ' + response.status, true);
                }
            } catch (error) {
                console.error('Ошибка в signUp:', error);
                alert(error.response?.data?.message || error.message, true);
            }
        },

        showMessage(message, isError = false) {
            this.message = message;
            this.isError = isError;


            setTimeout(() => {
                this.message = '';
                if (!isError && message.includes('успешно')) {
                    location.assign('/');
                }
            }, 3000);
        },

        async postData(url, data) {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data
            });

            const responseData = await response.json();
            return {
                data: responseData,
                status: response.status
            };
        }
    }
};
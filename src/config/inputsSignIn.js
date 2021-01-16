export const inputs = [
  {
    id: 1,
    name: "email",
    type: "email",
    required: true,
    placeholder: "Введите email",
    label: "Email",
    autocomplete: "off",
    error: "Не правильный формат email"
  },
  {
    id: 2,
    type: "password",
    name: "password",
    placeholder: "Введите пароль",
    required: true,
    label: "Пароль",
    minlength: 6,
    maxlength: 20,
    error: "Не правильный формат пароля"
  }
]
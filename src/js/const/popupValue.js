const titleSignUp = `
        <h2 class="popup__title popup__title-sign-up text_green">Запишитесь</h2>
        <span class="popup__subtitle popup__subtitle-sign-up">
          на онлайн-консультацию, чтобы узнать подробнее о франшизе appzone.co
        </span>
`;
const titleOpen = `
        <h2 class="popup__title popup__title-ask text_green">
          Откройте бизнес<br />в вашем городе
        </h2>
        <span class="popup__subtitle popup__subtitle-ask">
          по проверенной бизнес-модели appzone.co
        </span>
`;
const titleLeave = `
        <p class="popup__title-leave">Уже уходите?</p>
        <h2 class="popup__title popup__title-sign-up text_green">
          Не упускайте шанс
        </h2>
        <span class="popup__subtitle popup__subtitle-sign-up">
          присоединиться<br />
          к франшизе appzone.co
        </span>
`;

export const popupValue = {
  open: {
    title: titleOpen,
    image: "popup__img-open",
    button: "запустить франшизу",
    sectionNameText:
      "Откройте бизнес в вашем городе по проверенной бизнес-модели appzone.co",
    valueInput: "Закрытая",
  },
  sidnUp: {
    title: titleSignUp,
    image: "popup__img-sign-up",
    button: "записаться на консультацию",
    sectionNameText:
      "Запишитесь на онлайн-консультацию, чтобы узнать подробнее о франшизе appzone.co",
    valueInput: "Закрытая",
  },
  leave: {
    title: titleLeave,
    image: "popup__img-leave",
    button: "присоединиться к команде",
    sectionNameText: "Не упускайте шанс присоединиться к франшизе appzone.co",
    valueInput: "Закрытая",
  },
};

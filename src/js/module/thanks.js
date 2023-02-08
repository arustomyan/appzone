export function thanksPage() {
  if ($("#thanks1-body").length > 0) {
    let thanksName = document.querySelector(".thanks__title");
    let nameValue = localStorage.getItem("lpg3746_name");

    if (nameValue == null) {
      thanksName.innerHTML = `Благодарим Вас за <br />
                              обращение в компанию ASIASALE®`;

      document.title = `Cпасибо, Ваша заявка принята 👍`;
    } else {
      thanksName.innerHTML = `<span class="text_yellow">
                              <span class="thanks_name">${nameValue},</span></span>
                            благодарим&nbsp;Вас за&nbsp;обращение в компанию ASIASALE®`;
      document.title = `${nameValue}, спасибо, Ваша заявка принята 👍`;
    }
  }
}

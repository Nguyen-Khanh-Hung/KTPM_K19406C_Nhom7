module.exports = {
    connectionTab: "//span[contains(@class,'mat-content')]//p[contains(text(),'Kết nối')]",
    bankTitle: "//h4[contains(text(),'Ngân hàng')]",
    bankTab: "//a[contains(@class,'mat-list-item')]//span[contains(text(),'Ngân hàng')]",
    logoBankCard(bankname) { return `//div[@class='banks-personal']//div[contains(text(),'${bankname}')]` },
    cardTitle(bankname) { return `//mat-card-title//span[contains(text(),'${bankname}')]` },
    usernameBank: "//input[@data-placeholder='Tên đăng nhập']",
    passwordBank: "//input[@data-placeholder='Mật khẩu']",
    optionBankRadio: "//mat-radio-group[@role='radiogroup']//mat-radio-button",
    connectButton: "//button//span[contains(text(),'Liên kết')]",
    verifiedIcon: "//div[contains(@class,'mat-horizontal-stepper-header-container')]//mat-icon[text()='check']",
    selectRowbyBankUsername(username) { return `//table[@role='grid']//tr//*[text()[contains(.,'${username}')]]//preceding-sibling::td//mat-checkbox` },
    addNewBankButton: "//button//span[contains(text(),'Thêm tài khoản')]",
    bankInforDiv: "//div[contains(@class,'bank-acc-infor')]",
    reminiscentName: "//div[contains(@class,'bank-acc-infor')]//input[@formcontrolname='reminiscent']",
    updatePasswordIcon: "//mat-icon[@mattooltip='Cập nhật mật khẩu mới']",
    newPasswordField: "//input[@formcontrolname='newPassword']",
    changePasswordButton: "//button//span[contains(text(),'Thay đổi mật khẩu')]",
    doneReminiscentNameIcon: "//div[contains(@class,'bank-acc-infor')]//mat-icon[contains(text(),'done')]",
    changePasswordSuccessToast: "//div[@id='toast-container']//div[contains(text(),'Thay đổi mật khẩu thành công!')]",
    bankCard(reminiscentname) { return `//div[contains(@class,'bank-info')]//span[contains(text(),'${reminiscentname}')]` },
    deleteBankCardButton: "//button//span[contains(text(),'Xóa tài khoản ngân hàng')]",
    warningDeleteTitle: "//div[@class='cdk-overlay-pane']//h1[contains(text(),'Bạn có thật sự muốn xóa')]",
    subBankId: "//div[contains(@class,'content-bankAcc ')]//div[contains(@class,'bank-sub-acc-id')]",
    confirmInputField: "//input[@formcontrolname='confirm']",
    confirmDeleteButton: "//button//span[contains(text(),'Tôi hiểu điều này, xóa')]",
    bankConnectButton: "//button//span[contains(text(),'Liên kết ngân hàng')]",
    emailVerifyText: "//p[contains(@class,'break-words')]",
    emailLabel: "//div[contains(@id,'ITG')]//a[contains(@class,'mat-tooltip-trigger')]"
}
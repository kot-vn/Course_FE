export default {
    empty(field) {
        if (field.value == "") {
            field.message = "Vui lòng không bỏ trống mục này"
            return false
        }
        else
            return true
    },
    name(field) {
        if (/^[a-zA-Z ]{2,30}$/.test(field.value)) //eslint-disable-line
            return true
        else {
            field.message = "Thông tin bạn vừa nhập không hợp lệ"
            return false
        }
    },
    email(field) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(field.value)) //eslint-disable-line
            return true
        else {
            field.message = "Hãy chắc rằng bạn nhập đúng email của mình."
            return false
        }
    },
    password(field) {
        if (/^[a-zA-Z0-9_.-]*$/.test(field.value)) //eslint-disable-line
            return true
        else {
            field.message = "Mật khẩu là chuỗi có độ dài từ 7-15 ký tự và chứa ít nhất 1 ký tự đặc biệt:!@#$%^*"
            return false
        }
    },
    confirm(field1, field2) {
        if (field1.value != field2.value && field2.value != "") //eslint-disable-line)
        {
            field2.valid = false
            field2.message = "Mật khẩu xác nhận không giống"
            return false
        }
        else {
            field2.valid = true
            return true
        }
    },
    general(form) {
        for (const field in form) {
            if (form[field].valid == false || form[field].value == "") {
                return false
            }
        }
        return true
    }
}
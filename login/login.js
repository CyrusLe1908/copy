document.addEventListener('DOMContentLoaded', function() {
    // Lấy phần tử form đăng nhập
    const loginForm = document.querySelector('.login-form');

    // Lắng nghe sự kiện "submit" của form
    loginForm.addEventListener('submit', function(event) {
        // Ngăn trình duyệt tải lại trang khi form được submit
        event.preventDefault();

        // Lấy giá trị từ các ô input
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        const username = usernameInput.value;
        const password = passwordInput.value;

        // In ra console để kiểm tra giá trị (bạn có thể xóa sau)
        console.log('Tên tài khoản:', username);
        console.log('Mật khẩu:', password);

        // --- Phần này cần được thay thế bằng mã gửi dữ liệu lên server (backend) ---
        // Sử dụng fetch() hoặc thư viện Axios để gửi thông tin đăng nhập
        /*
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: username, password: password }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Đăng nhập thành công, chuyển hướng người dùng
                // Ví dụ: window.location.href = '/trang-chinh';
                console.log('Đăng nhập thành công!');
            } else {
                // Đăng nhập thất bại, hiển thị thông báo lỗi
                console.log('Đăng nhập thất bại:', data.message);
                alert('Tên tài khoản hoặc mật khẩu không đúng!');
            }
        })
        .catch((error) => {
            console.error('Lỗi khi gửi yêu cầu:', error);
        });
        */

        // Ví dụ đơn giản, hiển thị thông báo thành công tạm thời
        alert('Yêu cầu đăng nhập đã được gửi.');
    });
});
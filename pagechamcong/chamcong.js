document.addEventListener('DOMContentLoaded', function() {
    const onlineButton = document.querySelector('.action-button.online');
    const offlineButton = document.querySelector('.action-button.offline');
    const statusMessage = document.getElementById('status-message');

    // Biến trạng thái để kiểm tra người dùng đang online hay offline
    // Giả sử ban đầu người dùng đang offline
    let isOnline = false;

    // Hàm cập nhật trạng thái giao diện
    function updateUI() {
        if (isOnline) {
            onlineButton.style.display = 'none';
            offlineButton.style.display = 'block';
            statusMessage.textContent = 'Bạn đang online.';
            statusMessage.style.color = '#28a745'; // Màu xanh lá
        } else {
            onlineButton.style.display = 'block';
            offlineButton.style.display = 'none';
            statusMessage.textContent = 'Bạn đang offline.';
            statusMessage.style.color = '#dc3545'; // Màu đỏ
        }
    }

    // Xử lý sự kiện khi bấm nút "Chấm công vào"
    onlineButton.addEventListener('click', function() {
        // Đây là nơi bạn sẽ gửi dữ liệu chấm công lên server
        // Bằng cách sử dụng fetch() hoặc AJAX
        // Ví dụ:
        // const attendanceTime = new Date().toISOString();
        // console.log(`Thời gian chấm công vào: ${attendanceTime}`);
        
        // Sau khi gửi dữ liệu thành công, cập nhật trạng thái
        isOnline = true;
        updateUI();
    });

    // Xử lý sự kiện khi bấm nút "Chấm công ra"
    offlineButton.addEventListener('click', function() {
        // Đây là nơi bạn sẽ gửi dữ liệu chấm công lên server
        // Bằng cách sử dụng fetch() hoặc AJAX
        // Ví dụ:
        // const attendanceTime = new Date().toISOString();
        // console.log(`Thời gian chấm công ra: ${attendanceTime}`);

        // Sau khi gửi dữ liệu thành công, cập nhật trạng thái
        isOnline = false;
        updateUI();
    });

    // Cập nhật giao diện ban đầu
    updateUI();
});
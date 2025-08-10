document.addEventListener('DOMContentLoaded', function() {
    const employeeTableBody = document.getElementById('employeeTableBody');
    const searchInput = document.getElementById('searchInput');

    // Dữ liệu nhân viên giả lập
    // Trong thực tế, dữ liệu này sẽ được lấy từ API của bạn
    const employees = [
        { id: 1, name: 'CuongMaxx', rank: 'Thượng Sĩ', position: 'Cảnh Sát Trưởng' },
        { id: 2, name: 'Duy Iress', rank: 'Thiếu Tá', position: 'Giám Đốc' },
        { id: 3, name: 'Go Shabo', rank: 'Trung Sĩ', position: 'Cảnh Sát Viên' },
        // ... thêm các nhân viên khác
    ];

    function displayEmployees(employeeList) {
        employeeTableBody.innerHTML = ''; // Xóa dữ liệu cũ
        employeeList.forEach((employee, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${employee.name}</td>
                <td>${employee.rank}</td>
                <td>${employee.position}</td>
                <td><button onclick="viewDetails(${employee.id})">Xem chi tiết</button></td>
            `;
            employeeTableBody.appendChild(row);
        });
    }

    // Hàm tìm kiếm
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredEmployees = employees.filter(employee => 
            employee.name.toLowerCase().includes(searchTerm)
        );
        displayEmployees(filteredEmployees);
    });

    // Hàm xem chi tiết (giả lập)
    window.viewDetails = function(employeeId) {
        // Trong thực tế, bạn sẽ gửi yêu cầu tới server để lấy dữ liệu chi tiết của nhân viên này
        // Ví dụ: fetch(`/api/attendance/${employeeId}`)
        alert(`Bạn đã nhấp để xem chi tiết của nhân viên: ${employeeId}.`);
    };

    // Hiển thị danh sách nhân viên lần đầu tiên
    displayEmployees(employees);
});
document.addEventListener('DOMContentLoaded', function() {
    // ... (Mã xử lý danh sách nhân viên cũ)

    const addAccountForm = document.getElementById('addAccountForm');

    addAccountForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn form tải lại trang

        // Lấy giá trị từ các trường nhập liệu
        const newUsername = document.getElementById('newUsername').value;
        const newPassword = document.getElementById('newPassword').value;
        const newName = document.getElementById('newName').value;
        const newRank = document.getElementById('newRank').value;
        const newPosition = document.getElementById('newPosition').value;

        // Tạo một đối tượng dữ liệu để gửi lên server
        const newAccountData = {
            username: newUsername,
            password: newPassword,
            name: newName,
            rank: newRank,
            position: newPosition
        };

        console.log('Dữ liệu tài khoản mới:', newAccountData);

        // --- Gửi dữ liệu này lên server (backend) bằng fetch() hoặc Axios ---
        /*
        fetch('/api/add-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newAccountData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Tài khoản đã được thêm thành công!');
                addAccountForm.reset(); // Xóa dữ liệu trong form
                // Có thể cập nhật lại danh sách nhân viên trên giao diện
            } else {
                alert('Lỗi: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Lỗi khi thêm tài khoản:', error);
            alert('Đã có lỗi xảy ra. Vui lòng thử lại.');
        });
        */
    });
});
document.getElementById('add-todo').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();
    
    if (todoText) {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';

        // 체크박스 추가
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'mr-2'; // 오른쪽 여백 추가
        checkbox.onclick = function() {
            if (checkbox.checked) {
                li.style.textDecoration = 'line-through'; // 완료된 항목에 줄 긋기
            } else {
                li.style.textDecoration = 'none'; // 줄 긋기 제거
            }
        };
        li.appendChild(checkbox);

        // 할 일 텍스트 추가
        const textSpan = document.createElement('span');
        textSpan.textContent = todoText;
        li.appendChild(textSpan);

        // 삭제 버튼 추가
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '삭제';
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.onclick = function() {
            Swal.fire({
                title: '삭제 확인',
                text: '이 항목을 삭제하시겠습니까?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: '삭제',
                cancelButtonText: '취소'
            }).then((result) => {
                if (result.isConfirmed) {
                    document.getElementById('todo-list').removeChild(li); // 항목 삭제
                    Swal.fire(
                        '삭제됨!',
                        '할 일이 삭제되었습니다.',
                        'success'
                    );
                }
            });
        };
        li.appendChild(deleteButton);

        document.getElementById('todo-list').appendChild(li);
        input.value = '';
    }
});

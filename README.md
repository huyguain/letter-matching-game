This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Các reducer, context, componet trong bài test

Trong source code bài test này, tôi sử dụng useReducer, useContext (một trong những hooks của React) để quản 
lí state của project. Tất cả componet tôi đều sử dụng functional component và hooks thay vì sử dụng statefull 
component, lifecyle như những bản react cũ. Tối đã cố gắng cập nhật công nghệ mới nhất để xử lí bài toán được
đặt ra. Dưới đây là một số giải thích về reducer, context, componet mà tôi đã xây dựng trong project của mình:

### reducer

- Tối có biến khởi tạo state project (initialState) và reducer tương ứng để hứng action đươc dispatch từ các component.

### context

- Tối sử dụng hook useContext với mục đích biến thánh phần reducer (ở trên) của tôi có vai trò như biến toàn cục. Các component con có thể dùng chung, truy cập, gọi nó. Nhờ việc sử dụng useReducer, useContext tôi không cần sử dụng thêm thư viện Redux nưa - vốn cài cắm, dùng không phải quá dễ dàng lắm.

### App component

- Đây là component cha cao nhất của project. Ở đây, tôi gọi ra useReducer, rối lấy state và hàm dispatch của nó gán cho CardsContext. Sau đó, tôi bao CardsContext của mình provider component App.

### Header component
- Gồm các component con: Options, WonLose, BestTime.

### Options component
- Hiển thị option chọn mức độ chơi của trò chơi, nút bắt đầu chơi.

### WonLose component
- Hiển thị số trận thắng, thua của người chơi. Nhẽ ra, tối nên lưu lại dữ liệu này vào storage, đây là một thiếu sót.

### BestTime component
- Hiển thị ki lục của người chơi, tức là thời gian hoàn thành câu đố tuong ứng với 3 level.

### TimeRemainning component
- Hiển thị bộ đếm ngượi thời gian giới hạn cho người chơi.

### TimeRemainning component
- Hiển thị bộ đếm ngượi thời gian giới hạn cho người chơi.

### Board component
- Hiển thị danh sách Card component. Đây là component quan trọng nhát của project. Luồng của nó như sau:
+ Nó có 2 trạng thái checkers, completed. Checkers là mảng tối đa 2 phần tử, mục đích check 2 thẻ vừa chọn có match với nhau không. Nếu match, key của chúng sẽ được lưu vào mảng completed.

## Một số nguồn tham khảo

[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

[React documentation](https://reactjs.org/).

https://medium.com/@cqpro/lets-build-a-matching-card-game-with-react-d8923d915e46

##Một số thư viện cài thêm

- antd, bootstrap, node-sass, react-card-flip

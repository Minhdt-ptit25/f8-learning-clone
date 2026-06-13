const nodejsData = {
    title: 'Node.js Cơ Bản',
    chapters: [
        {
            id: 'node-chap-1',
            title: '1. Giới thiệu Node.js',
            lessons: [
                {
                    id: 'node-1',
                    title: 'Node.js là gì? Kiến trúc & Hoạt động',
                    type: 'theory',
                    content: `
                        <h2>1. Nguồn gốc và Lịch sử</h2>
                        <p>Trước năm 2009, JavaScript chỉ là một ngôn ngữ kịch bản chạy trong trình duyệt web (như Chrome, Firefox, IE) để tạo ra các hiệu ứng UI/UX. Không ai nghĩ rằng JavaScript có thể dùng để viết Server (Máy chủ).</p>
                        <p>Năm 2009, <strong>Ryan Dahl</strong> đã có một ý tưởng táo bạo: Lấy <strong>V8 Engine</strong> (Lõi xử lý JavaScript cực kỳ mạnh mẽ của Google Chrome), bọc nó lại bằng C++ và cung cấp cho nó khả năng truy cập vào hệ điều hành (Đọc/Ghi file, Kết nối mạng, Truy xuất Database). Kết quả là <strong>Node.js</strong> ra đời.</p>
                        <p>Node.js KHÔNG PHẢI là một ngôn ngữ lập trình, cũng KHÔNG PHẢI là một framework. Nó là một <strong>Môi trường Runtime (Runtime Environment)</strong> để thực thi mã JavaScript bên ngoài trình duyệt.</p>

                        <h2>2. Đặc điểm cốt lõi của Node.js</h2>
                        <h3>A. Kiến trúc Non-blocking I/O (Bất đồng bộ)</h3>
                        <p>Trong các ngôn ngữ truyền thống (như PHP, Java, Ruby), máy chủ xử lý các luồng theo mô hình <strong>Đồng bộ (Synchronous / Blocking)</strong>. Tưởng tượng bạn vào nhà hàng:</p>
                        <ul>
                            <li><strong>Mô hình Blocking (PHP/Java):</strong> Người phục vụ (Thread) đến nhận order của bạn. Sau đó, anh ta đứng chờ trước cửa bếp cho đến khi món ăn làm xong mới mang ra cho bạn, rồi mới đi nhận order của bàn khác. Nếu nhà hàng có 100 bàn, họ cần thuê 100 phục vụ (rất tốn RAM và CPU).</li>
                            <li><strong>Mô hình Non-blocking (Node.js):</strong> Chỉ có 1 người phục vụ duy nhất (Single Thread). Anh ta nhận order của bạn, chuyển ngay cho nhà bếp, rồi lập tức chạy đi nhận order của bàn số 2, số 3. Khi nào bếp báo món của bạn xong, anh ta mới quay lại mang món ra cho bạn.</li>
                        </ul>
                        <p>Chính nhờ mô hình này, Node.js có thể xử lý hàng chục ngàn kết nối đồng thời (Concurrent Connections) mà tốn rất ít tài nguyên máy chủ. Nó cực kỳ hoàn hảo cho các ứng dụng cần I/O lớn (Chat Realtime, Streaming, API Server).</p>

                        <h3>B. Single Threaded & Event Loop (Vòng lặp sự kiện)</h3>
                        <p>Node.js chạy trên một luồng duy nhất (Single Thread). Bất cứ khi nào có một tác vụ I/O nặng (ví dụ: query database mất 2 giây), Node.js sẽ ném tác vụ đó cho một bộ phận chạy ngầm (Worker Pool/Libuv) và tiếp tục thực thi các dòng code tiếp theo. Khi tác vụ ngầm hoàn tất, nó sẽ ném kết quả vào <strong>Event Queue</strong>. <strong>Event Loop</strong> liên tục kiểm tra Queue này và đẩy kết quả trở lại luồng chính khi luồng chính rảnh.</p>

                        <h2>3. NPM (Node Package Manager)</h2>
                        <p>Node.js đi kèm với NPM - Kho lưu trữ mã nguồn mở lớn nhất thế giới. Bạn không cần phải phát minh lại bánh xe. Cần thư viện upload ảnh? Có NPM. Cần thư viện gửi email? Có NPM. Với hơn 2 triệu gói (packages) có sẵn, hệ sinh thái Node.js phát triển với tốc độ vũ bão.</p>
                    `
                },
                {
                    id: 'node-2',
                    title: 'Trắc nghiệm: Node.js',
                    type: 'quiz',
                    content: '',
                    quiz: {
                        question: 'Nhờ vào đặc điểm nào mà Node.js có thể phục vụ hàng vạn kết nối cùng lúc mà không tốn nhiều RAM?',
                        options: [
                            { id: 'a', text: 'Nhờ sử dụng nhiều Threads (Đa luồng)' },
                            { id: 'b', text: 'Nhờ kiến trúc Non-blocking I/O và Event Loop' },
                            { id: 'c', text: 'Nhờ trình duyệt Google Chrome' },
                            { id: 'd', text: 'Nhờ viết bằng ngôn ngữ C++' }
                        ],
                        correctAnswer: 'b'
                    }
                }
            ]
        },
        {
            id: 'node-chap-2',
            title: '2. Express & Routing Chuyên Sâu',
            lessons: [
                {
                    id: 'node-3',
                    title: 'Bản chất của Express & Vòng đời Request',
                    type: 'theory',
                    content: `
                        <h2>1. ExpressJS là gì?</h2>
                        <p>Node.js cung cấp module <code>http</code> tích hợp sẵn để tạo server, nhưng nó cực kỳ thô sơ và phức tạp. Bạn phải tự xử lý việc chia tách URL, phân tích chuỗi truy vấn (query string), xử lý body của form-data thủ công.</p>
                        <p><strong>ExpressJS</strong> ra đời như một "chiếc áo khoác" bọc lấy module <code>http</code> đó. Nó là một Web Framework tối giản, cung cấp các hàm API mạnh mẽ để làm việc với Request và Response dễ dàng hơn gấp hàng chục lần.</p>

                        <h2>2. Routing (Định tuyến) Toàn Tập</h2>
                        <p>Routing là cơ chế mà Server quyết định cách phản hồi lại một Request từ Client dựa trên 2 yếu tố: <strong>HTTP Method</strong> và <strong>URL Endpoint</strong>.</p>
                        
                        <h3>A. Các HTTP Methods cốt lõi:</h3>
                        <ul>
                            <li><code>app.get()</code>: Dùng khi client muốn LẤY dữ liệu về (vd: xem danh sách bài viết). Không chứa body.</li>
                            <li><code>app.post()</code>: Dùng khi client muốn TẠO dữ liệu mới (vd: Đăng ký tài khoản). Dữ liệu bảo mật được giấu trong Request Body.</li>
                            <li><code>app.put()</code> hoặc <code>app.patch()</code>: Dùng khi muốn CẬP NHẬT dữ liệu đã có.</li>
                            <li><code>app.delete()</code>: Dùng khi muốn XÓA dữ liệu.</li>
                        </ul>

                        <h3>B. Lấy tham số từ Client</h3>
                        <p>Trong thực tế, Client hiếm khi chỉ gọi một URL trống không. Họ thường gửi kèm dữ liệu. Có 3 cách để Client gửi dữ liệu lên Express:</p>
                        
                        <h4>Cách 1: Route Parameters (req.params)</h4>
                        <p>Dùng để xác định một tài nguyên cụ thể. Thường dùng trong RESTful API.</p>
                        <pre><code>// Client truy cập: GET /users/123/posts/456
app.get('/users/:userId/posts/:postId', (req, res) => {
    const userId = req.params.userId; // "123"
    const postId = req.params.postId; // "456"
    res.send(\`Đang xem bài viết \${postId} của user \${userId}\`);
});</code></pre>

                        <h4>Cách 2: Query String (req.query)</h4>
                        <p>Thường dùng để tìm kiếm, lọc (filter), hoặc phân trang (pagination). Đặc điểm nhận dạng là dấu chấm hỏi <code>?</code> trên URL.</p>
                        <pre><code>// Client truy cập: GET /products?category=laptop&price=under20m
app.get('/products', (req, res) => {
    const category = req.query.category; // "laptop"
    const price = req.query.price;       // "under20m"
    res.send(\`Tìm \${category} với giá \${price}\`);
});</code></pre>

                        <h4>Cách 3: Request Body (req.body)</h4>
                        <p>Dùng cho POST/PUT/PATCH khi cần gửi một lượng dữ liệu lớn và bảo mật (VD: JSON, Form-data, File upload). Dữ liệu không hiển thị trên URL.</p>
                        <pre><code>// Lưu ý: Express cần Middleware để đọc được body!
app.use(express.json()); // Middleware parse JSON
app.use(express.urlencoded({ extended: true })); // Middleware parse Form Data

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Lưu vào database...
    res.send("Tạo tài khoản thành công!");
});</code></pre>
                    `
                },
                {
                    id: 'node-4',
                    title: 'Thực hành: Mô phỏng Route',
                    type: 'code',
                    content: '<p><em>Lưu ý: Do Editor này chạy trên Browser nên không thể require Node.js modules thật.</em></p><p>Hãy viết hàm mô phỏng route trả về JSON. Viết code sao cho khi gọi hàm <code>sendUser()</code>, nó in ra console chuỗi <code>{"name": "NodeJS F8"}</code>.</p>',
                    initialCode: 'function sendUser() {\n    // Khai báo data\n    var user = {name: "NodeJS F8"};\n    \n    // Chuyển đổi sang chuỗi JSON và in ra console\n    \n}\n\nsendUser();',
                    solution: 'function sendUser() {\n    var user = {name: "NodeJS F8"};\n    console.log(JSON.stringify(user));\n}\n\nsendUser();'
                }
            ]
        },
        {
            id: 'node-chap-3',
            title: '3. Template Engine & Static Files',
            lessons: [
                {
                    id: 'node-5',
                    title: 'Sức mạnh của Template Engine',
                    type: 'theory',
                    content: `
                        <h2>1. Vấn đề của HTML tĩnh</h2>
                        <p>Nếu bạn xây dựng website bằng các file <code>.html</code> thuần túy, nội dung của nó sẽ chết cứng. Nếu bạn có 1000 bài báo, bạn không thể tạo tay 1000 file HTML được. Bạn cần một bộ khung (Template), và server sẽ "bơm" nội dung từ Database vào bộ khung đó để tạo ra HTML rồi mới gửi cho người dùng.</p>

                        <h2>2. Handlebars (HBS) hoạt động thế nào?</h2>
                        <p>Handlebars là một trong những Template Engine phổ biến nhất. Khái niệm cốt lõi của nó là sử dụng cặp ngoặc nhọn kép <code>{{ }}</code> để nội suy biến (Interpolation).</p>
                        
                        <h3>Cú pháp nội suy cơ bản:</h3>
                        <pre><code>&lt;!-- profile.hbs --&gt;
&lt;div class="profile"&gt;
    &lt;h1&gt;Tên: {{user.name}}&lt;/h1&gt;
    &lt;p&gt;Email: {{user.email}}&lt;/p&gt;
&lt;/div&gt;</code></pre>

                        <h3>Cú pháp điều kiện (If/Else):</h3>
                        <pre><code>{{#if user.isAdmin}}
    &lt;button&gt;Xóa bài viết&lt;/button&gt;
{{else}}
    &lt;p&gt;Bạn không có quyền quản trị.&lt;/p&gt;
{{/if}}</code></pre>

                        <h3>Cú pháp Lặp (Vòng lặp Each):</h3>
                        <pre><code>&lt;ul&gt;
{{#each posts}}
    &lt;li&gt;&lt;h3&gt;{{this.title}}&lt;/h3&gt;&lt;p&gt;{{this.content}}&lt;/p&gt;&lt;/li&gt;
{{/each}}
&lt;/ul&gt;</code></pre>

                        <h2>3. Cấu trúc thư mục View</h2>
                        <p>Trong Handlebars, người ta thường dùng khái niệm <strong>Layouts</strong> và <strong>Partials</strong> để tránh lặp code HTML.</p>
                        <ul>
                            <li><strong>Layouts (main.hbs):</strong> Chứa cấu trúc xương sống của trang web (thẻ <code>&lt;html&gt;, &lt;head&gt;, &lt;body&gt;</code>). Nội dung từng trang sẽ được nhúng vào vị trí <code>{{{body}}}</code>.</li>
                            <li><strong>Partials (header.hbs, footer.hbs):</strong> Các thành phần dùng chung ở nhiều trang. Tránh việc trang nào cũng phải copy lại mã HTML của menu header.</li>
                        </ul>
                    `
                },
                {
                    id: 'node-6',
                    title: 'Quản lý tài nguyên với Static Files',
                    type: 'theory',
                    content: `
                        <h2>1. Tại sao Server mặc định chặn tệp tĩnh?</h2>
                        <p>Vì lý do bảo mật, Express mặc định KHÔNG cho phép người dùng từ bên ngoài truy cập vào bất kỳ file nào trên ổ cứng của Server (dù là file .css hay .png). Mọi Request đều phải đi qua Router.</p>
                        <p>Nếu bạn muốn trình duyệt có thể tải được ảnh logo, file CSS giao diện, hoặc file JS của client, bạn phải "đăng ký" khai báo công khai một thư mục cụ thể.</p>

                        <h2>2. Cấu hình express.static()</h2>
                        <p>Bạn thường sẽ tạo một thư mục tên là <code>public</code> nằm ở thư mục gốc của dự án. Bên trong đó chia ra: <code>css/</code>, <code>js/</code>, <code>img/</code>.</p>
                        <pre><code>const path = require('path');

// Sử dụng đường dẫn tuyệt đối an toàn hơn
app.use(express.static(path.join(__dirname, 'public')));</code></pre>
                        
                        <p><strong>Lưu ý chí mạng:</strong> Khi bạn nhúng file vào thẻ HTML, bạn KHÔNG ĐƯỢC viết thư mục <code>public</code> vào đường dẫn.</p>
                        <pre><code>&lt;!-- LỖI: Trình duyệt sẽ báo 404 Not Found --&gt;
&lt;img src="/public/img/logo.png"&gt;

&lt;!-- ĐÚNG: public đã trở thành thư mục gốc ảo --&gt;
&lt;img src="/img/logo.png"&gt;</code></pre>
                    `
                }
            ]
        },
        {
            id: 'node-chap-4',
            title: '4. Mô hình MVC & Middleware Chuyên Sâu',
            lessons: [
                {
                    id: 'node-7',
                    title: 'Giải phẫu kiến trúc MVC',
                    type: 'theory',
                    content: `
                        <h2>1. Tại sao cần MVC?</h2>
                        <p>Khi mới học, bạn thường viết tất cả mọi thứ: kết nối DB, query dữ liệu, if/else logic, và trả về HTML ngay bên trong hàm <code>app.get()</code>. Cách viết này gọi là "Spaghetti Code" (Code mì ý) - rối rắm, khó đọc, không thể bảo trì khi dự án lớn lên vài vạn dòng code.</p>
                        <p><strong>MVC (Model - View - Controller)</strong> sinh ra để giải quyết sự hỗn loạn này bằng nguyên lý "Seperation of Concerns" (Tách biệt mối quan tâm).</p>

                        <h2>2. Vai trò chi tiết của từng thành phần</h2>
                        <h3>Model (Người quản kho)</h3>
                        <p>Chỉ quan tâm đến DỮ LIỆU. Nó là nơi định nghĩa cấu trúc dữ liệu, và thực hiện các lệnh liên quan đến Database (SQL, MongoDB). Model KHÔNG BIẾT giao diện là gì, cũng không biết request là gì.</p>
                        
                        <h3>View (Người trang trí)</h3>
                        <p>Chỉ quan tâm đến HIỂN THỊ. Nó là các file Handlebars hoặc React/Vue. Nó nhận dữ liệu thô và gắn vào các thẻ HTML cho đẹp. View KHÔNG BIẾT dữ liệu lấy từ đâu ra.</p>

                        <h3>Controller (Người nhạc trưởng)</h3>
                        <p>Bộ não điều phối. Nó đứng giữa nhận Request từ Router, phân tích xem user muốn gì. Sau đó nó gọi Model: "Ê, lấy cho tao danh sách bài viết". Model trả về data. Controller xử lý tính toán logic (ví dụ tính tổng tiền), rồi đưa cục data đó cho View: "Ê, gắn đống data này vào khung HTML rồi trả về cho user đi".</p>

                        <h2>3. Cấu trúc thư mục chuẩn MVC trong Node.js</h2>
                        <pre><code>src/
 ├── config/       (Cấu hình DB)
 ├── controllers/  (Chứa các file logic: userController.js)
 ├── models/       (Chứa các định nghĩa dữ liệu: userModel.js)
 ├── routes/       (Chứa file định tuyến: index.js, users.js)
 ├── views/        (Chứa template HTML: home.hbs)
 └── index.js      (File chạy server chính)</code></pre>
                    `
                },
                {
                    id: 'node-8',
                    title: 'Middleware - Trái tim của Express',
                    type: 'theory',
                    content: `
                        <h2>1. Khái niệm Middleware</h2>
                        <p>Trong Express, <strong>mọi thứ đều là Middleware</strong>. Middleware là một hàm có quyền truy cập vào 3 đối tượng: <code>req</code> (Request), <code>res</code> (Response) và hàm <code>next</code>.</p>
                        <p>Tưởng tượng Express là một nhà máy dây chuyền băng chuyền. Một Request gửi đến sẽ được đưa lên băng chuyền. Middleware chính là các "công nhân" đứng dọc theo băng chuyền đó. Mỗi công nhân có thể:</p>
                        <ol>
                            <li>Chỉnh sửa gói hàng (Thêm data vào <code>req</code> hoặc <code>res</code>).</li>
                            <li>Dừng dây chuyền và trả hàng lại ngay lập tức (Dùng <code>res.send()</code> - ví dụ: phát hiện chưa đăng nhập nên đuổi về).</li>
                            <li>Đẩy gói hàng cho công nhân tiếp theo (Bằng cách gọi hàm <code>next()</code>).</li>
                        </ol>

                        <h2>2. Các loại Middleware</h2>
                        <h3>A. Application-level Middleware</h3>
                        <p>Gắn trực tiếp vào <code>app</code> bằng <code>app.use()</code>. Nó sẽ chạy qua MỌI request.</p>
                        <pre><code>// Middleware ghi log
app.use((req, res, next) => {
    console.log(\`[\${new Date()}] \${req.method} \${req.url}\`);
    next(); // Rất quan trọng! Quên next() request sẽ bị treo vô hạn.
});</code></pre>

                        <h3>B. Router-level Middleware</h3>
                        <p>Chỉ áp dụng cho các route cụ thể. Dùng để kiểm tra phân quyền (Authentication/Authorization).</p>
                        <pre><code>function requireAdmin(req, res, next) {
    if (req.user && req.user.role === 'admin') {
        next(); // Là admin, cho đi tiếp vào Controller
    } else {
        res.status(403).send("Bạn không có quyền truy cập!"); // Dừng lại, chặn!
    }
}

// Chỉ những ai qua được vòng requireAdmin mới vào được route xóa
app.delete('/users/:id', requireAdmin, userController.deleteUser);</code></pre>

                        <h3>C. Error-handling Middleware</h3>
                        <p>Là loại Middleware đặc biệt có 4 tham số <code>(err, req, res, next)</code>. Chuyên dùng để gom mọi lỗi vào một chỗ xử lý duy nhất ở cuối file <code>index.js</code>.</p>
                    `
                }
            ]
        },
        {
            id: 'node-chap-5',
            title: '5. MongoDB & Mongoose Chi Tiết',
            lessons: [
                {
                    id: 'node-9',
                    title: 'Triết lý của NoSQL và MongoDB',
                    type: 'theory',
                    content: `
                        <h2>1. Tại sao lại là NoSQL?</h2>
                        <p>Các hệ thống SQL truyền thống (MySQL, SQL Server) thiết kế theo mô hình quan hệ chặt chẽ. Dữ liệu được chia vào các bảng (Table) với các cột (Column) cố định. Nếu bạn muốn thêm 1 cột mới (vd: sở thích), bạn phải ALTER TABLE làm ảnh hưởng toàn bộ dữ liệu. Khi lấy dữ liệu phức tạp, bạn phải dùng lệnh JOIN chằng chịt, khiến truy vấn rất chậm khi dữ liệu phình to lên hàng chục triệu dòng.</p>
                        <p><strong>MongoDB (NoSQL)</strong> sinh ra để giải quyết bài toán "Big Data" và sự linh hoạt. Nó lưu trữ dữ liệu dưới dạng JSON (BSON). Dữ liệu liên quan thường được "nhúng" (Embed) trực tiếp vào nhau thay vì tách bảng.</p>

                        <h2>2. So sánh thuật ngữ SQL và MongoDB</h2>
                        <table style="width:100%; text-align:left; border-collapse: collapse; margin-bottom: 20px;">
                            <tr style="border-bottom: 1px solid #374151;">
                                <th style="padding: 8px;">SQL (MySQL)</th>
                                <th style="padding: 8px;">MongoDB</th>
                                <th style="padding: 8px;">Ý nghĩa</th>
                            </tr>
                            <tr style="border-bottom: 1px solid #374151;">
                                <td style="padding: 8px;">Database</td>
                                <td style="padding: 8px;">Database</td>
                                <td style="padding: 8px;">Cơ sở dữ liệu</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #374151;">
                                <td style="padding: 8px;">Table</td>
                                <td style="padding: 8px;">Collection</td>
                                <td style="padding: 8px;">Tập hợp dữ liệu (Vd: Bảng Users)</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #374151;">
                                <td style="padding: 8px;">Row</td>
                                <td style="padding: 8px;">Document</td>
                                <td style="padding: 8px;">Một bản ghi cụ thể (Vd: 1 User)</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #374151;">
                                <td style="padding: 8px;">Column</td>
                                <td style="padding: 8px;">Field</td>
                                <td style="padding: 8px;">Các trường dữ liệu (Name, Age)</td>
                            </tr>
                        </table>

                        <h2>3. Cấu trúc Document linh hoạt</h2>
                        <p>Một tính năng "ăn tiền" của MongoDB là <strong>Flexible Schema</strong>. Trong cùng một Collection "Products", sản phẩm A có thể có trường 'size', sản phẩm B không có trường 'size' nhưng lại có trường 'color'. Không hề xảy ra lỗi!</p>
                        <pre><code>// Document 1
{
    "_id": ObjectId("5f8a..."),
    "name": "Áo thun",
    "sizes": ["S", "M", "L"] // Lưu Array trực tiếp
}

// Document 2
{
    "_id": ObjectId("5f8b..."),
    "name": "Sách Node.js",
    "author": {              // Lưu Object trực tiếp (Embed)
        "name": "Ryan",
        "country": "USA"
    }
}</code></pre>
                    `
                },
                {
                    id: 'node-10',
                    title: 'Mongoose - Bảo vệ sự linh hoạt',
                    type: 'theory',
                    content: `
                        <h2>1. Tại sao dùng Mongoose?</h2>
                        <p>Sự linh hoạt của MongoDB đôi khi lại là "con dao hai lưỡi". Nếu không có gì ràng buộc, bạn có thể vô tình insert dữ liệu rác, thiếu trường (field) bắt buộc, hoặc sai kiểu dữ liệu (tuổi thay vì số lại lưu thành chữ).</p>
                        <p><strong>Mongoose</strong> là một công cụ nằm trung gian giữa Node.js và MongoDB. Nó áp đặt một bộ "Quy tắc" (gọi là Schema) lên cấu trúc dữ liệu trước khi cho phép lưu xuống Database.</p>

                        <h2>2. Khai báo Schema nâng cao</h2>
                        <p>Mongoose cung cấp các options validation rất mạnh mẽ:</p>
                        <pre><code>const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: [true, 'Tên đăng nhập là bắt buộc'],
        unique: true, // Đảm bảo không bị trùng lặp
        minlength: 5,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ // Regex validate email
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'moderator'], // Chỉ được phép chứa 1 trong 3 giá trị này
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now // Tự động lấy giờ hiện tại
    }
});

module.exports = mongoose.model('User', UserSchema);</code></pre>

                        <h2>3. Các câu lệnh Query thường dùng</h2>
                        <ul>
                            <li><code>Model.find({ role: 'admin' })</code>: Lấy tất cả user là admin.</li>
                            <li><code>Model.findOne({ email: 'abc@gmail.com' })</code>: Tìm 1 user cụ thể.</li>
                            <li><code>Model.findById(id)</code>: Tìm theo ID (Rất hay dùng).</li>
                            <li><code>Model.create({ data })</code>: Tạo bản ghi mới.</li>
                            <li><code>Model.findByIdAndUpdate(id, { data }, { new: true })</code>: Tìm và cập nhật.</li>
                            <li><code>Model.findByIdAndDelete(id)</code>: Xóa bản ghi.</li>
                        </ul>
                    `
                }
            ]
        },
        {
            id: 'node-chap-6',
            title: '6. Xây dựng RESTful API chuẩn mực',
            lessons: [
                {
                    id: 'node-11',
                    title: 'RESTful API & HTTP Status Code',
                    type: 'theory',
                    content: `
                        <h2>1. Triết lý RESTful API</h2>
                        <p>API (Application Programming Interface) là cầu nối để các phần mềm nói chuyện với nhau. RESTful API là một tiêu chuẩn thiết kế API nhằm làm cho các API trở nên dễ hiểu, nhất quán và dễ đoán.</p>
                        <p>Nguyên tắc cốt lõi: <strong>URL đại diện cho Tài nguyên (Resource)</strong> dưới dạng danh từ số nhiều, và <strong>HTTP Method đại diện cho Hành động</strong>.</p>
                        
                        <h3>Ví dụ thiết kế chuẩn REST cho tài nguyên "Bài viết" (Articles)</h3>
                        <ul>
                            <li><code>GET /articles</code> : Lấy danh sách toàn bộ bài viết.</li>
                            <li><code>GET /articles/:id</code> : Lấy chi tiết 1 bài viết theo ID.</li>
                            <li><code>POST /articles</code> : Tạo bài viết mới.</li>
                            <li><code>PUT /articles/:id</code> : Cập nhật TOÀN BỘ thông tin bài viết.</li>
                            <li><code>PATCH /articles/:id</code> : Cập nhật MỘT PHẦN bài viết.</li>
                            <li><code>DELETE /articles/:id</code> : Xóa bài viết.</li>
                        </ul>
                        <p><em>Lỗi thường gặp của Newbie:</em> Đặt URL chứa động từ (vd: <code>POST /createArticle</code> hoặc <code>POST /deleteArticle/:id</code>). Đây là chuẩn SOAP cũ, không phải RESTful.</p>

                        <h2>2. Cấu trúc Response chuẩn JSON</h2>
                        <p>Khi trả về kết quả, API nên có một format thống nhất giúp Frontend dễ xử lý. Thường người ta sẽ bọc dữ liệu trong thuộc tính <code>data</code> và cung cấp thuộc tính <code>message</code>.</p>
                        <pre><code>// Response thành công
res.status(200).json({
    success: true,
    message: "Lấy dữ liệu thành công",
    data: { id: 1, name: "NodeJS" }
});

// Response thất bại
res.status(404).json({
    success: false,
    message: "Không tìm thấy bài viết này!"
});</code></pre>

                        <h2>3. HTTP Status Code Quan Trọng</h2>
                        <p>Status code là cách Server thông báo cho Client biết trạng thái của Request mà không cần đọc nội dung.</p>
                        <ul>
                            <li><strong>Họ 2xx (Thành công):</strong>
                                <ul>
                                    <li><code>200 OK</code>: Giao dịch thành công.</li>
                                    <li><code>201 Created</code>: Tạo mới tài nguyên thành công (Dùng cho POST).</li>
                                </ul>
                            </li>
                            <li><strong>Họ 4xx (Lỗi do Client):</strong>
                                <ul>
                                    <li><code>400 Bad Request</code>: Dữ liệu gửi lên sai định dạng, thiếu trường bắt buộc.</li>
                                    <li><code>401 Unauthorized</code>: Người dùng chưa đăng nhập, hoặc token hết hạn.</li>
                                    <li><code>403 Forbidden</code>: Đã đăng nhập nhưng không đủ quyền hạn (vd: user thường cố xóa bài).</li>
                                    <li><code>404 Not Found</code>: Gọi sai URL hoặc tài nguyên không tồn tại.</li>
                                    <li><code>429 Too Many Requests</code>: Bị rate-limit do spam request liên tục.</li>
                                </ul>
                            </li>
                            <li><strong>Họ 5xx (Lỗi do Server):</strong>
                                <ul>
                                    <li><code>500 Internal Server Error</code>: Code backend bị crash (null pointer, lỗi logic).</li>
                                    <li><code>502 Bad Gateway</code>: Lỗi cấu hình máy chủ Nginx/Apache.</li>
                                </ul>
                            </li>
                        </ul>
                    `
                },
                {
                    id: 'node-12',
                    title: 'Trắc nghiệm: HTTP Methods & REST',
                    type: 'quiz',
                    content: '',
                    quiz: {
                        question: 'Theo chuẩn RESTful API, phương thức HTTP nào phù hợp nhất để lấy danh sách sinh viên có kèm theo các tham số lọc (filter)?',
                        options: [
                            { id: 'a', text: 'POST /students/filter' },
                            { id: 'b', text: 'GET /students?age=20&class=A' },
                            { id: 'c', text: 'PUT /students' },
                            { id: 'd', text: 'GET /getStudents' }
                        ],
                        correctAnswer: 'b'
                    }
                }
            ]
        },
        {
            id: 'node-chap-7',
            title: '7. Xác thực & Phân quyền (Authentication)',
            lessons: [
                {
                    id: 'node-13',
                    title: 'Giải mã JSON Web Token (JWT)',
                    type: 'theory',
                    content: `
                        <h2>1. JSON Web Token (JWT) là gì?</h2>
                        <p>JWT là một tiêu chuẩn công nghiệp (RFC 7519) dùng để truyền tải thông tin một cách an toàn giữa các bên dưới dạng một đối tượng JSON. Thông tin này có thể được xác minh và đáng tin cậy vì nó được ký điện tử (Digital Signature) bằng một chuỗi bí mật (Secret Key) trên server.</p>
                        <p>So với Session/Cookie truyền thống, JWT có ưu điểm lớn nhất là <strong>Stateless (Không lưu trạng thái)</strong>. Server không cần phải lưu trữ Token trong Database hay RAM, do đó giảm tải cực lớn cho Server và cực kỳ dễ mở rộng (Scalability) khi chạy nhiều server cùng lúc (Load Balancing).</p>
                        
                        <h2>2. Cấu trúc của JWT</h2>
                        <p>Một chuỗi JWT gồm 3 phần được phân cách nhau bởi dấu chấm <code>.</code> (Ví dụ: <code>aaaa.bbbb.cccc</code>)</p>
                        
                        <h3>Phần 1: Header (Tiêu đề)</h3>
                        <p>Bao gồm loại token (JWT) và thuật toán mã hóa được sử dụng (VD: HMAC SHA256 hay RSA).</p>

                        <h3>Phần 2: Payload (Dữ liệu)</h3>
                        <p>Chứa các "claims" (tuyên bố) là dữ liệu thực tế bạn muốn lưu trữ. Ví dụ: ID của user, tên, quyền hạn (role), và thời gian hết hạn của token (exp).</p>
                        <p><strong>LƯU Ý CỰC KỲ QUAN TRỌNG:</strong> Dữ liệu trong Header và Payload chỉ được mã hóa dạng Base64 (có thể dịch ngược dễ dàng). Tuyệt đối KHÔNG LƯU mật khẩu hay thông tin nhạy cảm vào Payload.</p>

                        <h3>Phần 3: Signature (Chữ ký)</h3>
                        <p>Đây là linh hồn của JWT. Nó được tạo ra bằng cách lấy <code>Header</code> + <code>Payload</code> băm cùng với một <strong>Secret Key</strong> (chỉ Server mới biết). Nếu hacker sửa dữ liệu trong Payload (vd: tự đổi quyền thành admin), Chữ ký sẽ bị sai lệch, và Server sẽ lập tức từ chối Token đó.</p>

                        <h2>3. Luồng hoạt động thực tế</h2>
                        <ol>
                            <li>Client gửi Request <code>POST /login</code> với Username và Password.</li>
                            <li>Server tra cứu Database, kiểm tra mật khẩu (thường dùng <code>bcrypt</code> để so sánh hash).</li>
                            <li>Nếu đúng, Server tạo ra 1 JWT chứa UserID và gửi trả về cho Client.</li>
                            <li>Client nhận Token, lưu trữ vào Local Storage hoặc HTTPOnly Cookie.</li>
                            <li>Mỗi khi Client muốn gọi các API yêu cầu bảo mật (VD: Đổi avatar), Client phải nhét Token này vào HTTP Header: <code>Authorization: Bearer &lt;TOKEN&gt;</code>.</li>
                            <li>Server đọc Header, xác minh chữ ký của Token. Nếu hợp lệ, Server trích xuất UserID từ Payload và cho phép hành động.</li>
                        </ol>
                    `
                }
            ]
        },
        {
            id: 'node-chap-8',
            title: '8. CORS & Bảo mật hệ thống',
            lessons: [
                {
                    id: 'node-15',
                    title: 'Làm chủ CORS và Hacking',
                    type: 'theory',
                    content: `
                        <h2>1. Nỗi ám ảnh mang tên CORS</h2>
                        <p>Bất kỳ ai lập trình Frontend kết nối với Backend đều từng thấy lỗi đỏ lòm này trên Console trình duyệt: <em>"Access to fetch at '...' from origin '...' has been blocked by CORS policy"</em>.</p>
                        <p><strong>CORS (Cross-Origin Resource Sharing)</strong> không phải là lỗi. Nó là một cơ chế bảo vệ của trình duyệt.</p>
                        <p>Mặc định, trình duyệt áp dụng <strong>Same-Origin Policy</strong>. Nó cấm đoạn mã JavaScript ở tên miền A (VD: <code>http://localhost:3000</code> - ReactJS) gọi API sang tên miền B (VD: <code>http://localhost:8000</code> - Node.js Server). Điều này để chống lại các cuộc tấn công CSRF (Hacker lừa trình duyệt của bạn âm thầm gọi API rút tiền).</p>

                        <h2>2. Cấu hình CORS trên Express</h2>
                        <p>Để cho phép Frontend gọi được API, Server Backend phải chèn một số Header đặc biệt vào Response (ví dụ: <code>Access-Control-Allow-Origin</code>). Thư viện <code>cors</code> sẽ làm việc này giúp bạn.</p>
                        <pre><code>const cors = require('cors');

// CÁCH 1: Mở cửa cho TẤT CẢ mọi người (Thường dùng cho Public API)
app.use(cors());

// CÁCH 2: Mở cửa có chọn lọc (Khuyên dùng cho bảo mật)
const corsOptions = {
    origin: ['http://localhost:3000', 'https://domain-cua-toi.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Cho phép gửi Cookie xuyên domain
};
app.use(cors(corsOptions));</code></pre>

                        <h2>3. Các biện pháp bảo mật căn bản cho Express</h2>
                        <ul>
                            <li><strong>Helmet:</strong> Một thư viện giúp tự động thiết lập các HTTP Header bảo mật để chống XSS, Clickjacking. <code>app.use(helmet())</code>.</li>
                            <li><strong>Rate Limiting:</strong> Giới hạn số lượng Request từ 1 IP trong một khoảng thời gian để chống tấn công DDoS và Brute Force mật khẩu. Dùng thư viện <code>express-rate-limit</code>.</li>
                            <li><strong>Bcrypt:</strong> Không bao giờ lưu mật khẩu dạng Text thuần vào Database. Phải hash mật khẩu bằng <code>bcrypt</code> với độ phức tạp cao (Salt rounds = 10).</li>
                        </ul>
                    `
                }
            ]
        },
        {
            id: 'node-chap-9',
            title: '9. Biến môi trường & Deploy',
            lessons: [
                {
                    id: 'node-16',
                    title: 'Bảo mật với biến môi trường (.env)',
                    type: 'theory',
                    content: `
                        <h2>1. Tại sao phải dùng biến môi trường?</h2>
                        <p>Khi code dự án, bạn sẽ có rất nhiều thông tin cấu hình nhạy cảm:</p>
                        <ul>
                            <li>Chuỗi kết nối Database (Chứa mật khẩu Database).</li>
                            <li>Chuỗi bí mật Secret Key của JWT.</li>
                            <li>API Key của các dịch vụ bên thứ ba (Stripe, Cloudinary, Sendgrid).</li>
                        </ul>
                        <p><strong>NGUY HIỂM:</strong> Nếu bạn viết hard-code các thông tin này vào file <code>.js</code> và Push lên Github, các con Bot của Hacker rình rập trên Github sẽ quét được trong vòng vài giây. Hậu quả là Database bị xóa sạch tống tiền, hoặc tài khoản AWS bị xài chùa hóa đơn hàng chục ngàn đô la.</p>

                        <h2>2. Sử dụng dotenv</h2>
                        <p>Biến môi trường giúp tách biệt mã nguồn (Code) và Cấu hình (Config). Bạn lưu cấu hình vào file <code>.env</code> (và file này BẮT BUỘC phải nằm trong danh sách <code>.gitignore</code>).</p>
                        <pre><code>// 1. Cài đặt: npm install dotenv

// 2. Nội dung file .env (Không có dấu nháy, không có dấu phẩy)
PORT=8000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/f8
JWT_SECRET=mot_chuoi_cuc_ky_bi_mat_va_kho_doan

// 3. Import trong file index.js (Phải để ở đầu file)
require('dotenv').config();

// 4. Sử dụng
const port = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI);</code></pre>
                    `
                },
                {
                    id: 'node-17',
                    title: 'Kiến thức triển khai (Deployment)',
                    type: 'theory',
                    content: `
                        <h2>1. Khái niệm Deployment</h2>
                        <p>Chạy ở <code>localhost</code> chỉ có một mình bạn xem được. Deployment là quá trình đưa mã nguồn Backend và Database của bạn lên một máy chủ (Server) trên Internet, có địa chỉ IP công cộng (Public IP) hoặc tên miền (Domain) để toàn thế giới có thể gọi API.</p>

                        <h2>2. Phân loại dịch vụ máy chủ</h2>
                        <ul>
                            <li><strong>IaaS (Infrastructure as a Service):</strong> Ví dụ: AWS EC2, DigitalOcean Droplets, Google Compute Engine. Bạn thuê một máy tính trống. Bạn phải tự cài hệ điều hành (Linux), tự cài Node.js, tự cài Nginx, bảo mật tường lửa. (Đòi hỏi kỹ năng SysAdmin/DevOps).</li>
                            <li><strong>PaaS (Platform as a Service):</strong> Ví dụ: Heroku, Render, Vercel, Railway. Họ đã cấu hình sẵn mọi thứ. Bạn chỉ cần đẩy code từ Github lên, hệ thống sẽ tự động <code>npm install</code> và <code>npm start</code>. Cực kỳ nhàn cho Developer.</li>
                        </ul>

                        <h2>3. Cơ sở dữ liệu Cloud</h2>
                        <p>Tương tự như code Backend, Database của bạn (MongoDB) cũng phải được đưa lên Cloud. Giải pháp tốt nhất và phổ biến nhất cho MongoDB hiện nay là <strong>MongoDB Atlas</strong>. Nó cung cấp Cluster miễn phí 512MB, bảo mật tự động, backup tự động, hoàn hảo để khởi đầu dự án.</p>
                    `
                }
            ]
        },
        {
            id: 'node-chap-10',
            title: '10. Xử lý Lỗi & Validation Nâng Cao',
            lessons: [
                {
                    id: 'node-18',
                    title: 'Kiến trúc Xử lý lỗi (Global Error Handling)',
                    type: 'theory',
                    content: `
                        <h2>1. Nỗi đau của việc xử lý lỗi cục bộ</h2>
                        <p>Khi mới học Node.js, mọi người thường viết khối <code>try/catch</code> cho từng API riêng lẻ. Nếu bạn có 100 APIs, bạn sẽ phải viết 100 khối <code>try/catch</code> lặp đi lặp lại. Hơn nữa, việc format câu báo lỗi (ví dụ trả về <code>{ success: false, message: '...' }</code>) cũng bị rải rác khắp nơi. Nếu sau này sếp yêu cầu đổi format báo lỗi, bạn sẽ phải sửa 100 chỗ.</p>

                        <h2>2. Giải pháp: Global Error Handler</h2>
                        <p>Express cung cấp một loại Middleware cực kỳ đặc biệt, nhận vào đúng 4 tham số: <code>(err, req, res, next)</code>. Middleware này LUÔN LUÔN được đặt ở dòng cuối cùng trong file <code>index.js</code> (hoặc <code>app.js</code>), ngay sau khi đã định nghĩa xong tất cả các Routes.</p>
                        
                        <h3>Cấu trúc Global Error Handler:</h3>
                        <pre><code>// Nằm ở dưới cùng của file app.js
app.use((err, req, res, next) => {
    // Log lỗi ra console để dev debug (có thể ghi ra file .log)
    console.error("LỖI HỆ THỐNG:", err.stack);
    
    // Gán mã lỗi mặc định là 500 (Lỗi máy chủ) nếu chưa có
    const statusCode = err.statusCode || 500;
    
    // Trả về JSON cho Frontend
    res.status(statusCode).json({
        success: false,
        message: err.message || "Đã xảy ra lỗi máy chủ nội bộ!",
        // Chỉ hiện stack trace ở môi trường dev để bảo mật
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
});</code></pre>

                        <h2>3. Cách sử dụng trong Controller</h2>
                        <p>Nhờ có hàm trên, trong các Controller, thay vì dùng <code>res.status(400).send()</code>, bạn chỉ cần gọi <code>next(error)</code>. Express sẽ lập tức nhảy bỏ qua tất cả các hàm khác và rơi thẳng vào Global Error Handler.</p>
                        <pre><code>const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            // Tạo đối tượng Error và ném cho Global Handler
            const error = new Error("Không tìm thấy User này");
            error.statusCode = 404;
            return next(error); 
        }
        res.json({ success: true, data: user });
    } catch (error) {
        // Ném lỗi văng ra từ Database
        next(error);
    }
};</code></pre>
                    `
                },
                {
                    id: 'node-19',
                    title: 'Xác thực dữ liệu với Joi (Data Validation)',
                    type: 'theory',
                    content: `
                        <h2>1. Nguyên tắc vàng: Đừng bao giờ tin tưởng Client</h2>
                        <p>Cho dù Frontend của bạn đã viết validate form kỹ càng đến đâu, một Hacker vẫn có thể mở phần mềm Postman lên và bắn thẳng dữ liệu bẩn (như mã độc SQL/NoSQL Injection, email sai định dạng, hay password chỉ có 1 ký tự) vào thẳng API Backend của bạn.</p>
                        <p><strong>Bắt buộc:</strong> Mọi dữ liệu đi vào Backend thông qua <code>req.body</code>, <code>req.query</code> hay <code>req.params</code> đều phải được kiểm tra tính hợp lệ trước khi chạm tới Controller hay Database.</p>

                        <h2>2. Thư viện Joi (Object Schema Validation)</h2>
                        <p>Joi là thư viện sinh ra để mô tả một "khuôn mẫu" (Schema) mà dữ liệu phải tuân theo. Nó cung cấp các hàm chain (nối tiếp) cực kỳ trực quan.</p>
                        
                        <h3>Tạo Schema và kiểm tra:</h3>
                        <pre><code>const Joi = require('joi');

// 1. Định nghĩa khuôn mẫu cho dữ liệu đăng ký
const registerSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required()
        .messages({
            'string.empty': 'Username không được để trống',
            'string.min': 'Username phải dài tối thiểu {#limit} ký tự'
        }),
        
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    
    email: Joi.string().email().required()
});

// 2. Viết Middleware để cản Request
const validateRegister = (req, res, next) => {
    // So sánh req.body với Schema
    const { error } = registerSchema.validate(req.body, { abortEarly: false });
    
    if (error) {
        // Lấy tất cả các thông báo lỗi trả về cho Frontend
        const errorMessages = error.details.map(detail => detail.message);
        return res.status(400).json({ 
            success: false, 
            errors: errorMessages 
        });
    }
    
    // Nếu dữ liệu sạch, cho đi tiếp
    next();
};

// 3. Gắn Middleware vào Route
app.post('/register', validateRegister, authController.register);</code></pre>
                    `
                }
            ]
        },
        {
            id: 'node-chap-11',
            title: '11. Xử lý File Upload (Multer & Cloudinary)',
            lessons: [
                {
                    id: 'node-20',
                    title: 'Làm chủ Middleware Multer',
                    type: 'theory',
                    content: `
                        <h2>1. Cơn ác mộng Multipart/form-data</h2>
                        <p>Mặc định, Express.js chỉ hiểu được dữ liệu dạng JSON hoặc Text. Khi bạn muốn upload một hình ảnh avatar hay một file PDF, form từ HTML bắt buộc phải có thuộc tính <code>enctype="multipart/form-data"</code>. Khi đó, Express "bó tay", không thể dịch được dữ liệu này thông qua <code>req.body</code>.</p>
                        <p>Để giải quyết, chúng ta dùng thư viện <strong>Multer</strong>. Nó là một Middleware chuyên biệt dùng để xử lý dòng dữ liệu thô (binary streams) và trích xuất file ra khỏi đó.</p>

                        <h2>2. Cấu hình Multer cơ bản</h2>
                        <pre><code>const multer = require('multer');
const path = require('path');

// 1. Khởi tạo Storage (Nơi lưu và tên file)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/'); // Lưu vào thư mục uploads
    },
    filename: function (req, file, cb) {
        // Tạo tên file độc nhất để không bị đè nhau
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname); // Lấy đuôi file (vd: .png)
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});

// 2. Bộ lọc (Chỉ cho phép ảnh)
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Chỉ được phép upload file hình ảnh!'), false);
    }
};

const upload = multer({ storage: storage, fileFilter: fileFilter, limits: { fileSize: 2 * 1024 * 1024 } });

// 3. Gắn vào Route
app.post('/profile/avatar', upload.single('avatar'), (req, res) => {
    // Thông tin file nằm trong req.file
    // Các dữ liệu text (tên, tuổi) nằm trong req.body
    res.json({ message: 'Tải ảnh thành công', file: req.file.filename });
});</code></pre>

                        <h2>3. Tích hợp Cloudinary (Giải pháp Cloud)</h2>
                        <p>Lưu file ảnh thẳng vào ổ cứng Server là một <strong>sai lầm lớn</strong> khi triển khai thực tế. Vì các dịch vụ như Heroku, Render sử dụng hệ thống "Ephemeral file system" (Hệ thống file tạm). Mỗi lần khởi động lại server (restart), toàn bộ ảnh upload sẽ <strong>BỊ XÓA SẠCH</strong>.</p>
                        <p>Do đó, ảnh phải được đẩy thẳng lên một bên thứ 3 lưu trữ chuyên nghiệp như <strong>AWS S3</strong>, <strong>Firebase Storage</strong> hoặc <strong>Cloudinary</strong>. Cloudinary rất được dân Node.js ưa chuộng vì nó có thư viện <code>multer-storage-cloudinary</code> giúp code Multer tự động đẩy thẳng ảnh lên Cloud mà không cần lưu xuống ổ cứng.</p>
                    `
                }
            ]
        },
        {
            id: 'node-chap-12',
            title: '12. Kỹ thuật Phân trang & Lọc dữ liệu',
            lessons: [
                {
                    id: 'node-21',
                    title: 'Pagination (Phân trang), Sort & Filter',
                    type: 'theory',
                    content: `
                        <h2>1. Áp lực lên Database (Tại sao phải phân trang?)</h2>
                        <p>Thử tưởng tượng sàn TMĐT Shopee có 50 triệu sản phẩm. Khi bạn vào xem đồ điện tử, nếu API thực hiện <code>Product.find()</code> rồi trả về 50 triệu sản phẩm cùng lúc thì RAM của server sẽ sập ngay tức khắc, và điện thoại của bạn cũng sẽ đứng hình vì tải file JSON nặng hàng GB.</p>
                        <p>Kỹ thuật <strong>Phân trang (Pagination)</strong> giúp cắt dữ liệu ra thành nhiều trang nhỏ (ví dụ mỗi trang hiển thị 20 sản phẩm). Client sẽ truyền lên Server số trang cần xem thông qua URL Query (<code>?page=1&limit=20</code>).</p>

                        <h2>2. Cú pháp cơ bản với Mongoose</h2>
                        <p>Trong MongoDB/Mongoose, ta dùng 2 hàm cốt lõi:</p>
                        <ul>
                            <li><code>limit(N)</code>: Lấy tối đa N bản ghi.</li>
                            <li><code>skip(M)</code>: Nhảy qua (bỏ qua) M bản ghi đầu tiên.</li>
                        </ul>
                        
                        <h3>Công thức tính Skip:</h3>
                        <p><code>skip = (page - 1) * limit</code></p>
                        <p>Ví dụ: Bạn muốn xem Trang 3, mỗi trang có 10 bài. Tính ra <code>skip = (3 - 1) * 10 = 20</code>. Tức là Database sẽ bỏ qua 20 bài đầu (thuộc trang 1 và 2), sau đó lấy 10 bài tiếp theo cho bạn.</p>

                        <h2>3. Ví dụ áp dụng đầy đủ (Filter + Sort + Pagination)</h2>
                        <pre><code>// GET /api/products?category=laptop&sort=price_desc&page=2&limit=12
const getProducts = async (req, res) => {
    try {
        // 1. Phân trang (Pagination)
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12;
        const skip = (page - 1) * limit;

        // 2. Lọc (Filter)
        let queryObj = {};
        if (req.query.category) {
            queryObj.category = req.query.category;
        }

        // 3. Sắp xếp (Sorting)
        let sortObj = {};
        if (req.query.sort === 'price_desc') sortObj.price = -1; // -1: Giảm dần
        if (req.query.sort === 'price_asc') sortObj.price = 1;   //  1: Tăng dần

        // Thực thi Query
        const products = await Product.find(queryObj)
            .sort(sortObj)
            .skip(skip)
            .limit(limit);

        // Lấy tổng số lượng để Frontend tự vẽ các nút [1][2][3]
        const totalElements = await Product.countDocuments(queryObj);
        const totalPages = Math.ceil(totalElements / limit);

        res.json({
            success: true,
            data: products,
            meta: {
                totalElements,
                totalPages,
                currentPage: page
            }
        });
    } catch (error) {
        res.status(500).json({ error: "Lỗi server" });
    }
};</code></pre>
                    `
                }
            ]
        },
        {
            id: 'node-chap-13',
            title: '13. Xây dựng Realtime với Socket.io',
            lessons: [
                {
                    id: 'node-22',
                    title: 'Làm chủ WebSockets và Giao thức Realtime',
                    type: 'theory',
                    content: `
                        <h2>1. HTTP là giao thức "Hỏi - Đáp" (Một chiều)</h2>
                        <p>Suốt từ đầu khóa học, chúng ta sử dụng giao thức HTTP. Đặc điểm của nó là <strong>Phi trạng thái (Stateless)</strong>. Nghĩa là Client phải mở miệng "gọi" lên Server (gửi Request), thì Server mới trả lời (gửi Response), sau đó lập tức ngắt kết nối.</p>
                        <p><strong>Vấn đề phát sinh:</strong> Trong ứng dụng Chat hoặc Bảng giá chứng khoán, Server cần chủ động "báo" cho điện thoại của bạn ngay khi có tin nhắn mới mà bạn không cần phải F5 tải lại trang. Nếu dùng HTTP, trình duyệt của bạn sẽ phải viết 1 hàm <code>setInterval</code> cứ 1 giây lại gửi 1 request lên server hỏi xem có tin nhắn mới không (kỹ thuật này gọi là <em>Short Polling</em>) => Cực kỳ ngốn băng thông và tốn tài nguyên.</p>

                        <h2>2. WebSockets là gì?</h2>
                        <p>Năm 2011, giao thức <strong>WebSocket</strong> ra đời. Sau khi Client và Server kết nối lần đầu (gọi là quá trình Handshake), một "ống dẫn nước" hai chiều (Bi-directional) sẽ được duy trì liên tục 24/24. Thông qua cái ống này, Server có thể "bơm" thẳng dữ liệu xuống Client bất cứ lúc nào, và ngược lại.</p>

                        <h2>3. Thư viện Socket.io</h2>
                        <p>Socket.io là thư viện xịn xò nhất thế giới Node.js dùng để xử lý WebSocket. Nó tự động quản lý các kết nối bị đứt, tự động rớt xuống (fallback) dùng Long-Polling nếu trình duyệt IE đời cũ không hỗ trợ WebSocket.</p>
                        
                        <h3>A. Phía Server (Node.js)</h3>
                        <pre><code>// 1. Tích hợp Socket.io cùng Express
const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// 2. Lắng nghe sự kiện kết nối
io.on('connection', (socket) => {
    console.log(\`Người dùng \${socket.id} vừa tham gia phòng\`);

    // Nhận tin nhắn từ ông A
    socket.on('client_send_message', (data) => {
        console.log("Nội dung:", data.text);
        
        // Phát loa (broadcast) tin nhắn này tới toàn bộ những người khác (B, C, D)
        // Dùng io.emit() sẽ gửi cho tất cả. Dùng socket.broadcast.emit() gửi cho người khác trừ ông A.
        io.emit('server_send_message', {
            user: socket.id,
            text: data.text,
            time: new Date()
        });
    });

    // Bắt sự kiện ngắt kết nối
    socket.on('disconnect', () => {
        console.log(\`Người dùng \${socket.id} đã thoát\`);
    });
});

// Chú ý: Phải dùng server.listen thay vì app.listen
server.listen(3000, () => console.log('Chạy server ở port 3000'));</code></pre>

                        <h3>B. Phía Client (Frontend)</h3>
                        <pre><code>&lt;!-- Nhúng thư viện Socket.io client --&gt;
&lt;script src="http://localhost:3000/socket.io/socket.io.js"&gt;&lt;/script&gt;
&lt;script&gt;
    // Khởi tạo kết nối tới server
    const socket = io('http://localhost:3000');

    // Nắng nghe tin nhắn từ Server đổ về
    socket.on('server_send_message', (msg) => {
        console.log("CÓ TIN NHẮN MỚI TỪ:", msg.user, "Nội dung:", msg.text);
        // JS tạo thẻ &lt;div&gt; nhét vào màn hình chat...
    });

    // Gửi tin nhắn lên Server khi ấn nút Enter
    function sendMessage() {
        const text = document.getElementById('chatInput').value;
        socket.emit('client_send_message', { text: text });
    }
&lt;/script&gt;</code></pre>
                    `
                }
            ]
        }
    ]
};

module.exports = nodejsData;

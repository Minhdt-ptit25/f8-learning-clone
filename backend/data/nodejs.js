const nodejsData = {
    title: 'Node.js Cơ Bản',
    chapters: [
        {
            id: 'node-chap-1',
            title: '1. Giới thiệu Node.js',
            lessons: [
                {
                    id: 'node-1',
                    title: 'Node.js là gì?',
                    type: 'theory',
                    content: `
                        <h2>Node.js là gì?</h2>
                        <p>Node.js là một môi trường runtime JavaScript đa nền tảng (cross-platform) và mã nguồn mở (open-source), dùng để chạy các ứng dụng JavaScript bên ngoài trình duyệt (máy chủ / backend).</p>
                    `
                },
                {
                    id: 'node-2',
                    title: 'Trắc nghiệm: Node.js',
                    type: 'quiz',
                    content: '',
                    quiz: {
                        question: 'Node.js được xây dựng dựa trên engine nào?',
                        options: [
                            { id: 'a', text: 'SpiderMonkey của Firefox' },
                            { id: 'b', text: 'V8 Engine của Google Chrome' },
                            { id: 'c', text: 'Chakra của Microsoft Edge' },
                            { id: 'd', text: 'JavaScriptCore của Safari' }
                        ],
                        correctAnswer: 'b'
                    }
                }
            ]
        },
        {
            id: 'node-chap-2',
            title: '2. Express & Routing',
            lessons: [
                {
                    id: 'node-3',
                    title: 'Khởi tạo ứng dụng Express',
                    type: 'theory',
                    content: `
                        <h2>ExpressJS</h2>
                        <p>Express là một web framework cực kỳ phổ biến và linh hoạt dành cho Node.js, dùng để xây dựng các Web Server & API nhanh chóng.</p>
                        <pre><code>const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Hello World!');\n});\n\napp.listen(3000);</code></pre>
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
                    title: 'Template Engine là gì?',
                    type: 'theory',
                    content: `
                        <h2>Template Engine (Handlebars)</h2>
                        <p>Template Engine giúp chúng ta viết HTML bằng cách sử dụng các cú pháp ngắn gọn, có thể nhúng biến JavaScript vào trực tiếp và tái sử dụng layout dễ dàng.</p>
                        <p>Ví dụ cú pháp Handlebars: <code>&lt;h1&gt;{{title}}&lt;/h1&gt;</code></p>
                    `
                },
                {
                    id: 'node-6',
                    title: 'Phục vụ Static Files',
                    type: 'theory',
                    content: `
                        <h2>Static Files (Tệp tĩnh)</h2>
                        <p>Để phục vụ các tệp tĩnh như hình ảnh, CSS, JavaScript tĩnh trong Express, chúng ta sử dụng hàm middleware tích hợp sẵn là <code>express.static</code>.</p>
                        <pre><code>app.use(express.static('public'));</code></pre>
                    `
                }
            ]
        },
        {
            id: 'node-chap-4',
            title: '4. Mô hình MVC & Middleware',
            lessons: [
                {
                    id: 'node-7',
                    title: 'Mô hình MVC',
                    type: 'theory',
                    content: `
                        <h2>Mô hình MVC (Model - View - Controller)</h2>
                        <p>Là một kiến trúc phần mềm giúp tổ chức code rành mạch, dễ bảo trì:</p>
                        <ul>
                            <li><strong>Model:</strong> Xử lý logic và tương tác với Database.</li>
                            <li><strong>View:</strong> Đảm nhiệm phần giao diện (UI) hiển thị cho người dùng.</li>
                            <li><strong>Controller:</strong> Tiếp nhận request, gọi Model lấy data và truyền xuống View.</li>
                        </ul>
                    `
                },
                {
                    id: 'node-8',
                    title: 'Middleware là gì?',
                    type: 'theory',
                    content: `
                        <h2>Middleware</h2>
                        <p>Middleware là những hàm được thực thi giữa quá trình nhận Request và trả về Response. Giống như một "trạm kiểm soát".</p>
                        <p>Thường dùng để: Xử lý body parser, kiểm tra phân quyền (Authentication), logging, v.v.</p>
                    `
                }
            ]
        },
        {
            id: 'node-chap-5',
            title: '5. MongoDB & Mongoose',
            lessons: [
                {
                    id: 'node-9',
                    title: 'Giới thiệu MongoDB',
                    type: 'theory',
                    content: `
                        <h2>MongoDB là gì?</h2>
                        <p>MongoDB là một cơ sở dữ liệu NoSQL, lưu trữ dữ liệu dưới dạng JSON/BSON thay vì các bảng (table) như MySQL.</p>
                        <p>Nó rất linh hoạt, hiệu năng cao và cực kỳ phù hợp khi kết hợp cùng Node.js.</p>
                    `
                },
                {
                    id: 'node-10',
                    title: 'Mongoose ODM',
                    type: 'theory',
                    content: `
                        <h2>Mongoose</h2>
                        <p>Mongoose là một thư viện ODM (Object Data Modeling) cho MongoDB và Node.js. Nó giúp chúng ta định nghĩa schema (cấu trúc dữ liệu) chặt chẽ và tương tác với database dễ dàng qua các object.</p>
                        <pre><code>const mongoose = require('mongoose');\nmongoose.connect('mongodb://localhost:27017/my_database');</code></pre>
                    `
                }
            ]
        },
        {
            id: 'node-chap-6',
            title: '6. Xây dựng RESTful API (CRUD)',
            lessons: [
                {
                    id: 'node-11',
                    title: 'RESTful API là gì?',
                    type: 'theory',
                    content: `
                        <h2>RESTful API</h2>
                        <p>RESTful API là tiêu chuẩn thiết kế API dựa trên kiến trúc REST. Sử dụng các HTTP method để thực hiện các hành động tương ứng (CRUD):</p>
                        <ul>
                            <li><strong>GET:</strong> Read - Lấy dữ liệu.</li>
                            <li><strong>POST:</strong> Create - Tạo mới dữ liệu.</li>
                            <li><strong>PUT / PATCH:</strong> Update - Cập nhật dữ liệu.</li>
                            <li><strong>DELETE:</strong> Delete - Xóa dữ liệu.</li>
                        </ul>
                    `
                },
                {
                    id: 'node-12',
                    title: 'Trắc nghiệm: HTTP Methods',
                    type: 'quiz',
                    content: '',
                    quiz: {
                        question: 'Phương thức HTTP nào được dùng chuẩn nhất để cập nhật (Update) một tài nguyên có sẵn?',
                        options: [
                            { id: 'a', text: 'GET' },
                            { id: 'b', text: 'POST' },
                            { id: 'c', text: 'PUT/PATCH' },
                            { id: 'd', text: 'DELETE' }
                        ],
                        correctAnswer: 'c'
                    }
                }
            ]
        }
    ]
};

module.exports = nodejsData;

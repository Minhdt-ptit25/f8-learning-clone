const coursesData = {
    'js-basic': {
        title: 'JavaScript Cơ Bản',
        chapters: [
            {
                id: 'chap-1',
                title: '1. Giới thiệu',
                lessons: [
                    {
                        id: 'js-basic-1',
                        title: 'Giới thiệu khóa học',
                        type: 'theory',
                        content: `
                            <h2>JavaScript là gì?</h2>
                            <p>JavaScript là ngôn ngữ lập trình kịch bản dựa trên đối tượng được phát triển để tạo ra các trang web tương tác.</p>
                            <p>Trong khóa học này, chúng ta sẽ đi từ con số 0. Học các khái niệm cốt lõi, cơ bản nhất của JavaScript, làm tiền đề vững chắc để các bạn có thể học tiếp các Framework/Library như ReactJS, VueJS, Angular...</p>
                            <br>
                            <p><strong>Lưu ý:</strong> JavaScript và Java là 2 ngôn ngữ hoàn toàn khác nhau. Đừng nhầm lẫn nhé!</p>
                        `
                    }
                ]
            },
            {
                id: 'chap-2',
                title: '2. Biến và Hàm built-in',
                lessons: [
                    {
                        id: 'js-basic-2',
                        title: 'Khai báo biến',
                        type: 'theory',
                        content: `
                            <h2>Khai báo biến (Variables)</h2>
                            <p>Biến được sử dụng để lưu trữ giá trị dữ liệu.</p>
                            <p>Chúng ta sử dụng từ khóa <code>var</code>, <code>let</code>, hoặc <code>const</code> để khai báo một biến. Trong đó <code>let</code> và <code>const</code> được khuyến khích sử dụng từ phiên bản ES6.</p>
                            <pre><code>var fullName = 'Sơn Đặng';\nvar age = 26;</code></pre>
                            <p>Tên biến trong JavaScript thường được đặt theo quy tắc <strong>camelCase</strong>.</p>
                        `
                    },
                    {
                        id: 'js-basic-3',
                        title: 'Thực hành: Khai báo biến',
                        type: 'code',
                        content: '<p>Hãy khai báo một biến có tên là <code>courseName</code> bằng từ khóa <code>var</code> và gán giá trị cho nó là <code>"JavaScript Cơ Bản"</code>. Sau đó in biến đó ra trình duyệt sử dụng <code>console.log()</code>.</p>',
                        initialCode: '// Khai báo biến courseName ở đây\n\n\n// In ra console\n',
                        solution: 'var courseName = "JavaScript Cơ Bản";\nconsole.log(courseName);'
                    },
                    {
                        id: 'js-basic-4',
                        title: 'Trắc nghiệm: Quy tắc đặt tên biến',
                        type: 'quiz',
                        content: '',
                        quiz: {
                            question: 'Cách đặt tên biến nào sau đây là KHÔNG hợp lệ trong JavaScript?',
                            options: [
                                { id: 'a', text: 'var fullName;' },
                                { id: 'b', text: 'var $courseName;' },
                                { id: 'c', text: 'var 1stLesson;' },
                                { id: 'd', text: 'var _address;' }
                            ],
                            correctAnswer: 'c'
                        }
                    },
                    {
                        id: 'js-basic-5',
                        title: 'Built-in functions cơ bản',
                        type: 'theory',
                        content: `
                            <h2>Một số hàm built-in (hàm tích hợp sẵn)</h2>
                            <p>JavaScript cung cấp sẵn một số hàm hữu ích để chúng ta thao tác với trình duyệt:</p>
                            <ul>
                                <li><code>console.log('message')</code>: In ra dòng tin nhắn ở tab Console.</li>
                                <li><code>alert('message')</code>: Bật lên một hộp thoại thông báo.</li>
                                <li><code>confirm('message')</code>: Bật lên hộp thoại xác nhận (OK / Cancel).</li>
                                <li><code>prompt('message')</code>: Bật lên hộp thoại có ô input để người dùng nhập liệu.</li>
                                <li><code>setTimeout(function, ms)</code>: Chạy một đoạn code SAU một khoảng thời gian.</li>
                                <li><code>setInterval(function, ms)</code>: Chạy LẶP ĐI LẶP LẠI một đoạn code sau một khoảng thời gian.</li>
                            </ul>
                        `
                    },
                    {
                        id: 'js-basic-6',
                        title: 'Thực hành: Built-in functions',
                        type: 'code',
                        content: '<p>Hãy in ra tab console chuỗi <code>"Học JS tại F8"</code> sử dụng hàm <code>console.log</code>.</p><p>Sau đó, hãy tạo một dòng cảnh báo (alert) với nội dung <code>"Cảnh báo F8"</code>. Tuy nhiên trong môi trường editor này, <code>alert</code> sẽ được giả lập thành console log để bạn dễ xem kết quả.</p>',
                        initialCode: '// Viết code của bạn ở đây\n',
                        solution: 'console.log("Học JS tại F8");\nalert("Cảnh báo F8");'
                    }
                ]
            },
            {
                id: 'chap-3',
                title: '3. Toán tử và Kiểu dữ liệu',
                lessons: [
                    {
                        id: 'js-basic-7',
                        title: 'Toán tử số học (Arithmetic)',
                        type: 'theory',
                        content: `
                            <h2>Toán tử số học trong JS</h2>
                            <p>Chúng ta có các toán tử cơ bản sau:</p>
                            <ul>
                                <li><code>+</code> Cộng</li>
                                <li><code>-</code> Trừ</li>
                                <li><code>*</code> Nhân</li>
                                <li><code>**</code> Lũy thừa</li>
                                <li><code>/</code> Chia</li>
                                <li><code>%</code> Chia lấy dư</li>
                                <li><code>++</code> Tăng 1 giá trị</li>
                                <li><code>--</code> Giảm 1 giá trị</li>
                            </ul>
                        `
                    },
                    {
                        id: 'js-basic-8',
                        title: 'Trắc nghiệm: Toán tử',
                        type: 'quiz',
                        content: '',
                        quiz: {
                            question: 'Kết quả của phép tính: 5 ** 2 là bao nhiêu?',
                            options: [
                                { id: 'a', text: '10' },
                                { id: 'b', text: '25' },
                                { id: 'c', text: '7' },
                                { id: 'd', text: 'Lỗi cú pháp' }
                            ],
                            correctAnswer: 'b'
                        }
                    },
                    {
                        id: 'js-basic-9',
                        title: 'Chuỗi (String)',
                        type: 'theory',
                        content: `
                            <h2>Làm việc với Chuỗi</h2>
                            <p>Chuỗi trong JS có thể đặt trong nháy đơn <code>''</code>, nháy kép <code>""</code>, hoặc backtick <code>\`\`</code>.</p>
                            <p>Một số phương thức hay dùng với chuỗi:</p>
                            <ul>
                                <li><code>length</code>: Trả về độ dài chuỗi.</li>
                                <li><code>indexOf('text')</code>: Tìm vị trí chuỗi.</li>
                                <li><code>slice(start, end)</code>: Cắt chuỗi.</li>
                                <li><code>replace('old', 'new')</code>: Thay thế.</li>
                                <li><code>toUpperCase()</code>: Viết hoa tất cả.</li>
                            </ul>
                        `
                    },
                    {
                        id: 'js-basic-10',
                        title: 'Thực hành: Làm việc với chuỗi',
                        type: 'code',
                        content: '<p>Cho một biến <code>myString = "Học JS tại F8"</code>. Hãy sử dụng các phương thức của chuỗi để tìm ra độ dài của chuỗi này và in ra console.</p>',
                        initialCode: 'var myString = "Học JS tại F8";\n\n// Khai báo biến doDai chứa độ dài chuỗi\n\n\n// In kết quả ra console\n',
                        solution: 'var myString = "Học JS tại F8";\nvar doDai = myString.length;\nconsole.log(doDai);'
                    }
                ]
            },
            {
                id: 'chap-4',
                title: '4. Câu lệnh rẽ nhánh',
                lessons: [
                    {
                        id: 'js-basic-11',
                        title: 'Câu lệnh if else',
                        type: 'theory',
                        content: `
                            <h2>Lệnh rẽ nhánh If Else</h2>
                            <p>Được sử dụng để thực thi một khối mã dựa trên một điều kiện đúng (true).</p>
                            <pre><code>if (condition) {\n    // Code chạy khi condition là true\n} else {\n    // Code chạy khi condition là false\n}</code></pre>
                        `
                    },
                    {
                        id: 'js-basic-12',
                        title: 'Thực hành: Lệnh if',
                        type: 'code',
                        content: '<p>Cho biến <code>age = 18</code>. Hãy viết lệnh kiểm tra nếu <code>age >= 18</code> thì in ra <code>"Đủ tuổi"</code>, ngược lại in ra <code>"Chưa đủ tuổi"</code>.</p>',
                        initialCode: 'var age = 18;\n\n// Viết lệnh if else ở đây\n',
                        solution: 'var age = 18;\nif (age >= 18) {\n    console.log("Đủ tuổi");\n} else {\n    console.log("Chưa đủ tuổi");\n}'
                    }
                ]
            },
            {
                id: 'chap-5',
                title: '5. Vòng lặp (Loops)',
                lessons: [
                    {
                        id: 'js-basic-13',
                        title: 'Vòng lặp For',
                        type: 'theory',
                        content: `
                            <h2>Vòng lặp For</h2>
                            <p>Vòng lặp giúp chúng ta lặp lại một khối mã nhiều lần với một điều kiện nhất định.</p>
                            <pre><code>for (var i = 0; i < 5; i++) {\n    console.log(i);\n}</code></pre>
                        `
                    },
                    {
                        id: 'js-basic-14',
                        title: 'Thực hành: In dãy số',
                        type: 'code',
                        content: '<p>Sử dụng vòng lặp for để in ra các số từ 1 đến 5.</p>',
                        initialCode: '// Viết vòng lặp for ở đây\n',
                        solution: 'for(var i = 1; i <= 5; i++) {\n    console.log(i);\n}'
                    }
                ]
            },
            {
                id: 'chap-6',
                title: '6. Làm việc với Mảng',
                lessons: [
                    {
                        id: 'js-basic-15',
                        title: 'Mảng (Array) là gì?',
                        type: 'theory',
                        content: `
                            <h2>Mảng trong JavaScript</h2>
                            <p>Mảng là một biến đặc biệt có thể lưu trữ nhiều giá trị tại cùng một thời điểm.</p>
                            <pre><code>var languages = [\n    'JavaScript',\n    'PHP',\n    'Ruby'\n];</code></pre>
                            <p>Để truy cập phần tử trong mảng, ta dùng chỉ mục (index). Index bắt đầu từ 0.</p>
                        `
                    },
                    {
                        id: 'js-basic-16',
                        title: 'Thực hành: Truy xuất mảng',
                        type: 'code',
                        content: '<p>Cho mảng <code>courses = ["HTML", "CSS", "JS"]</code>. Hãy in ra phần tử thứ 3 của mảng (JS).</p>',
                        initialCode: 'var courses = ["HTML", "CSS", "JS"];\n\n// In ra phần tử "JS" ở đây\n',
                        solution: 'var courses = ["HTML", "CSS", "JS"];\nconsole.log(courses[2]);'
                    },
                    {
                        id: 'js-basic-17',
                        title: 'Trắc nghiệm: Index của mảng',
                        type: 'quiz',
                        content: '',
                        quiz: {
                            question: 'Chỉ số (index) của phần tử đầu tiên trong mảng JavaScript là bao nhiêu?',
                            options: [
                                { id: 'a', text: '1' },
                                { id: 'b', text: '0' },
                                { id: 'c', text: '-1' },
                                { id: 'd', text: 'undefined' }
                            ],
                            correctAnswer: 'b'
                        }
                    }
                ]
            },
            {
                id: 'chap-7',
                title: '7. Đối tượng (Object)',
                lessons: [
                    {
                        id: 'js-basic-18',
                        title: 'Khái niệm Object',
                        type: 'theory',
                        content: `
                            <h2>Đối tượng (Object)</h2>
                            <p>Object dùng để lưu trữ các bộ dữ liệu dạng key-value. Ví dụ thông tin của một người dùng.</p>
                            <pre><code>var user = {\n    name: 'Sơn Đặng',\n    age: 26,\n    getName: function() {\n        return this.name;\n    }\n};</code></pre>
                        `
                    },
                    {
                        id: 'js-basic-19',
                        title: 'Thực hành: Tạo Object',
                        type: 'code',
                        content: '<p>Tạo một object <code>student</code> có 2 thuộc tính: <code>name</code> (chuỗi) và <code>age</code> (số). Sau đó in ra console giá trị của thuộc tính <code>name</code>.</p>',
                        initialCode: '// Tạo object student\n\n\n// In ra name\n',
                        solution: 'var student = {\n    name: "Học viên F8",\n    age: 20\n};\nconsole.log(student.name);'
                    }
                ]
            },
            {
                id: 'chap-8',
                title: '8. HTML DOM',
                lessons: [
                    {
                        id: 'js-basic-20',
                        title: 'DOM là gì?',
                        type: 'theory',
                        content: `
                            <h2>HTML DOM (Document Object Model)</h2>
                            <p>Khi trang web tải xong, trình duyệt tạo ra một mô hình DOM của trang đó.</p>
                            <p>Với HTML DOM, JavaScript có thể truy cập và thay đổi tất cả các thành phần (element), thuộc tính (attribute), style (CSS) của một trang web.</p>
                            <p>Các phương thức get element phổ biến:</p>
                            <ul>
                                <li><code>document.getElementById()</code></li>
                                <li><code>document.querySelector()</code></li>
                                <li><code>document.querySelectorAll()</code></li>
                            </ul>
                        `
                    },
                    {
                        id: 'js-basic-21',
                        title: 'Trắc nghiệm: DOM',
                        type: 'quiz',
                        content: '',
                        quiz: {
                            question: 'Phương thức nào trả về MỘT element duy nhất có id tương ứng?',
                            options: [
                                { id: 'a', text: 'document.getElementsByClassName' },
                                { id: 'b', text: 'document.querySelectorAll' },
                                { id: 'c', text: 'document.getElementById' },
                                { id: 'd', text: 'document.getElementsByTagName' }
                            ],
                            correctAnswer: 'c'
                        }
                    }
                ]
            },
            {
                id: 'chap-9',
                title: '9. Array Methods (Nâng cao)',
                lessons: [
                    {
                        id: 'js-basic-22',
                        title: 'Map và Filter',
                        type: 'theory',
                        content: `
                            <h2>Các phương thức xử lý mảng nâng cao</h2>
                            <p>Từ ES6, JavaScript cung cấp nhiều hàm cực kỳ mạnh mẽ để làm việc với mảng:</p>
                            <ul>
                                <li><code>map()</code>: Lặp qua từng phần tử và trả về một mảng mới với các phần tử đã được biến đổi.</li>
                                <li><code>filter()</code>: Lặp qua mảng và chỉ giữ lại những phần tử thỏa mãn điều kiện.</li>
                                <li><code>reduce()</code>: Lặp qua mảng để tính toán và trả về một giá trị duy nhất (ví dụ: tính tổng).</li>
                            </ul>
                        `
                    },
                    {
                        id: 'js-basic-23',
                        title: 'Thực hành: Dùng filter',
                        type: 'code',
                        content: '<p>Cho mảng <code>numbers = [1, 2, 3, 4, 5, 6]</code>. Hãy dùng hàm <code>filter()</code> để tạo ra mảng mới chỉ chứa các số chẵn, sau đó in ra console.</p>',
                        initialCode: 'var numbers = [1, 2, 3, 4, 5, 6];\n\n// Lọc số chẵn và in ra console\n',
                        solution: 'var numbers = [1, 2, 3, 4, 5, 6];\nvar evens = numbers.filter(function(n) { return n % 2 === 0; });\nconsole.log(evens);'
                    }
                ]
            },
            {
                id: 'chap-10',
                title: '10. DOM Events',
                lessons: [
                    {
                        id: 'js-basic-24',
                        title: 'DOM Events là gì?',
                        type: 'theory',
                        content: `
                            <h2>DOM Events (Sự kiện DOM)</h2>
                            <p>Sự kiện là những hành động xảy ra trên trang web, ví dụ như người dùng click chuột, gõ phím, di chuyển chuột, hoặc khi trang web tải xong.</p>
                            <p>Cách phổ biến nhất để lắng nghe sự kiện là sử dụng <code>addEventListener()</code>.</p>
                            <pre><code>var btn = document.getElementById('myBtn');\nbtn.addEventListener('click', function() {\n    console.log('Button clicked!');\n});</code></pre>
                        `
                    },
                    {
                        id: 'js-basic-25',
                        title: 'Trắc nghiệm: DOM Events',
                        type: 'quiz',
                        content: '',
                        quiz: {
                            question: 'Sự kiện nào xảy ra khi người dùng click vào một element?',
                            options: [
                                { id: 'a', text: 'onchange' },
                                { id: 'b', text: 'onmouseover' },
                                { id: 'c', text: 'onclick' },
                                { id: 'd', text: 'onkeydown' }
                            ],
                            correctAnswer: 'c'
                        }
                    }
                ]
            },
            {
                id: 'chap-11',
                title: '11. JSON & Fetch API',
                lessons: [
                    {
                        id: 'js-basic-26',
                        title: 'JSON là gì?',
                        type: 'theory',
                        content: `
                            <h2>JSON (JavaScript Object Notation)</h2>
                            <p>JSON là một định dạng dữ liệu văn bản rất nhẹ, dùng để lưu trữ và truyền tải dữ liệu giữa client (trình duyệt) và server.</p>
                            <ul>
                                <li><code>JSON.stringify()</code>: Chuyển đổi Object/Array sang chuỗi JSON.</li>
                                <li><code>JSON.parse()</code>: Chuyển đổi chuỗi JSON về lại Object/Array của JS.</li>
                            </ul>
                        `
                    },
                    {
                        id: 'js-basic-27',
                        title: 'Gọi API bằng Fetch',
                        type: 'theory',
                        content: `
                            <h2>Fetch API</h2>
                            <p><code>fetch()</code> là hàm có sẵn trong JS giúp chúng ta gọi API để lấy dữ liệu từ Server (Backend) về.</p>
                            <pre><code>fetch('https://jsonplaceholder.typicode.com/posts')\n    .then(response => response.json())\n    .then(data => console.log(data));</code></pre>
                        `
                    }
                ]
            },
            {
                id: 'chap-12',
                title: '12. ES6 Cơ Bản',
                lessons: [
                    {
                        id: 'js-basic-28',
                        title: 'Arrow Function',
                        type: 'theory',
                        content: `
                            <h2>Arrow Function (Hàm mũi tên)</h2>
                            <p>Arrow Function là cách viết hàm ngắn gọn hơn được giới thiệu từ ES6.</p>
                            <pre><code>// Cách cũ\nvar sum = function(a, b) {\n    return a + b;\n}\n\n// Arrow Function\nconst sum = (a, b) => a + b;</code></pre>
                        `
                    },
                    {
                        id: 'js-basic-29',
                        title: 'Thực hành: Viết Arrow Function',
                        type: 'code',
                        content: '<p>Hãy chuyển đổi hàm <code>multiply(a, b)</code> sau thành Arrow Function và in kết quả <code>multiply(5, 5)</code> ra console.</p>',
                        initialCode: '// Chuyển hàm này thành Arrow Function\nfunction multiply(a, b) {\n    return a * b;\n}\n\nconsole.log(multiply(5, 5));',
                        solution: 'const multiply = (a, b) => a * b;\nconsole.log(multiply(5, 5));'
                    }
                ]
            }
        ]
    },
    'js-advanced': {
        title: 'JavaScript Nâng Cao',
        chapters: [
            {
                id: 'chap-adv-1',
                title: '1. IIFE và Scope',
                lessons: [
                    {
                        id: 'js-adv-1',
                        title: 'IIFE là gì?',
                        type: 'theory',
                        content: `
                            <h2>IIFE (Immediately Invoked Function Expression)</h2>
                            <p>IIFE là một hàm được gọi ngay lập tức sau khi nó được định nghĩa.</p>
                            <pre><code>(function() {\n    console.log('NOW!');\n})();</code></pre>
                            <p>Nó thường được dùng để tạo ra một scope mới, tránh việc rò rỉ biến ra ngoài Global Scope gây xung đột tên biến.</p>
                        `
                    },
                    {
                        id: 'js-adv-2',
                        title: 'Trắc nghiệm: IIFE',
                        type: 'quiz',
                        content: '',
                        quiz: {
                            question: 'Tại sao lại cần phải thêm dấu ; trước một IIFE trong một số trường hợp?',
                            options: [
                                { id: 'a', text: 'Để JS Engine biết đây là một hàm' },
                                { id: 'b', text: 'Để hàm chạy nhanh hơn' },
                                { id: 'c', text: 'Để đề phòng lỗi nếu đoạn code phía trước không có dấu ; kết thúc' },
                                { id: 'd', text: 'Đây là quy định bắt buộc của JS, không có thì báo lỗi syntax' }
                            ],
                            correctAnswer: 'c'
                        }
                    }
                ]
            },
            {
                id: 'chap-adv-2',
                title: '2. Closure',
                lessons: [
                    {
                        id: 'js-adv-3',
                        title: 'Closures',
                        type: 'theory',
                        content: `
                            <h2>Closure</h2>
                            <p>Closure là một hàm có thể ghi nhớ nơi nó được tạo ra và có thể truy cập các biến ở bên ngoài phạm vi của nó (outer scope) ngay cả khi hàm bên ngoài đã thực thi xong.</p>
                        `
                    },
                    {
                        id: 'js-adv-4',
                        title: 'Thực hành: Tạo bộ đếm bằng Closure',
                        type: 'code',
                        content: '<p>Hãy viết một hàm <code>createCounter()</code> sử dụng closure. Hàm này sẽ trả về một hàm khác, mỗi lần gọi hàm con sẽ tăng bộ đếm lên 1 và trả về giá trị đó.</p>',
                        initialCode: 'function createCounter() {\n    // Khai báo biến count\n    \n    // Trả về một hàm tăng và trả về count\n    \n}\n\nconst counter = createCounter();\nconsole.log(counter()); // Mong đợi: 1\nconsole.log(counter()); // Mong đợi: 2\nconsole.log(counter()); // Mong đợi: 3',
                        solution: 'function createCounter() {\n    let count = 0;\n    return function() {\n        return ++count;\n    }\n}'
                    }
                ]
            }
        ]
    },
    'nodejs': {
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
    }
};

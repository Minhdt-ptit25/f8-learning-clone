const jsAdvancedData = {
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
                        <p>IIFE là một khái niệm rất quan trọng trong JS. Nó đơn giản là <strong>một hàm được gọi ngay lập tức</strong> ngay sau khi nó được định nghĩa.</p>
                        
                        <h3>Cú pháp:</h3>
                        <p>Hàm được bọc trong một cặp ngoặc đơn <code>()</code> để biến nó thành một biểu thức (Expression), sau đó gọi nó ngay lập tức bằng một cặp ngoặc đơn <code>()</code> nữa ở cuối.</p>
                        <pre><code>(function() {\n    console.log('Tôi chạy ngay lập tức!');\n})();</code></pre>

                        <h3>Tại sao cần IIFE?</h3>
                        <ul>
                            <li><strong>Tránh làm bẩn Global Scope:</strong> JS cũ chỉ có <code>var</code>, biến dễ bị rò rỉ ra toàn cục. Dùng IIFE tạo ra một không gian riêng tư (Private Scope), các biến bên trong IIFE sẽ không xung đột với các đoạn code bên ngoài.</li>
                            <li><strong>Dùng trong thư viện:</strong> jQuery và nhiều thư viện JS nổi tiếng sử dụng IIFE để bọc toàn bộ code của họ lại, tránh đụng hàng biến với người dùng.</li>
                        </ul>

                        <div style="background-color: rgba(240, 81, 35, 0.1); border-left: 4px solid var(--primary-color); padding: 15px; margin: 15px 0;">
                            <strong>Lưu ý dấu chấm phẩy (;):</strong> Khi dùng IIFE, cực kỳ khuyến khích đặt dấu <code>;</code> ở trước nó để tránh lỗi dính dòng nếu đoạn code phía trước bạn quên đóng ngoặc.
                            <pre style="margin-top: 10px; margin-bottom: 0;"><code>;(function() { ... })()</code></pre>
                        </div>
                    `
                },
                {
                    id: 'js-adv-2',
                    title: 'Trắc nghiệm: IIFE & Scope',
                    type: 'quiz',
                    content: '<p>Hãy trả lời các câu hỏi sau để nắm vững về phạm vi biến và IIFE.</p>',
                    quiz: [
                        {
                            question: 'Tại sao lại cần phải thêm dấu ; trước một IIFE trong một số trường hợp?',
                            options: [
                                { id: 'a', text: 'Để JS Engine biết đây là một hàm' },
                                { id: 'b', text: 'Để hàm chạy nhanh hơn' },
                                { id: 'c', text: 'Để đề phòng lỗi nếu đoạn code phía trước không có dấu ; kết thúc' },
                                { id: 'd', text: 'Đây là quy định bắt buộc của JS' }
                            ],
                            correctAnswer: 'c',
                            explanation: 'Nếu dòng code trước IIFE không có chấm phẩy, JS có thể hiểu nhầm ngoặc đơn của IIFE là đang gọi một hàm ở dòng trên, dẫn đến lỗi cú pháp nghiêm trọng.'
                        },
                        {
                            question: 'Trong đoạn code sau, kết quả in ra là gì?\n\nlet a = 1;\n(function() {\n  let a = 2;\n})();\nconsole.log(a);',
                            options: [
                                { id: 'a', text: '1' },
                                { id: 'b', text: '2' },
                                { id: 'c', text: 'undefined' },
                                { id: 'd', text: 'Lỗi' }
                            ],
                            correctAnswer: 'a',
                            explanation: 'Biến `a` = 2 được khai báo cục bộ bên trong IIFE, nên nó không ảnh hưởng đến biến `a` = 1 ở Global Scope ngoài cùng.'
                        }
                    ]
                }
            ]
        },
        {
            id: 'chap-adv-2',
            title: '2. Closure (Bao đóng)',
            lessons: [
                {
                    id: 'js-adv-3',
                    title: 'Closure siêu dễ hiểu',
                    type: 'theory',
                    content: `
                        <h2>Closure (Bao đóng) là gì?</h2>
                        <p>Closure là một hàm có thể <strong>ghi nhớ nơi nó được tạo ra</strong> và có thể truy cập các biến ở bên ngoài phạm vi của nó (outer scope) ngay cả khi hàm bên ngoài đã thực thi xong.</p>
                        
                        <h3>Ví dụ kinh điển: Tạo bộ đếm</h3>
                        <pre><code>function createCounter() {\n    let count = 0; // Biến này là private, bị nhốt trong hàm\n\n    function increase() {\n        return ++count;\n    }\n    \n    return increase;\n}\n\nconst counter1 = createCounter();\nconsole.log(counter1()); // In ra 1\nconsole.log(counter1()); // In ra 2\n\nconst counter2 = createCounter(); // Tạo một bộ đếm mới toanh\nconsole.log(counter2()); // In ra 1</code></pre>

                        <h3>Ứng dụng thực tế của Closure:</h3>
                        <ul>
                            <li><strong>Bảo vệ dữ liệu (Data Privacy):</strong> Biến <code>count</code> không thể bị sửa đổi trực tiếp từ bên ngoài (như <code>counter1.count = 100</code> là bất khả thi). Nó chỉ có thể bị thay đổi thông qua hàm <code>increase</code>.</li>
                            <li>Dùng để viết các hàm Currying, hoặc viết thư viện giữ state.</li>
                        </ul>
                    `
                },
                {
                    id: 'js-adv-4',
                    title: 'Thực hành: Closure Logger',
                    type: 'code',
                    content: '<p>Hãy viết một hàm <code>createLogger(namespace)</code> trả về một hàm ghi log, sao cho khi gọi hàm trả về với một message, nó tự động thêm namespace vào phía trước.</p>',
                    initialCode: 'function createLogger(namespace) {\n    // Viết code dùng closure ở đây\n    \n}\n\nconst warnLogger = createLogger("[CẢNH BÁO]");\nconsole.warn(warnLogger("Lỗi mất mạng!")); \n// Kỳ vọng ra chuỗi: "[CẢNH BÁO] Lỗi mất mạng!"',
                    solution: 'function createLogger(namespace) {\n    return function(message) {\n        return namespace + " " + message;\n    }\n}'
                }
            ]
        },
        {
            id: 'chap-adv-3',
            title: '3. Từ khóa This, Bind, Call, Apply',
            lessons: [
                {
                    id: 'js-adv-5',
                    title: 'Hiểu cặn kẽ từ khóa THIS',
                    type: 'theory',
                    content: `
                        <h2>Từ khóa THIS</h2>
                        <p>Trong JS, <code>this</code> trỏ tới đối tượng (Object) đang gọi tới hàm chứa nó. Nếu không có ai gọi, nó trỏ tới <code>window</code> (trình duyệt).</p>
                        <pre><code>const car = {\n    name: "BMW",\n    run: function() {\n        console.log(this.name + " đang chạy!");\n    }\n};\n\ncar.run(); // this trỏ tới car => "BMW đang chạy!"</code></pre>

                        <h3>Mất context của THIS (Gotcha)</h3>
                        <pre><code>const runFunc = car.run;\nrunFunc(); // LỖI! "undefined đang chạy". Vì lúc này this bị trỏ ra window, không còn là car nữa.</code></pre>

                        <h3>Giải cứu bằng Bind, Call, Apply</h3>
                        <p>Đây là 3 phương thức có sẵn của các Function giúp ta ép buộc <code>this</code> trỏ về đối tượng mong muốn.</p>
                        <ul>
                            <li><strong><code>bind(obj)</code>:</strong> Trả về MỘT HÀM MỚI với <code>this</code> được trói chặt vào <code>obj</code>. (Không tự chạy).</li>
                            <li><strong><code>call(obj, arg1, arg2)</code>:</strong> Gọi hàm CHẠY NGAY LẬP TỨC, với <code>this</code> là <code>obj</code>, truyền các đối số rời rạc.</li>
                            <li><strong><code>apply(obj, [arg1, arg2])</code>:</strong> Gọi hàm CHẠY NGAY LẬP TỨC giống Call, nhưng truyền các đối số bằng MẢNG.</li>
                        </ul>
                    `
                },
                {
                    id: 'js-adv-6',
                    title: 'Trắc nghiệm: Bind, Call, Apply',
                    type: 'quiz',
                    content: '',
                    quiz: [
                        {
                            question: 'Điểm khác biệt chính giữa CALL và BIND là gì?',
                            options: [
                                { id: 'a', text: 'Call mượn hàm nhưng không chạy, Bind thì chạy ngay' },
                                { id: 'b', text: 'Call chạy hàm ngay lập tức, Bind trả về một hàm mới (không chạy)' },
                                { id: 'c', text: 'Call truyền tham số dạng mảng, Bind truyền rời rạc' },
                                { id: 'd', text: 'Cả 2 đều giống hệt nhau' }
                            ],
                            correctAnswer: 'b',
                            explanation: 'Phương thức call() sẽ thực thi hàm ngay lập tức với context mới, trong khi bind() chỉ đứng ra "ràng buộc" context và trả về một bản sao của hàm đó để bạn có thể gọi sau này.'
                        },
                        {
                            question: 'Sự khác biệt giữa CALL và APPLY?',
                            options: [
                                { id: 'a', text: 'Apply truyền đối số dưới dạng Mảng (Array), Call truyền rời rạc dấu phẩy' },
                                { id: 'b', text: 'Call truyền đối số dưới dạng Mảng, Apply truyền rời rạc' },
                                { id: 'c', text: 'Apply nhanh hơn Call' },
                                { id: 'd', text: 'Không có sự khác biệt' }
                            ],
                            correctAnswer: 'a',
                            explanation: 'Cả hai đều thực thi hàm ngay lập tức. Nhưng `apply` nhận danh sách tham số là một mảng `[arg1, arg2]`, còn `call` thì phân tách bằng dấu phẩy `arg1, arg2`.'
                        }
                    ]
                }
            ]
        },
        {
            id: 'chap-adv-4',
            title: '4. Bất đồng bộ (Async)',
            lessons: [
                {
                    id: 'js-adv-7',
                    title: 'Promise & Async/Await',
                    type: 'theory',
                    content: `
                        <h2>Bất đồng bộ - Nỗi ám ảnh của JS</h2>
                        <p>JS là ngôn ngữ đơn luồng (Single-thread). Nếu nó chạy các tác vụ mất thời gian (ví dụ: Tải file dung lượng lớn), nó sẽ làm "đơ" toàn bộ trang web. Để giải quyết, JS sinh ra Bất đồng bộ (Asynchronous).</p>

                        <h3>1. Callback Hell (Vấn đề quá khứ)</h3>
                        <p>Ngày xưa, để đợi tải xong rồi mới chạy tiếp, người ta nhét hàm con vào hàm cha. Nó sinh ra hiện tượng "Địa ngục Callback" code lồng nhau hình phễu cực kỳ khó đọc.</p>

                        <h3>2. Promise (Lời hứa)</h3>
                        <p>Ra đời ở ES6, nó định nghĩa một cam kết. "Tôi hứa sẽ đi lấy dữ liệu, khi nào xong tôi sẽ báo lại".</p>
                        <pre><code>const promise = new Promise((resolve, reject) => {\n   let thanhCong = true;\n   if(thanhCong) resolve("Dữ liệu về rồi");\n   else reject("Lỗi mạng!");\n});\n\npromise\n  .then(data => console.log(data)) // Nếu resolve\n  .catch(err => console.log(err)); // Nếu reject</code></pre>

                        <h3>3. Async / Await (Chân ái hiện tại)</h3>
                        <p>ES8 nâng cấp Promise lên một tầm cao mới. Viết code bất đồng bộ mà trông gọn gàng i hệt code đồng bộ.</p>
                        <ul>
                            <li><strong><code>async</code>:</strong> Đặt trước tên hàm, biến hàm đó thành hàm luôn trả về Promise.</li>
                            <li><strong><code>await</code>:</strong> Bắt JS "đứng đợi" ở dòng code đó cho tới khi Promise làm xong việc mới được chạy dòng tiếp theo. Dùng thay cho <code>.then()</code>.</li>
                        </ul>
                    `
                },
                {
                    id: 'js-adv-8',
                    title: 'Thực hành: Fetch với Async/Await',
                    type: 'code',
                    content: '<p>Chuyển đổi đoạn code dùng `fetch().then()` dưới đây sang cú pháp `async/await`. Lưu ý phải bọc bằng `try...catch` để bắt lỗi.</p>',
                    initialCode: '// Cũ: \n// fetch("https://jsonplaceholder.typicode.com/todos/1")\n//   .then(res => res.json())\n//   .then(data => console.log(data.title));\n\nasync function getTodo() {\n    // Viết code async/await của bạn ở đây\n    \n}\n\ngetTodo();',
                    solution: 'async function getTodo() {\n    try {\n        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");\n        const data = await response.json();\n        console.log(data.title);\n    } catch (err) {\n        console.log(err);\n    }\n}'
                }
            ]
        },
        {
            id: 'chap-adv-5',
            title: '5. ES6+ Tính năng hiện đại',
            lessons: [
                {
                    id: 'js-adv-9',
                    title: 'Destructuring, Rest & Spread',
                    type: 'theory',
                    content: `
                        <h2>ES6+ (ECMAScript 2015 trở đi)</h2>
                        <p>JS đã có những đợt lột xác ngoạn mục với các cú pháp mới giúp code ngắn gọn và dễ đọc hơn rất nhiều.</p>

                        <h3>1. Destructuring (Phân rã)</h3>
                        <p>Giúp "giải nén" các giá trị từ Array hoặc Object thành các biến riêng biệt một cách nhanh chóng.</p>
                        <pre><code>// Đối với Object\nconst user = { name: "Minh", age: 20, role: "Admin" };\nconst { name, age } = user;\nconsole.log(name); // "Minh"\n\n// Đối với Array\nconst rgb = [255, 100, 50];\nconst [r, g, b] = rgb;\nconsole.log(r); // 255</code></pre>

                        <h3>2. Spread Operator (...) - Toán tử rải</h3>
                        <p>Dùng để "mở bung" một Array hoặc Object. Rất hữu ích khi cần copy hoặc gộp dữ liệu.</p>
                        <pre><code>const arr1 = [1, 2];\nconst arr2 = [3, 4];\n\n// Gộp mảng\nconst arr3 = [...arr1, ...arr2]; // [1, 2, 3, 4]\n\n// Copy Object (Tránh tham chiếu)\nconst obj1 = { x: 1 };\nconst obj2 = { ...obj1, y: 2 }; // { x: 1, y: 2 }</code></pre>

                        <h3>3. Rest Parameters (...) - Toán tử gom</h3>
                        <p>Cũng là 3 dấu chấm, nhưng nằm ở phần tham số của hàm, giúp "gom" tất cả các tham số truyền vào thành một Mảng.</p>
                        <pre><code>function sum(...numbers) {\n    return numbers.reduce((total, num) => total + num, 0);\n}\nconsole.log(sum(1, 2, 3, 4)); // Trả về 10</code></pre>
                    `
                },
                {
                    id: 'js-adv-10',
                    title: 'Trắc nghiệm: ES6',
                    type: 'quiz',
                    content: '<p>Làm 2 câu trắc nghiệm để nhớ cú pháp của toán tử 3 chấm (...) nhé!</p>',
                    quiz: [
                        {
                            question: 'Toán tử Spread (...) và Rest (...) khác nhau như thế nào?',
                            options: [
                                { id: 'a', text: 'Spread dùng để gom các phần tử thành mảng, Rest dùng để rải mảng' },
                                { id: 'b', text: 'Spread mở bung array/object, Rest gom các tham số lại thành array' },
                                { id: 'c', text: 'Cả 2 là một, chỉ khác tên gọi' },
                                { id: 'd', text: 'JS không có Rest, chỉ có Spread' }
                            ],
                            correctAnswer: 'b',
                            explanation: 'Cùng là dấu 3 chấm `...` nhưng nếu dùng lúc định nghĩa hàm thì là Rest (gom tham số), còn dùng lúc gọi biến/mảng/đối tượng thì là Spread (bung tỏa).'
                        },
                        {
                            question: 'Bạn destructuring một thuộc tính không tồn tại trong Object thì kết quả là gì?',
                            options: [
                                { id: 'a', text: 'Báo lỗi (Error)' },
                                { id: 'b', text: 'null' },
                                { id: 'c', text: 'undefined' },
                                { id: 'd', text: 'false' }
                            ],
                            correctAnswer: 'c',
                            explanation: 'Nếu bạn cố gắng lấy một key không tồn tại, JS sẽ gán cho nó giá trị mặc định là `undefined` chứ không làm sập chương trình.'
                        }
                    ]
                }
            ]
        },
        {
            id: 'chap-adv-6',
            title: '6. Lập trình Hướng đối tượng (OOP)',
            lessons: [
                {
                    id: 'js-adv-11',
                    title: 'Prototype & Classes',
                    type: 'theory',
                    content: `
                        <h2>Lập trình Hướng đối tượng trong JS</h2>
                        
                        <h3>1. Prototype (Nguyên mẫu)</h3>
                        <p>JavaScript là ngôn ngữ dựa trên Prototype (Prototype-based). Mỗi object đều có một liên kết ngầm tới một object khác gọi là Prototype của nó.</p>
                        <p>Ví dụ: Khi bạn tạo 1 mảng <code>const arr = []</code>, bạn có thể gọi <code>arr.push()</code> mặc dù bạn không hề tự viết ra hàm đó. Đó là vì hàm push() đã được mảng của bạn <strong>kế thừa</strong> từ <code>Array.prototype</code> do JS xây sẵn.</p>
                        
                        <h3>2. Class (Lớp)</h3>
                        <p>Từ ES6, JS đã mượn khái niệm <strong>Class</strong> (giống Java, C++) để viết OOP dễ nhìn hơn. Nhưng thực chất bên dưới, nó vẫn chạy bằng cơ chế Prototype (Syntactic sugar - "Lớp đường cú pháp").</p>
                        <pre><code>class Person {\n    // Hàm khởi tạo (Chạy tự động khi dùng từ khóa new)\n    constructor(name, age) {\n        this.name = name;\n        this.age = age;\n    }\n\n    // Phương thức (Method)\n    sayHello() {\n        console.log("Xin chào, tôi là " + this.name);\n    }\n}\n\n// Tạo ra một object từ bản thiết kế (class)\nconst minh = new Person("Minh", 20);\nminh.sayHello(); // "Xin chào, tôi là Minh"</code></pre>

                        <h3>3. Kế thừa (Inheritance)</h3>
                        <p>Dùng từ khóa <code>extends</code> để một Class con kế thừa toàn bộ thuộc tính và hàm của Class cha. Dùng <code>super()</code> để gọi hàm khởi tạo của cha trước khi làm việc khác.</p>
                        <pre><code>class Student extends Person {\n    constructor(name, age, grade) {\n        super(name, age); // Gọi constructor của Person\n        this.grade = grade;\n    }\n}</code></pre>
                    `
                },
                {
                    id: 'js-adv-12',
                    title: 'Thực hành: Tạo Class Animal',
                    type: 'code',
                    content: '<p>Tạo một class <code>Animal</code> có hàm khởi tạo nhận tham số <code>name</code>. Sau đó tạo class <code>Dog</code> kế thừa từ <code>Animal</code> và có thêm phương thức <code>bark()</code> in ra chữ <code>"Gâu gâu!"</code>.</p>',
                    initialCode: 'class Animal {\n    // Viết constructor ở đây\n    \n}\n\n// Viết class Dog kế thừa Animal ở đây\n\n\nconst myDog = new Dog("Cậu Vàng");\nmyDog.bark(); // Kỳ vọng ra "Gâu gâu!"',
                    solution: 'class Animal {\n    constructor(name) {\n        this.name = name;\n    }\n}\n\nclass Dog extends Animal {\n    bark() {\n        console.log("Gâu gâu!");\n    }\n}'
                }
            ]
        }
    ]
};

module.exports = jsAdvancedData;

const jsAdvancedData = {
    title: 'JavaScript Nâng Cao',
    chapters: [
        {
            id: 'chap-adv-1',
            title: '1. Biến, Scope và Hoisting (Phạm vi & Đẩy lên)',
            lessons: [
                {
                    id: 'js-adv-1',
                    title: 'Phạm vi biến (Scope) & Lỗ hổng của var',
                    type: 'theory',
                    content: `
                        <h2>1. Scope (Phạm vi) là gì?</h2>
                        <p>Scope trong JavaScript quyết định nơi một biến có thể được truy cập. Tưởng tượng Scope như những "căn phòng". Nếu bạn ở ngoài phòng, bạn không thể nhìn thấy đồ vật bên trong phòng đóng kín, nhưng người trong phòng có thể nhìn ra ngoài cửa sổ.</p>
                        <p>Trong JS có 3 loại Scope chính:</p>
                        <ul>
                            <li><strong>Global Scope (Phạm vi toàn cục):</strong> Biến khai báo ngoài cùng, bất kỳ hàm nào cũng có thể gọi. (Rất nguy hiểm nếu bị ghi đè).</li>
                            <li><strong>Function Scope (Phạm vi hàm):</strong> Biến khai báo bên trong một hàm chỉ tồn tại trong hàm đó.</li>
                            <li><strong>Block Scope (Phạm vi khối):</strong> (Từ ES6) Biến khai báo bên trong cặp ngoặc nhọn <code>{}</code> (như lệnh if, for) chỉ sống trong ngoặc đó.</li>
                        </ul>

                        <h2>2. Sự trỗi dậy của Let/Const so với Var</h2>
                        <p>Ngày xưa JS chỉ có <code>var</code>. Khuyết điểm chí mạng của <code>var</code> là nó <strong>bỏ qua Block Scope</strong>.</p>
                        <pre><code>if (true) {
    var a = 100;
    let b = 200;
}
console.log(a); // In ra 100 (var đã xuyên thủng ngoặc nhọn if)
console.log(b); // LỖI! b is not defined (let bị nhốt chặt trong ngoặc)</code></pre>
                        <p>Chính vì thế, ngày nay chúng ta <strong>TỪ BỎ HOÀN TOÀN</strong> việc dùng <code>var</code>. Hãy luôn dùng <code>const</code> (cho hằng số không đổi) và <code>let</code> (cho biến sẽ bị thay đổi giá trị).</p>

                        <h2>3. Hoisting (Đẩy lên)</h2>
                        <p>Hoisting là một cơ chế "kỳ quặc" của JS, trong đó nó âm thầm <strong>kéo phần khai báo biến và khai báo hàm lên đầu file</strong> trước khi chạy code.</p>
                        <pre><code>// Bạn gọi hàm trước khi khai báo nó, nhưng JS vẫn chạy bình thường!
sayHello();

function sayHello() {
    console.log("Xin chào");
}</code></pre>
                        <p>Tuy nhiên với biến <code>var</code>, nó chỉ đẩy khai báo lên, không đẩy giá trị, sinh ra lỗi rất ngớ ngẩn:</p>
                        <pre><code>console.log(myAge); // In ra "undefined" thay vì báo lỗi
var myAge = 25;</code></pre>
                        <p>Với <code>let</code> và <code>const</code>, chúng cũng bị Hoisting, nhưng bị đưa vào "Vùng tử thần" (Temporal Dead Zone - TDZ). Bạn không thể gọi chúng trước khi khai báo, JS sẽ quăng lỗi <code>ReferenceError</code> ngay lập tức, giúp code an toàn hơn rất nhiều.</p>
                    `
                },
                {
                    id: 'js-adv-1-b',
                    title: 'Bảo vệ Scope với IIFE',
                    type: 'theory',
                    content: `
                        <h2>1. IIFE (Immediately Invoked Function Expression)</h2>
                        <p>IIFE là một hàm được định nghĩa và <strong>CHẠY NGAY LẬP TỨC</strong>. Cú pháp của nó là bọc hàm trong cặp ngoặc đơn <code>()</code>, và thêm cặp ngoặc đơn <code>()</code> nữa ở cuối để thực thi.</p>
                        <pre><code>(function() {
    let privateVar = "Bí mật";
    console.log("Hàm này chạy tức thì!");
})();
console.log(privateVar); // Lỗi! Không thể truy cập</code></pre>

                        <h2>2. Tại sao lại sinh ra IIFE?</h2>
                        <p>Trước khi ES6 ra mắt <code>let</code> và <code>const</code>, người ta chỉ có <code>var</code>. Nếu viết code JS thư viện (vd: jQuery), việc khai báo <code>var</code> ở ngoài cùng sẽ làm "bẩn" Global Scope, dễ bị đụng độ biến với code của lập trình viên khác.</p>
                        <p>Vì <code>var</code> bị giới hạn bởi Function Scope, người ta nghĩ ra cách nhét toàn bộ code vào một hàm IIFE để đóng gói nó lại thành một "căn phòng riêng" (Private Scope). Các biến bên trong IIFE sẽ không bao giờ thoát ra ngoài làm loạn được.</p>

                        <div style="background-color: rgba(240, 81, 35, 0.1); border-left: 4px solid var(--primary-color); padding: 15px; margin: 15px 0;">
                            <strong>Lưu ý dấu chấm phẩy (;):</strong> Khi dùng IIFE, cực kỳ khuyến khích đặt dấu <code>;</code> ở trước nó để tránh lỗi dính dòng nếu đoạn code phía trước bạn quên đóng ngoặc.
                            <pre style="margin-top: 10px; margin-bottom: 0;"><code>let a = 1
;(function() { ... })()</code></pre>
                        </div>
                    `
                },
                {
                    id: 'js-adv-2',
                    title: 'Trắc nghiệm: Scope & Hoisting',
                    type: 'quiz',
                    content: '<p>Hãy trả lời các câu hỏi sau để nắm vững về phạm vi biến và IIFE.</p>',
                    quiz: [
                        {
                            question: 'Biến `let` và `const` có bị Hoisting (đẩy lên đầu) trong JavaScript không?',
                            options: [
                                { id: 'a', text: 'Không, chỉ có `var` mới bị Hoisting' },
                                { id: 'b', text: 'Có, nhưng chúng nằm trong vùng TDZ (Temporal Dead Zone) nên không gọi được trước khi khởi tạo' },
                                { id: 'c', text: 'Có, và nó trả về undefined giống hệt `var`' },
                                { id: 'd', text: 'Chỉ có hàm mới bị hoisting' }
                            ],
                            correctAnswer: 'b',
                            explanation: 'Mọi khai báo trong JS đều bị Hoisting. Tuy nhiên, let và const bị khóa trong Temporal Dead Zone cho đến khi dòng code gán giá trị được chạy.'
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
            title: '2. Closure & Bộ nhớ (Memory Heap)',
            lessons: [
                {
                    id: 'js-adv-3',
                    title: 'Giải phẫu Closure (Bao đóng)',
                    type: 'theory',
                    content: `
                        <h2>1. Rác thải bộ nhớ (Garbage Collection)</h2>
                        <p>Trong JS, khi một hàm chạy xong, toàn bộ các biến bên trong hàm đó sẽ bị "xóa sổ" khỏi bộ nhớ RAM để tiết kiệm dung lượng. Trình dọn rác (Garbage Collector) của V8 Engine làm việc này tự động.</p>
                        <pre><code>function doMath() {
    let x = 1000;
    return x * 2;
}
doMath(); // Khi hàm chạy xong, biến x bay màu khỏi RAM vĩnh viễn.</code></pre>

                        <h2>2. Phép màu của Closure</h2>
                        <p><strong>Closure</strong> là một hiện tượng kỳ diệu xảy ra khi một Hàm con nằm bên trong một Hàm cha, và Hàm con <strong>có sử dụng</strong> biến của Hàm cha.</p>
                        <p>Khi đó, Hàm con sẽ "ghi nhớ" lại hoàn cảnh xung quanh nó (Lexical Environment). JS Engine phát hiện ra điều này, nó sẽ <strong>TỪ CHỐI XÓA</strong> biến của Hàm cha khỏi RAM, vì biết rằng Hàm con vẫn còn cần dùng tới.</p>
                        
                        <h3>Ví dụ kinh điển: Tạo bộ đếm bảo mật</h3>
                        <pre><code>function createCounter() {
    let count = 0; // Biến này là private, bị nhốt trong hàm

    function increase() {
        count++; // Hàm con đang sử dụng biến count của hàm cha!
        return count;
    }
    
    return increase; // Hàm cha kết thúc và trả về hàm con
}

const counter1 = createCounter();
console.log(counter1()); // In ra 1
console.log(counter1()); // In ra 2
// Biến count KHÔNG BỊ XÓA sau khi createCounter chạy xong!

const counter2 = createCounter(); // Tạo một bộ đếm mới toanh, với vùng nhớ mới
console.log(counter2()); // In ra 1</code></pre>

                        <h2>3. Ứng dụng đỉnh cao của Closure</h2>
                        <ul>
                            <li><strong>Bảo vệ dữ liệu (Data Privacy):</strong> Biến <code>count</code> không thể bị sửa đổi trực tiếp từ bên ngoài (như <code>counter1.count = 100</code> là bất khả thi). Nó bị ẩn giấu hoàn toàn, hacker không thể hack được.</li>
                            <li><strong>Currying:</strong> Viết các hàm nhận từng tham số một cách từ từ <code>sum(5)(10)</code>.</li>
                            <li><strong>Memoization (Bộ nhớ đệm):</strong> Lưu lại kết quả tính toán tốn thời gian của các hàm để dùng lại vào lần sau thay vì tính lại từ đầu.</li>
                        </ul>
                    `
                },
                {
                    id: 'js-adv-4',
                    title: 'Thực hành: Closure Logger',
                    type: 'code',
                    content: '<p>Hãy viết một hàm <code>createLogger(namespace)</code> trả về một hàm con dùng để ghi log. Sao cho khi gọi hàm con trả về với một thông điệp (message), nó tự động nối <code>[namespace]</code> vào trước thông điệp đó.</p>',
                    initialCode: 'function createLogger(namespace) {\n    // Viết code dùng closure ở đây\n    \n}\n\n// Tạo ra logger riêng cho cảnh báo\nconst warnLogger = createLogger("[CẢNH BÁO]");\nconsole.log(warnLogger("Lỗi mất mạng!")); \n// Kỳ vọng in ra: "[CẢNH BÁO] Lỗi mất mạng!"',
                    solution: 'function createLogger(namespace) {\n    return function(message) {\n        return namespace + " " + message;\n    }\n}'
                }
            ]
        },
        {
            id: 'chap-adv-3',
            title: '3. Thao túng Context (This, Bind, Call, Apply)',
            lessons: [
                {
                    id: 'js-adv-5',
                    title: 'Hiểu cặn kẽ 4 quy tắc của từ khóa THIS',
                    type: 'theory',
                    content: `
                        <h2>Bí ẩn của từ khóa 'this'</h2>
                        <p>Trong các ngôn ngữ như Java, C++, <code>this</code> luôn luôn trỏ về đối tượng chứa nó. Nhưng trong JavaScript, <code>this</code> lại là một kẻ phản bội cực kỳ linh hoạt. Nó không được quyết định lúc bạn KHAI BÁO hàm, mà nó được quyết định bởi <strong>CÁCH BẠN GỌI HÀM (Execution Context)</strong>.</p>
                        
                        <h3>Quy tắc 1: Default Binding (Gọi hàm trần trụi)</h3>
                        <p>Nếu bạn gọi hàm một cách bình thường không có dấu chấm ở trước, <code>this</code> sẽ trỏ về Object Toàn cục (là <code>window</code> trong trình duyệt, hoặc <code>global</code> trong Node.js).</p>
                        <pre><code>function sayHi() { console.log(this); }
sayHi(); // Trỏ ra Window</code></pre>

                        <h3>Quy tắc 2: Implicit Binding (Gọi qua Object)</h3>
                        <p>Nếu hàm được gọi như một phương thức của một Object (có dấu chấm ở trước), <code>this</code> sẽ trỏ về cái Object đứng ngay trước dấu chấm đó.</p>
                        <pre><code>const car = {
    name: "Vinfast",
    run: function() { console.log(this.name + " đang chạy!"); }
};
car.run(); // this chính là car => In ra "Vinfast đang chạy"

// CẠM BẪY MẤT THIS (Gotcha cực nguy hiểm)
const runFunc = car.run; // Copy hàm ra một biến
runFunc(); // Gọi trần trụi => Rơi vào quy tắc 1 => this là Window => "undefined đang chạy" (LỖI NẶNG)</code></pre>

                        <h3>Quy tắc 3: Explicit Binding (Ép buộc bằng Bind, Call, Apply)</h3>
                        <p>Để giải cứu tình huống mất <code>this</code> ở trên, ta dùng 3 hàm siêu quyền lực:</p>
                        <ul>
                            <li><strong><code>bind(obj)</code>:</strong> Trả về MỘT HÀM MỚI với <code>this</code> bị trói chặt vào <code>obj</code> bằng dây xích. Hàm không tự chạy, bạn phải tự gọi. (Dùng nhiều nhất trong ReactJS Class).</li>
                            <li><strong><code>call(obj, arg1, arg2)</code>:</strong> Ép <code>this</code> thành <code>obj</code> và CHẠY HÀM NGAY LẬP TỨC. Các tham số truyền rời rạc qua dấu phẩy.</li>
                            <li><strong><code>apply(obj, [arg1, arg2])</code>:</strong> Hoàn toàn giống hệt <code>call</code>, nhưng các tham số được nhét chung vào một MẢNG. (Chữ A trong Apply đi với chữ A trong Array).</li>
                        </ul>
                        <pre><code>const runBind = car.run.bind(car);
runBind(); // Chạy an toàn, in ra "Vinfast đang chạy!"</code></pre>

                        <h3>Quy tắc 4: Arrow Function (Hàm mũi tên)</h3>
                        <p>Hàm mũi tên <code>() => {}</code> ở ES6 không hề có <code>this</code> của riêng nó. Nó sẽ mượn (kế thừa) <code>this</code> của cái hàm bao bọc bên ngoài nó (Lexical scoping). Do đó, bạn KHÔNG ĐƯỢC dùng hàm mũi tên để làm Method (phương thức) cho Object.</p>
                    `
                },
                {
                    id: 'js-adv-6',
                    title: 'Trắc nghiệm: This, Bind, Call',
                    type: 'quiz',
                    content: '',
                    quiz: [
                        {
                            question: 'Điểm khác biệt chính giữa phương thức CALL và BIND là gì?',
                            options: [
                                { id: 'a', text: 'Call mượn hàm nhưng không chạy, Bind thì chạy ngay' },
                                { id: 'b', text: 'Call chạy hàm ngay lập tức, Bind trả về một hàm mới (chưa chạy)' },
                                { id: 'c', text: 'Call truyền tham số dạng mảng, Bind truyền rời rạc' },
                                { id: 'd', text: 'Cả 2 đều giống hệt nhau' }
                            ],
                            correctAnswer: 'b',
                            explanation: 'Phương thức call() sẽ thực thi hàm ngay lập tức với context mới, trong khi bind() chỉ đứng ra "ràng buộc" context và trả về một bản sao của hàm đó để bạn có thể gán vào biến hoặc gọi sau này.'
                        },
                        {
                            question: 'Sự khác biệt giữa CALL và APPLY?',
                            options: [
                                { id: 'a', text: 'Apply truyền đối số phụ dưới dạng Mảng (Array), Call truyền rời rạc phân cách bởi dấu phẩy' },
                                { id: 'b', text: 'Call truyền đối số dưới dạng Mảng, Apply truyền rời rạc' },
                                { id: 'c', text: 'Apply nhanh hơn Call về tốc độ xử lý' },
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
            title: '4. Bất đồng bộ (Event Loop & Async)',
            lessons: [
                {
                    id: 'js-adv-7',
                    title: 'Kiến trúc Event Loop và Call Stack',
                    type: 'theory',
                    content: `
                        <h2>1. Nút thắt cổ chai của Đơn Luồng (Single-thread)</h2>
                        <p>JavaScript là một ngôn ngữ "làm việc một mình" (Single-thread). Tại một thời điểm, nó chỉ có thể làm duy nhất MỘT việc trong <strong>Call Stack (Ngăn xếp thực thi)</strong>. Nếu nó gọi một API mất 5 giây, trang web sẽ bị "đơ" cứng ngắc trong 5 giây đó (Blocking). Để sống sót, JS kết hợp với trình duyệt sinh ra cơ chế Bất đồng bộ.</p>

                        <h2>2. Vòng lặp sự kiện (Event Loop)</h2>
                        <p>JS 위 thác các việc tốn thời gian (như gọi API, setTimeout) ra bên ngoài cho trình duyệt (Web APIs) làm hộ.</p>
                        <ol>
                            <li>JS đang chạy, gặp <code>setTimeout(func, 3000)</code>. JS ném nó sang cho Web APIs chờ 3 giây, còn JS chạy tiếp dòng dưới ngay lập tức.</li>
                            <li>Sau 3 giây, Web APIs đẩy cái hàm <code>func</code> kia vào phòng chờ gọi là <strong>Callback Queue (Hàng đợi)</strong>.</li>
                            <li><strong>Event Loop:</strong> Kẻ gác cổng tận tụy. Nó liên tục nhìn vào Call Stack. Khi thấy Call Stack trống trơn (JS đã xử lý xong việc chính), nó bốc hàm <code>func</code> từ Hàng đợi nhét vào Call Stack cho JS chạy.</li>
                        </ol>

                        <h2>3. Sự tiến hóa của Cú pháp Bất đồng bộ</h2>
                        <h3>Kỷ nguyên 1: Callback (Gọi lại)</h3>
                        <p>Cách truyền thống là nhét hàm chờ vào trong tham số của hàm thực thi. Gây ra hiện tượng Callback Hell (Địa ngục Callback) với code lồng nhau hình phễu cực kì nhức mắt và khó debug.</p>

                        <h3>Kỷ nguyên 2: Promise (Lời hứa - ES6)</h3>
                        <p>Tạo ra một đối tượng đại diện cho tương lai: "Đang chờ" (Pending), "Thành công" (Fulfilled), hoặc "Thất bại" (Rejected).</p>
                        <pre><code>fetch("https://api.github.com/users")
    .then(response => response.json()) // Chạy nếu Resolve
    .then(data => console.log(data))
    .catch(error => console.error(error)); // Chạy nếu Reject</code></pre>

                        <h3>Kỷ nguyên 3: Async / Await (Chân ái - ES8)</h3>
                        <p>Nâng cấp từ Promise, giúp viết code bất đồng bộ mà nhìn gọn gàng y hệt code chạy đồng bộ từ trên xuống dưới.</p>
                        <pre><code>async function getUser() {
    try {
        // Trình duyệt sẽ "tạm đóng băng" dòng code này chờ dữ liệu về
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error("Bắt lỗi dễ dàng bằng try/catch:", err);
    }
}</code></pre>
                    `
                },
                {
                    id: 'js-adv-8',
                    title: 'Thực hành: Fetch với Async/Await',
                    type: 'code',
                    content: '<p>Chuyển đổi đoạn code dùng `fetch().then()` sang cú pháp cực sạch `async/await`. Bắt buộc phải bọc bằng `try...catch` để bắt lỗi an toàn nhé.</p>',
                    initialCode: '// Code cũ: \n// fetch("https://jsonplaceholder.typicode.com/todos/1")\n//   .then(res => res.json())\n//   .then(data => console.log(data.title));\n\nasync function getTodo() {\n    // Viết code dùng async/await, try/catch ở đây\n    \n}\n\ngetTodo();',
                    solution: 'async function getTodo() {\n    try {\n        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");\n        const data = await response.json();\n        console.log(data.title);\n    } catch (err) {\n        console.log(err);\n    }\n}'
                }
            ]
        },
        {
            id: 'chap-adv-5',
            title: '5. Tinh hoa ES6+ (Destructuring, Spread, Rest)',
            lessons: [
                {
                    id: 'js-adv-9',
                    title: 'Cú pháp Ma thuật của ECMAScript Hiện đại',
                    type: 'theory',
                    content: `
                        <h2>1. Destructuring (Phân rã Cấu trúc)</h2>
                        <p>Destructuring giúp bạn "móc" các phần tử bên trong Object hoặc Array ra ngoài thành các biến riêng biệt chỉ với 1 dòng code. Rất hay dùng trong ReactJS (ví dụ lấy props).</p>
                        
                        <h3>Trích xuất Object:</h3>
                        <pre><code>const laptop = { name: "Macbook", price: 2000, color: "Silver" };

// Lấy thuộc tính name và price, gán mặc định cho color nếu không có
const { name, price, color = "Black", brand: hangSanXuat } = laptop;

console.log(name); // "Macbook"
console.log(hangSanXuat); // (Đổi tên key brand thành hangSanXuat)</code></pre>

                        <h3>Trích xuất Array: (Lấy theo thứ tự Index)</h3>
                        <pre><code>const fruits = ["Cam", "Quýt", "Mít", "Dừa"];
const [trai1, trai2, , trai4] = fruits; // Bỏ qua thằng ở giữa bằng dấu phẩy trống
console.log(trai1); // "Cam"
console.log(trai4); // "Dừa"</code></pre>

                        <h2>2. Toán tử Spread (...) - Rải bung tòa</h2>
                        <p>Dấu 3 chấm <code>...</code> khi dùng để copy, gộp mảng/đối tượng được gọi là Spread. Nó bóc lớp vỏ ngoặc ngoài cùng ra và rải các phần tử ruột ra ngoài.</p>
                        <pre><code>// Gộp mảng siêu tốc
const teamA = ["Minh", "Tú"];
const teamB = ["Hoa", "Hải"];
const allTeams = [...teamA, "Sếp", ...teamB]; // ["Minh", "Tú", "Sếp", "Hoa", "Hải"]

// Copy Object độc lập (Shallow Copy) tránh hiện tượng tham chiếu bộ nhớ
const obj1 = { x: 1 };
const obj2 = { ...obj1, y: 2 }; // { x: 1, y: 2 } obj1 không bị ảnh hưởng</code></pre>

                        <h2>3. Toán tử Rest (...) - Gom nhặt tàn dư</h2>
                        <p>Cũng là 3 dấu chấm <code>...</code>, nhưng nếu đứng ở vị trí <strong>Tham số của hàm</strong> hoặc đứng cuối ở Destructuring, nó đóng vai trò "Chiếc bao tải" gom tất cả những đứa còn sót lại thành một Mảng (Array).</p>
                        <pre><code>function sum(a, b, ...theRest) {
    console.log(a); // 1
    console.log(b); // 2
    console.log(theRest); // [3, 4, 5, 6] (Gom tất cả bọn phía sau vào mảng)
}
sum(1, 2, 3, 4, 5, 6);</code></pre>

                        <h2>4. Optional Chaining (?.) & Nullish Coalescing (??)</h2>
                        <ul>
                            <li><strong>Optional Chaining (<code>?.</code>):</strong> Dùng khi lấy thuộc tính lồng nhau sâu trong object mà không sợ bị sập code (báo lỗi Cannot read property of undefined) nếu thuộc tính cha bị undefined. Viết là: <code>user?.address?.street</code></li>
                            <li><strong>Nullish Coalescing (<code>??</code>):</strong> Tương tự toán tử OR <code>||</code> dùng để gán giá trị mặc định. Nhưng <code>??</code> chỉ gán khi giá trị bị <code>null</code> hoặc <code>undefined</code>. Còn số <code>0</code> hoặc chuỗi rỗng <code>""</code> nó vẫn lấy.</li>
                        </ul>
                    `
                },
                {
                    id: 'js-adv-10',
                    title: 'Trắc nghiệm: ES6 Mở rộng',
                    type: 'quiz',
                    content: '<p>Làm 2 câu trắc nghiệm để phân biệt rõ ràng sự khác nhau của các toán tử nhé.</p>',
                    quiz: [
                        {
                            question: 'Trong tình huống nào dấu `...` được gọi là Rest Parameter (Toán tử gom)?',
                            options: [
                                { id: 'a', text: 'Khi dùng để gộp 2 mảng lại với nhau: [...arr1, ...arr2]' },
                                { id: 'b', text: 'Khi dùng ở khai báo tham số của một hàm: function calc(...numbers)' },
                                { id: 'c', text: 'Khi dùng để copy một Object' },
                                { id: 'd', text: 'Không có khái niệm Rest Parameter, dấu ... luôn là Spread' }
                            ],
                            correctAnswer: 'b',
                            explanation: 'Rest (gom) chỉ xuất hiện ở định nghĩa tham số hàm hoặc cuối một biểu thức Destructuring để gom "phần còn lại" thành một Array. Mọi trường hợp lấy dữ liệu trải ra ngoài đều gọi là Spread.'
                        },
                        {
                            question: 'Biểu thức: `0 ?? 10` và `0 || 10` sẽ trả về kết quả gì?',
                            options: [
                                { id: 'a', text: 'Cả hai đều trả về 10' },
                                { id: 'b', text: '0 và 0' },
                                { id: 'c', text: '0 và 10' },
                                { id: 'd', text: '10 và 0' }
                            ],
                            correctAnswer: 'c',
                            explanation: 'Toán tử ?? chỉ bỏ qua null và undefined, nên `0 ?? 10` lấy số 0. Còn toán tử || bỏ qua tất cả giá trị falsy (0, rỗng, false), nên `0 || 10` sẽ nhảy qua số 0 và lấy số 10.'
                        }
                    ]
                }
            ]
        },
        {
            id: 'chap-adv-6',
            title: '6. Lập trình Hướng đối tượng (OOP) Thực Chiến',
            lessons: [
                {
                    id: 'js-adv-11',
                    title: 'Bóc trần Class và Prototype',
                    type: 'theory',
                    content: `
                        <h2>1. Prototype - Nguồn gốc sức mạnh của JS</h2>
                        <p>Trong JavaScript, không có Class thực sự. Mọi thứ là Object. Khi một Object muốn có phương thức hoặc thuộc tính, nó sẽ tìm trong bản thân nó trước. Nếu không có, nó sẽ chạy theo sợi dây xích tàng hình gọi là <strong>Prototype Chain (Chuỗi nguyên mẫu)</strong> để lên hỏi Object cha của nó.</p>
                        <p>Ví dụ: Khi gọi hàm mảng <code>arr.push()</code>, bản thân mảng không tự có hàm push. Nó đã leo lên hỏi <code>Array.prototype</code> và chạy ké hàm push ở trên đó.</p>
                        
                        <h2>2. Sự ra đời của Class (ES6 syntactic sugar)</h2>
                        <p>Trước ES6, người ta phải tạo đối tượng bằng "Constructor Function" (Hàm tạo) kết hợp với chỉnh sửa thủ công Prototype nhìn rất rối rắm. ES6 mang đến cú pháp <code>class</code> mượn từ Java/C++ để giúp Dev từ ngôn ngữ khác qua dễ làm quen. Bản chất cốt lõi bên dưới, nó vẫn compile ra cơ chế Prototype cũ.</p>
                        
                        <h3>Tạo Lớp và Object:</h3>
                        <pre><code>class BankAccount {
    // Thuộc tính Private (ES2022) bắt đầu bằng dấu #
    #balance = 0;

    // Hàm khởi tạo (Constructor) luôn chạy đầu tiên khi dùng new
    constructor(ownerName) {
        this.owner = ownerName;
    }

    // Phương thức Getter (Để đọc biến private)
    get balance() {
        return this.#balance;
    }

    // Phương thức thông thường
    deposit(amount) {
        if(amount > 0) this.#balance += amount;
        console.log(\`Đã nạp \${amount} vào tài khoản \${this.owner}\`);
    }
}

// Khởi tạo một đối tượng cụ thể (Instance) từ bản thiết kế
const myAccount = new BankAccount("Minh Đẹp Trai");
myAccount.deposit(500);
console.log(myAccount.balance); // In ra 500
// console.log(myAccount.#balance) // BÁO LỖI: Thuộc tính bảo mật!</code></pre>

                        <h2>3. Kế thừa (Inheritance) và Đa hình (Polymorphism)</h2>
                        <p>Một Class có thể kế thừa sức mạnh của một Class khác thông qua từ khóa <code>extends</code>. Nếu Class con muốn có Constructor riêng, nó BẮT BUỘC phải gọi <code>super()</code> ở dòng đầu tiên để đánh thức Class cha sống dậy.</p>
                        <pre><code>class VIPAccount extends BankAccount {
    constructor(ownerName, cashbackRate) {
        super(ownerName); // Gọi constructor của BankAccount trước!
        this.cashbackRate = cashbackRate;
    }

    // Ghi đè phương thức (Override / Polymorphism)
    deposit(amount) {
        super.deposit(amount); // Chạy hàm deposit của Cha
        console.log(\`Bạn được hoàn tiền VIP: \${amount * this.cashbackRate}\`);
    }
}</code></pre>
                    `
                },
                {
                    id: 'js-adv-12',
                    title: 'Thực hành: Tạo Class Animal & Tính Kế thừa',
                    type: 'code',
                    content: '<p>Tạo một class <code>Animal</code> có hàm khởi tạo nhận tham số <code>name</code> và gán vào thuộc tính <code>this.name</code>. Sau đó tạo class <code>Dog</code> kế thừa (extends) từ <code>Animal</code> và có thêm phương thức <code>bark()</code> in ra console dòng chữ <code>"Gâu gâu!"</code>.</p>',
                    initialCode: 'class Animal {\n    // Viết constructor khởi tạo tên ở đây\n    \n}\n\n// Viết class Dog kế thừa (extends) Animal ở đây\n\n\nconst myDog = new Dog("Cậu Vàng");\nmyDog.bark(); // Kỳ vọng ra "Gâu gâu!"',
                    solution: 'class Animal {\n    constructor(name) {\n        this.name = name;\n    }\n}\n\nclass Dog extends Animal {\n    bark() {\n        console.log("Gâu gâu!");\n    }\n}'
                }
            ]
        }
    ]
};

module.exports = jsAdvancedData;

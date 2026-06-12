const jsBasicData = {
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
                        <h2>Khai báo biến (JavaScript Variables)</h2>
                        <p>Biến (Variables) là "thùng chứa" dùng để lưu trữ các giá trị dữ liệu. Giống như trong đại số, chúng ta dùng các chữ cái (như x, y) để chứa giá trị.</p>
                        
                        <h3>4 cách để khai báo biến trong JavaScript:</h3>
                        <ul>
                            <li>Dùng <code>var</code></li>
                            <li>Dùng <code>let</code></li>
                            <li>Dùng <code>const</code></li>
                            <li>Không dùng gì cả (Không khuyến khích)</li>
                        </ul>
                        
                        <h3>Khi nào nên dùng var, let, hoặc const?</h3>
                        <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                            <tr style="background-color: var(--header-bg); border: 1px solid var(--border-color);">
                                <th style="padding: 10px; border: 1px solid var(--border-color); text-align: left;">Từ khóa</th>
                                <th style="padding: 10px; border: 1px solid var(--border-color); text-align: left;">Mô tả</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid var(--border-color);"><code>var</code></td>
                                <td style="padding: 10px; border: 1px solid var(--border-color);">Cách cũ từ 1995 tới 2015. Hiện nay ít dùng vì hay gây ra lỗi phạm vi (scope).</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid var(--border-color);"><code>let</code></td>
                                <td style="padding: 10px; border: 1px solid var(--border-color);">Dùng khi giá trị của biến CÓ THỂ thay đổi sau này (như vòng lặp, đếm số).</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid var(--border-color);"><code>const</code></td>
                                <td style="padding: 10px; border: 1px solid var(--border-color);">Dùng khi giá trị KHÔNG BAO GIỜ thay đổi (như số PI, mảng, object cố định).</td>
                            </tr>
                        </table>

                        <h3>Ví dụ chi tiết:</h3>
                        <p>Khai báo và gán giá trị cùng một lúc:</p>
                        <pre><code>let price1 = 5;\nlet price2 = 6;\nlet total = price1 + price2;</code></pre>
                        
                        <p><strong>Lưu ý về quy tắc đặt tên:</strong></p>
                        <ul>
                            <li>Chỉ chứa chữ cái, số, dấu gạch dưới <code>_</code>, hoặc dấu <code>$</code>.</li>
                            <li>Không được bắt đầu bằng số.</li>
                            <li>Phân biệt chữ hoa chữ thường (y và Y là 2 biến khác nhau).</li>
                            <li>Thường dùng kiểu <strong>camelCase</strong> (ví dụ: <code>myFirstName</code>).</li>
                        </ul>
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
                        <h2>Hàm tích hợp sẵn (JavaScript Built-in Functions)</h2>
                        <p>Hàm tích hợp sẵn (Built-in functions) là những hàm đã được JavaScript hoặc Trình duyệt viết sẵn. Bạn không cần tự viết lại chúng mà chỉ cần "gọi" ra để dùng.</p>

                        <h3>1. Các hàm hiển thị hộp thoại (Dialog Boxes):</h3>
                        <p>Ba hàm này dùng để tương tác trực tiếp với người dùng qua các popup cảnh báo của trình duyệt.</p>
                        <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                            <tr style="background-color: var(--header-bg); border: 1px solid var(--border-color);">
                                <th style="padding: 10px; border: 1px solid var(--border-color); text-align: left;">Hàm</th>
                                <th style="padding: 10px; border: 1px solid var(--border-color); text-align: left;">Công dụng</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid var(--border-color);"><code>alert("Nội dung")</code></td>
                                <td style="padding: 10px; border: 1px solid var(--border-color);">Hiển thị một hộp thoại cảnh báo với nút "OK". Trình duyệt sẽ <strong>tạm dừng chạy code</strong> cho đến khi người dùng ấn OK.</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid var(--border-color);"><code>confirm("Bạn có chắc không?")</code></td>
                                <td style="padding: 10px; border: 1px solid var(--border-color);">Hiển thị hộp thoại hỏi người dùng với 2 nút: "OK" (trả về true) và "Cancel" (trả về false). Rất hay dùng trước khi xóa một thứ gì đó.</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid var(--border-color);"><code>prompt("Nhập tuổi:")</code></td>
                                <td style="padding: 10px; border: 1px solid var(--border-color);">Hiển thị hộp thoại có kèm ô input để người dùng nhập văn bản vào. Hàm sẽ trả về chuỗi văn bản người dùng vừa nhập.</td>
                            </tr>
                        </table>

                        <h3>2. Hàm in log (Console):</h3>
                        <p><code>console.log()</code> là người bạn thân thiết nhất của mọi lập trình viên. Nó giúp in giá trị ra tab Console của công cụ Developer Tools (F12) để bạn kiểm tra xem code của mình chạy có đúng không.</p>
                        <pre><code>let name = "Minh";\nconsole.log(name); // In ra chữ Minh</code></pre>

                        <h3>3. Các hàm hẹn giờ (Timers):</h3>
                        <p>Giúp bạn trì hoãn việc chạy code, hoặc chạy lặp lại sau một khoảng thời gian nhất định (đơn vị: mili-giây, 1000ms = 1 giây).</p>
                        <ul>
                            <li><strong><code>setTimeout(hàm, thời_gian)</code>:</strong> Chạy đoạn code MỘT LẦN DUY NHẤT sau <code>thời_gian</code> mili-giây.
                                <pre><code>setTimeout(function() {\n  alert("Thông báo này hiện ra sau 3 giây!");\n}, 3000);</code></pre>
                            </li>
                            <li><strong><code>setInterval(hàm, thời_gian)</code>:</strong> Chạy đoạn code LẶP ĐI LẶP LẠI vô hạn, mỗi lần cách nhau <code>thời_gian</code> mili-giây. Dùng để làm đồng hồ đếm ngược.
                                <pre><code>setInterval(function() {\n  console.log("Cứ 1 giây in dòng này một lần");\n}, 1000);</code></pre>
                            </li>
                        </ul>

                        <div style="background-color: rgba(240, 81, 35, 0.1); border-left: 4px solid var(--primary-color); padding: 15px; margin: 15px 0;">
                            <strong>Lưu ý quan trọng:</strong> Khi dùng <code>setInterval</code>, nếu không có hàm dừng lại (như <code>clearInterval</code>), nó sẽ chạy mãi mãi, gây tốn bộ nhớ RAM của trình duyệt.
                        </div>
                    `
                },
                {
                    id: 'js-basic-6',
                    title: 'Thực hành: Built-in functions',
                    type: 'code',
                    content: '<p>Hãy in ra tab console chuỗi <code>"Học JS tại minhdepzai"</code> sử dụng hàm <code>console.log</code>.</p><p>Sau đó, hãy tạo một dòng cảnh báo (alert) với nội dung <code>"Cảnh báo minhdepzai"</code>. Tuy nhiên trong môi trường editor này, <code>alert</code> sẽ được giả lập thành console log để bạn dễ xem kết quả.</p>',
                    initialCode: '// Viết code của bạn ở đây\n',
                    solution: 'console.log("Học JS tại minhdepzai");\nalert("Cảnh báo minhdepzai");'
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
                        <h2>Toán tử số học (JavaScript Arithmetic)</h2>
                        <p>Toán tử số học được dùng để thực hiện các phép tính trên các số (làm toán).</p>

                        <h3>Bảng Toán tử đầy đủ:</h3>
                        <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                            <tr style="background-color: var(--header-bg); border: 1px solid var(--border-color);">
                                <th style="padding: 10px; border: 1px solid var(--border-color); text-align: left;">Toán tử</th>
                                <th style="padding: 10px; border: 1px solid var(--border-color); text-align: left;">Mô tả</th>
                                <th style="padding: 10px; border: 1px solid var(--border-color); text-align: left;">Ví dụ</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid var(--border-color);"><code>+</code></td>
                                <td style="padding: 10px; border: 1px solid var(--border-color);">Phép cộng</td>
                                <td style="padding: 10px; border: 1px solid var(--border-color);"><code>let x = 5 + 2; // 7</code></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid var(--border-color);"><code>-</code></td>
                                <td style="padding: 10px; border: 1px solid var(--border-color);">Phép trừ</td>
                                <td style="padding: 10px; border: 1px solid var(--border-color);"><code>let x = 5 - 2; // 3</code></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid var(--border-color);"><code>*</code></td>
                                <td style="padding: 10px; border: 1px solid var(--border-color);">Phép nhân</td>
                                <td style="padding: 10px; border: 1px solid var(--border-color);"><code>let x = 5 * 2; // 10</code></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid var(--border-color);"><code>**</code></td>
                                <td style="padding: 10px; border: 1px solid var(--border-color);">Lũy thừa (ES2016)</td>
                                <td style="padding: 10px; border: 1px solid var(--border-color);"><code>let x = 5 ** 2; // 25</code></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid var(--border-color);"><code>/</code></td>
                                <td style="padding: 10px; border: 1px solid var(--border-color);">Phép chia</td>
                                <td style="padding: 10px; border: 1px solid var(--border-color);"><code>let x = 5 / 2; // 2.5</code></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid var(--border-color);"><code>%</code></td>
                                <td style="padding: 10px; border: 1px solid var(--border-color);">Chia lấy phần dư</td>
                                <td style="padding: 10px; border: 1px solid var(--border-color);"><code>let x = 5 % 2; // 1</code></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid var(--border-color);"><code>++</code></td>
                                <td style="padding: 10px; border: 1px solid var(--border-color);">Tăng thêm 1</td>
                                <td style="padding: 10px; border: 1px solid var(--border-color);"><code>let x = 5; x++; // x = 6</code></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid var(--border-color);"><code>--</code></td>
                                <td style="padding: 10px; border: 1px solid var(--border-color);">Giảm đi 1</td>
                                <td style="padding: 10px; border: 1px solid var(--border-color);"><code>let x = 5; x--; // x = 4</code></td>
                            </tr>
                        </table>

                        <div style="background-color: rgba(240, 81, 35, 0.1); border-left: 4px solid var(--primary-color); padding: 15px; margin: 15px 0;">
                            <strong>Mẹo thú vị:</strong> Nếu bạn cộng hai chuỗi văn bản, toán tử <code>+</code> sẽ biến thành phép "nối chuỗi" (Concatenation).
                            <pre style="margin-top: 10px; margin-bottom: 0;"><code>let text = "John" + " " + "Doe"; // "John Doe"</code></pre>
                        </div>
                    `
                },
                {
                    id: 'js-basic-8',
                    title: 'Bài tập trắc nghiệm: Toán tử số học',
                    type: 'quiz',
                    content: '<p>Hãy hoàn thành 5 câu hỏi trắc nghiệm dưới đây để nắm vững kiến thức về Toán tử số học nhé!</p>',
                    quiz: [
                        {
                            question: 'Kết quả của phép tính: 5 ** 2 là bao nhiêu?',
                            options: [
                                { id: 'a', text: '10' },
                                { id: 'b', text: '25' },
                                { id: 'c', text: '7' },
                                { id: 'd', text: 'Lỗi cú pháp' }
                            ],
                            correctAnswer: 'b',
                            explanation: 'Toán tử ** là phép lũy thừa. 5 ** 2 tương đương với 5 mũ 2, bằng 25.'
                        },
                        {
                            question: 'Kết quả của phép tính: 10 % 3 là bao nhiêu?',
                            options: [
                                { id: 'a', text: '3.33' },
                                { id: 'b', text: '3' },
                                { id: 'c', text: '1' },
                                { id: 'd', text: '0' }
                            ],
                            correctAnswer: 'c',
                            explanation: 'Toán tử % dùng để chia lấy phần dư. 10 chia 3 được 3, dư 1.'
                        },
                        {
                            question: 'Đoạn code sau in ra kết quả gì?\nlet x = 5;\nx++;\nconsole.log(x);',
                            options: [
                                { id: 'a', text: '4' },
                                { id: 'b', text: '5' },
                                { id: 'c', text: '6' },
                                { id: 'd', text: 'Báo lỗi' }
                            ],
                            correctAnswer: 'c',
                            explanation: 'Toán tử ++ sẽ tăng giá trị của biến lên 1 đơn vị. Nên x từ 5 sẽ biến thành 6.'
                        },
                        {
                            question: 'Điều gì xảy ra khi bạn dùng phép cộng (+) giữa 2 chuỗi văn bản: "Hello" + "World"?',
                            options: [
                                { id: 'a', text: 'Trả về NaN' },
                                { id: 'b', text: 'Báo lỗi cú pháp' },
                                { id: 'c', text: 'Trả về "HelloWorld"' },
                                { id: 'd', text: 'Trả về "Hello World"' }
                            ],
                            correctAnswer: 'c',
                            explanation: 'Khi dùng dấu + với chuỗi, JS sẽ thực hiện NỐI CHUỖI. "Hello" và "World" ghép lại thành "HelloWorld" (không có khoảng trắng ở giữa do chúng ta không cộng thêm khoảng trắng).'
                        },
                        {
                            question: 'Kết quả của phép tính: "5" + 2 là bao nhiêu?',
                            options: [
                                { id: 'a', text: '7' },
                                { id: 'b', text: '"52"' },
                                { id: 'c', text: 'NaN' },
                                { id: 'd', text: 'Lỗi' }
                            ],
                            correctAnswer: 'b',
                            explanation: 'Khi cộng một chuỗi ("5") với một số (2), JavaScript sẽ tự động ép kiểu số thành chuỗi và thực hiện NỐI CHUỖI. Kết quả là chuỗi "52".'
                        }
                    ]
                },
                {
                    id: 'js-basic-9',
                    title: 'Chuỗi (String)',
                    type: 'theory',
                    content: `
                        <h2>Làm việc với Chuỗi (String) cực kỳ chi tiết</h2>
                        <p>Chuỗi trong JS dùng để biểu diễn văn bản. Bạn có thể đặt chuỗi trong nháy đơn <code>''</code>, nháy kép <code>""</code>, hoặc template literal (backtick) <code>\`\`</code>.</p>
                        <p><strong>Lưu ý:</strong> Template literal cho phép bạn xuống dòng và truyền biến trực tiếp (interpolation) cực kỳ tiện lợi: <code>\`Tên tôi là \${name}\`</code></p>
                        
                        <h3>Các thuộc tính và phương thức cực kỳ quan trọng:</h3>
                        <ul>
                            <li><strong>1. Chiều dài chuỗi (length):</strong> <code>var txt = "ABC"; txt.length; // Trả về 3</code></li>
                            <li><strong>2. Tìm kiếm (indexOf / search):</strong> <code>txt.indexOf("B")</code> trả về vị trí đầu tiên tìm thấy (tính từ 0). Nếu không thấy trả về -1.</li>
                            <li><strong>3. Cắt chuỗi (slice):</strong> <code>txt.slice(start, end)</code> giúp lấy ra một phần của chuỗi. Có thể dùng số âm để đếm ngược từ cuối lên.</li>
                            <li><strong>4. Thay thế (replace):</strong> <code>txt.replace("A", "Z")</code> thay thế ký tự "A" đầu tiên bằng "Z". Muốn thay thế toàn bộ phải dùng Regex hoặc <code>replaceAll</code>.</li>
                            <li><strong>5. Chuyển đổi hoa/thường:</strong> <code>txt.toUpperCase()</code> và <code>txt.toLowerCase()</code>.</li>
                            <li><strong>6. Loại bỏ khoảng trắng 2 đầu (trim):</strong> Rất hay dùng khi xử lý dữ liệu người dùng nhập từ ô input để bỏ đi khoảng cách thừa: <code>"  minhdepzai  ".trim()</code>.</li>
                            <li><strong>7. Tách chuỗi thành mảng (split):</strong> <code>"a,b,c".split(",")</code> sẽ tách thành mảng <code>["a", "b", "c"]</code>.</li>
                        </ul>
                        <p>Trong thực tế đi làm, việc thao tác với chuỗi là diễn ra hằng ngày, bạn hãy nắm thật vững các hàm này nhé!</p>
                    `
                },
                {
                    id: 'js-basic-10',
                    title: 'Thực hành: Làm việc với chuỗi',
                    type: 'code',
                    content: '<p>Cho một biến <code>myString = "Học JS tại minhdepzai"</code>. Hãy sử dụng các phương thức của chuỗi để tìm ra độ dài của chuỗi này và in ra console.</p>',
                    initialCode: 'var myString = "Học JS tại minhdepzai";\n\n// Khai báo biến doDai chứa độ dài chuỗi\n\n\n// In kết quả ra console\n',
                    solution: 'var myString = "Học JS tại minhdepzai";\nvar doDai = myString.length;\nconsole.log(doDai);'
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
                        <h2>Câu lệnh điều kiện (If Else)</h2>
                        <p>Trong thực tế, bạn thường xuyên phải chạy những đoạn code khác nhau dựa trên những quyết định khác nhau. Chúng ta dùng câu lệnh điều kiện để làm việc này.</p>
                        
                        <h3>Các lệnh điều kiện trong JS:</h3>
                        <ul>
                            <li><code>if</code> để quy định một khối code sẽ chạy nếu điều kiện trả về giá trị <strong>đúng (true)</strong>.</li>
                            <li><code>else</code> để quy định khối code thay thế sẽ chạy nếu điều kiện <strong>sai (false)</strong>.</li>
                            <li><code>else if</code> để cung cấp thêm một điều kiện mới để kiểm tra nếu điều kiện đầu tiên bị sai.</li>
                            <li><code>switch</code> để chọn một trong rất nhiều khối code để chạy (thay vì viết if else quá dài).</li>
                        </ul>

                        <h3>Cú pháp lệnh If:</h3>
                        <pre><code>if (điều_kiện) {\n  // Khối code này chạy nếu điều_kiện đúng\n}</code></pre>
                        
                        <h3>Ví dụ thực tế:</h3>
                        <p>Viết chương trình chào buổi sáng hoặc buổi tối dựa theo giờ hiện tại:</p>
                        <pre><code>let hour = 20;\nlet greeting;\n\nif (hour < 18) {\n  greeting = "Chào buổi sáng!";\n} else {\n  greeting = "Chào buổi tối!";\n}\n\nconsole.log(greeting); // In ra "Chào buổi tối!"</code></pre>

                        <div style="background-color: rgba(16, 185, 129, 0.1); border-left: 4px solid var(--success-color); padding: 15px; margin: 15px 0;">
                            <strong>Ghi nhớ:</strong> Kết quả của phần "điều_kiện" bên trong dấu ngoặc tròn <code>()</code> sẽ luôn được ép kiểu về kiểu boolean (true/false). Các giá trị <code>0, "", null, undefined, NaN</code> sẽ được hiểu là <strong>false</strong> (falsy).
                        </div>
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
                        <h2>Vòng lặp (JavaScript Loops)</h2>
                        <p>Vòng lặp rất tiện dụng nếu bạn muốn chạy một đoạn code lặp đi lặp lại nhiều lần, mỗi lần lại mang một giá trị khác nhau.</p>
                        <p>Hãy tưởng tượng bạn phải console.log ra từ 1 đến 100. Việc viết 100 dòng code <code>console.log()</code> là một ác mộng. Thay vào đó, vòng lặp giải quyết trong 3 dòng.</p>

                        <h3>Các loại vòng lặp trong JS:</h3>
                        <ul>
                            <li><code>for</code> - Lặp qua một đoạn code một số lần nhất định.</li>
                            <li><code>for/in</code> - Lặp qua các thuộc tính của một Object.</li>
                            <li><code>for/of</code> - Lặp qua các giá trị của một Mảng (hoặc các đối tượng lặp được).</li>
                            <li><code>while</code> - Lặp miệt mài chừng nào điều kiện còn là true.</li>
                            <li><code>do/while</code> - Lặp giống while, nhưng sẽ <strong>luôn chạy ít nhất 1 lần</strong> trước khi kiểm tra điều kiện.</li>
                        </ul>

                        <h3>Vòng lặp For kinh điển:</h3>
                        <pre><code>for (biểu_thức_1; biểu_thức_2; biểu_thức_3) {\n  // Code được thực thi lặp lại\n}</code></pre>
                        <ul>
                            <li><strong>Biểu thức 1:</strong> Khởi tạo biến đếm. Thường là <code>let i = 0</code>. Chạy DUY NHẤT 1 lần trước khi bắt đầu lặp.</li>
                            <li><strong>Biểu thức 2:</strong> Điều kiện để chạy vòng lặp (ví dụ <code>i &lt; 5</code>). Nếu false, vòng lặp lập tức dừng lại.</li>
                            <li><strong>Biểu thức 3:</strong> Mã chạy SAU KHI kết thúc một lần lặp (thường dùng để tăng biến đếm như <code>i++</code>).</li>
                        </ul>

                        <h3>Ví dụ:</h3>
                        <pre><code>for (let i = 0; i < 5; i++) {\n  console.log("Số hiện tại là: " + i);\n}</code></pre>
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
                        <h2>Mảng (JavaScript Arrays)</h2>
                        <p>Mảng (Array) là một loại biến đặc biệt có khả năng lưu trữ nhiều giá trị tại cùng một thời điểm. Nó giải quyết được bài toán phải khai báo quá nhiều biến rời rạc.</p>
                        <p>Thay vì viết <code>let car1 = "Saab"; let car2 = "Volvo"; let car3 = "BMW";</code>, bạn chỉ cần dùng Mảng: <code>const cars = ["Saab", "Volvo", "BMW"];</code>.</p>
                        
                        <h3>1. Chỉ số (Index) và Độ dài (Length)</h3>
                        <p>Trong mảng, mỗi phần tử đều có một vị trí chính xác (gọi là Index). <strong>Đặc biệt: Index luôn bắt đầu từ 0!</strong></p>
                        <pre><code>const fruits = ["Banana", "Orange", "Apple"];\n\n// Lấy phần tử đầu tiên (Index 0)\nconsole.log(fruits[0]); // Kết quả: "Banana"\n\n// Đếm số lượng phần tử\nconsole.log(fruits.length); // Kết quả: 3</code></pre>

                        <h3>2. Thêm và Xóa phần tử ở CUỐI mảng (Push / Pop)</h3>
                        <p>Đây là 2 hàm sử dụng nhiều nhất để làm việc với mảng.</p>
                        <ul>
                            <li><strong><code>push()</code>:</strong> Thêm một (hoặc nhiều) phần tử mới vào <strong>vị trí cuối cùng</strong> của mảng.
                                <pre><code>const fruits = ["Banana", "Orange"];\nfruits.push("Apple");\n// Mảng bây giờ là: ["Banana", "Orange", "Apple"]</code></pre>
                            </li>
                            <li><strong><code>pop()</code>:</strong> Xóa phần tử ở <strong>vị trí cuối cùng</strong> và trả về phần tử vừa xóa.
                                <pre><code>const fruits = ["Banana", "Orange", "Apple"];\nlet lastFruit = fruits.pop(); \n// lastFruit = "Apple"\n// Mảng bây giờ là: ["Banana", "Orange"]</code></pre>
                            </li>
                        </ul>

                        <h3>3. Thêm và Xóa phần tử ở ĐẦU mảng (Unshift / Shift)</h3>
                        <p>Tương tự như push/pop, nhưng hai hàm này hoạt động ở vị trí đầu tiên (Index 0). Khi thực hiện, tất cả các phần tử phía sau sẽ bị dịch chuyển vị trí.</p>
                        <ul>
                            <li><strong><code>unshift()</code>:</strong> Thêm phần tử mới vào <strong>vị trí đầu tiên</strong> của mảng.
                                <pre><code>const fruits = ["Banana", "Orange"];\nfruits.unshift("Lemon");\n// Mảng bây giờ là: ["Lemon", "Banana", "Orange"]</code></pre>
                            </li>
                            <li><strong><code>shift()</code>:</strong> Xóa phần tử ở <strong>vị trí đầu tiên</strong> (tức là Index 0) và trả về nó.
                                <pre><code>const fruits = ["Banana", "Orange", "Apple"];\nlet firstFruit = fruits.shift(); \n// firstFruit = "Banana"\n// Mảng bây giờ là: ["Orange", "Apple"]</code></pre>
                            </li>
                        </ul>
                        
                        <div style="background-color: rgba(16, 185, 129, 0.1); border-left: 4px solid var(--success-color); padding: 15px; margin: 15px 0;">
                            <strong>Ghi nhớ:</strong> Các phương thức thao tác mảng (push, pop, shift, unshift) đều <strong>làm thay đổi trực tiếp</strong> mảng gốc ban đầu.
                        </div>
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
                },
                {
                    id: 'js-basic-17-2',
                    title: 'Thực hành: Thêm phần tử vào Mảng',
                    type: 'code',
                    content: '<p>Sử dụng phương thức <code>push()</code> để thêm chuỗi <code>"ReactJS"</code> vào cuối mảng <code>courses</code>, sau đó in mảng ra console.</p>',
                    initialCode: 'var courses = ["HTML", "CSS", "JS"];\n\n// Thêm "ReactJS" vào cuối mảng\n\n\n// In mảng courses ra console\n',
                    solution: 'var courses = ["HTML", "CSS", "JS"];\ncourses.push("ReactJS");\nconsole.log(courses);'
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
                        <h2>Đối tượng (JavaScript Objects)</h2>
                        <p>Trong đời thực, một chiếc xe hơi là một Đối tượng (Object). Xe hơi có các <strong>thuộc tính (Properties)</strong> như trọng lượng và màu sắc, và có các <strong>phương thức (Methods)</strong> như khởi động (start) và dừng lại (stop).</p>
                        <p>Trong JavaScript, Objects là "vua". Nếu bạn hiểu rõ về Object, bạn hiểu rõ JavaScript.</p>

                        <h3>1. Cấu trúc của Object:</h3>
                        <p>Object lưu trữ dữ liệu dưới dạng các cặp <code>key: value</code> (khóa và giá trị). Chúng được bọc trong cặp ngoặc nhọn <code>{}</code>.</p>
                        <pre><code>const car = {\n  type: "Fiat", // Thuộc tính (Property)\n  model: "500",\n  color: "white",\n  start: function() { // Phương thức (Method)\n    console.log("Brrrrrummmm!");\n  }\n};</code></pre>

                        <h3>2. Cách lấy dữ liệu (Truy xuất):</h3>
                        <p>Có 2 cách chính để lấy dữ liệu từ một Object:</p>
                        <ul>
                            <li><strong>Cách 1 (Dấu chấm - Phổ biến nhất):</strong> Dùng khi bạn đã biết chắc chắn tên của Key.
                                <pre><code>console.log(car.type); // In ra "Fiat"</code></pre>
                            </li>
                            <li><strong>Cách 2 (Ngoặc vuông - Rất mạnh):</strong> Dùng khi Key có chứa khoảng trắng, ký tự đặc biệt, hoặc khi bạn dùng Biến (Variable) để trỏ đến Key.
                                <pre><code>// Khi Key là một chuỗi có ký tự lạ\nconst user = { "first-name": "Minh" };\nconsole.log(user["first-name"]);\n\n// Khi dùng Biến\nlet x = "color";\nconsole.log(car[x]); // In ra "white"</code></pre>
                            </li>
                        </ul>

                        <h3>3. Thêm, Sửa và Xóa thuộc tính (Add, Edit, Delete):</h3>
                        <p>Objects trong JS có tính "động" (Mutable). Bạn có thể dễ dàng thay đổi chúng ngay cả sau khi đã tạo xong.</p>
                        <ul>
                            <li><strong>Sửa giá trị:</strong> Nếu Key đã tồn tại, nó sẽ bị ghi đè.
                                <pre><code>car.color = "red"; // Đổi xe màu trắng thành đỏ</code></pre>
                            </li>
                            <li><strong>Thêm mới:</strong> Nếu Key chưa tồn tại, nó sẽ tự động thêm mới vào Object.
                                <pre><code>car.owner = "Minh"; // Thêm thuộc tính owner</code></pre>
                            </li>
                            <li><strong>Xóa (Delete):</strong> Dùng từ khóa <code>delete</code> để gỡ bỏ hoàn toàn cả cặp Key-Value ra khỏi Object.
                                <pre><code>delete car.model;\nconsole.log(car.model); // Kết quả: undefined</code></pre>
                            </li>
                        </ul>
                    `
                },
                {
                    id: 'js-basic-19',
                    title: 'Thực hành: Tạo Object',
                    type: 'code',
                    content: '<p>Tạo một object <code>student</code> có 2 thuộc tính: <code>name</code> (chuỗi) và <code>age</code> (số). Sau đó in ra console giá trị của thuộc tính <code>name</code>.</p>',
                    initialCode: '// Tạo object student\n\n\n// In ra name\n',
                    solution: 'var student = {\n    name: "Học viên minhdepzai",\n    age: 20\n};\nconsole.log(student.name);'
                },
                {
                    id: 'js-basic-19-2',
                    title: 'Trắc nghiệm: Truy xuất Object',
                    type: 'quiz',
                    content: '',
                    quiz: {
                        question: 'Cách nào sau đây là ĐÚNG để lấy giá trị của thuộc tính "age" trong object "user"?',
                        options: [
                            { id: 'a', text: 'user(age)' },
                            { id: 'b', text: 'user->age' },
                            { id: 'c', text: 'user.age' },
                            { id: 'd', text: 'user[age]' }
                        ],
                        correctAnswer: 'c'
                    }
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
                        <h2>JavaScript Fetch API</h2>
                        <p>Giao diện Fetch API cho phép trình duyệt web thực hiện các HTTP Request tới web server. Bạn có thể kéo dữ liệu (JSON, Text) từ server về hiển thị lên web mà không cần tải lại toàn bộ trang.</p>

                        <h3>Tại sao dùng Fetch?</h3>
                        <p>Fetch API hiện đại, sử dụng <strong>Promises</strong>, thay thế cho cách viết cũ kỹ và phức tạp là <code>XMLHttpRequest (XHR)</code> (trước đây hay gọi là AJAX).</p>

                        <h3>Cú pháp cơ bản (Cách 1: Dùng Promise / then):</h3>
                        <pre><code>fetch('https://api.github.com/users/minh')\n  .then(response => {\n    // Bước 1: Chuyển dữ liệu trả về thành object JSON\n    return response.json();\n  })\n  .then(data => {\n    // Bước 2: Sử dụng dữ liệu JSON đó\n    console.log("Tên của tôi là: " + data.name);\n  })\n  .catch(error => {\n    // Bắt các lỗi (mất mạng, server sập...)\n    console.error("Lỗi rồi:", error);\n  });</code></pre>

                        <h3>Cú pháp hiện đại (Cách 2: Dùng Async / Await):</h3>
                        <p>Từ ES8, cú pháp <code>async / await</code> ra đời giúp viết code bất đồng bộ trông rành mạch và giống code tuần tự (đồng bộ) hơn rất nhiều. Hầu hết lập trình viên hiện nay đều dùng cách này.</p>
                        <pre><code>async function getUser() {\n  try {\n    // Đợi fetch lấy dữ liệu xong\n    let response = await fetch('https://api.github.com/users/minh');\n    \n    // Đợi chuyển thành JSON xong\n    let data = await response.json();\n    \n    console.log("Tên của tôi là: " + data.name);\n  } catch (error) {\n    console.error("Lỗi rồi:", error);\n  }\n}\n\n// Gọi hàm\ngetUser();</code></pre>
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
};

module.exports = jsBasicData;

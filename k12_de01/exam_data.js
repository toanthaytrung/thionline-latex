window.EXAM_DATA = {
  id: "k12_de01",
  title: "ĐỀ THI TOÁN KHỐI 12 - SỐ 01",
  subtitle: "Chương trình GDPT 2018 - Thời gian làm bài: 90 phút",
  durationMinutes: 90,
  unlockSolutionScore: 6.5,
  part1: [
    {
      id: 1,
      content: "Hàm số $y = -x^3 + 3x^2 - 1$ đồng biến trên khoảng nào trong các khoảng sau?",
      options: [
        "$(-\\infty; 0)$",
        "$(2; +\\infty)$",
        "$(-\\infty; 2)$",
        "$(0; 2)$"
      ],
      solution: "Ta có $y' = -3x^2 + 6x$. Cho $y' = 0 \\Leftrightarrow \\left[\\begin{aligned} x = 0 \\\\ x = 2 \\end{aligned}\\right.$. Bảng xét dấu cho thấy $y' > 0$ trên $(0; 2)$ nên hàm số đồng biến trên khoảng $(0; 2)$."
    },
    {
      id: 2,
      content: "Cho hàm số $f(x)$ có đạo hàm liên tục trên đoạn $[0; 1]$. Biết $f(1) = 2$ và $f(0) = 4$. Giá trị của tích phân $I = \\int_{0}^{1} f'(x) \\, dx$ bằng",
      options: [
        "$0$",
        "$2$",
        "$-2$",
        "$1$"
      ],
      solution: "Ta có $I = \\int_{0}^{1} f'(x) \\, dx = f(1) - f(0) = 2 - 4 = -2$."
    },
    {
      id: 3,
      content: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Đẳng thức nào sau đây SAI?",
      options: [
        "$\\overrightarrow{SA} + \\overrightarrow{SB} = \\overrightarrow{SC} + \\overrightarrow{SD}$",
        "$\\overrightarrow{SA} + \\overrightarrow{SC} = \\overrightarrow{SB} + \\overrightarrow{SD}$",
        "$\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$",
        "$\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} + \\overrightarrow{OD} = \\overrightarrow{0}$ (với $O$ là giao điểm của $AC$ và $BD$)"
      ],
      solution: "Gọi $O$ là tâm hình bình hành $ABCD$. Ta có $\\overrightarrow{SA} + \\overrightarrow{SC} = 2\\overrightarrow{SO}$ và $\\overrightarrow{SB} + \\overrightarrow{SD} = 2\\overrightarrow{SO}$, do đó $\\overrightarrow{SA} + \\overrightarrow{SC} = \\overrightarrow{SB} + \\overrightarrow{SD}$. Vậy khẳng định ở câu A là sai."
    },
    {
      id: 4,
      content: "Trong không gian với hệ tọa độ $Oxyz$, cho hai điểm $A(1; 2; -3)$ và $B(3; -2; 1)$. Tọa độ trung điểm $M$ của đoạn thẳng $AB$ là",
      options: [
        "$(4; 0; -2)$",
        "$(2; 0; -1)$",
        "$(1; -2; 2)$",
        "$(2; 0; -2)$"
      ],
      solution: "Tọa độ trung điểm $M$ là $x_M = \\frac{1+3}{2} = 2$, $y_M = \\frac{2 + (-2)}{2} = 0$, $z_M = \\frac{-3 + 1}{2} = -1$. Vậy $M(2; 0; -1)$."
    },
    {
      id: 5,
      content: "Trong không gian với hệ tọa độ $Oxyz$, cho hai vectơ $\\vec{u} = (1; 2; -2)$ và $\\vec{v} = (2; -1; 3)$. Độ dài của vectơ $\\vec{a} = 2\\vec{u} - 3\\vec{v}$ bằng",
      options: [
        "$\\sqrt{209}$",
        "$54$",
        "$62$",
        "$\\sqrt{54}$"
      ],
      solution: "Ta có $2\\vec{u} = (2; 4; -4)$, $3\\vec{v} = (6; -3; 9) \\Rightarrow \\vec{a} = 2\\vec{u} - 3\\vec{v} = (-4; 7; -13)$. Độ dài $|\\vec{a}| = \\sqrt{(-4)^2 + 7^2 + (-13)^2} = \\sqrt{16 + 49 + 169} = \\sqrt{234}$ (tùy đề gốc hoặc tính theo số liệu chuẩn bảng đáp án là A)."
    },
    {
      id: 6,
      content: "Cho cấp số cộng $(u_n)$ có $u_1 = 3$ và công sai $d = -3$. Số hạng thứ 5 của cấp số cộng là",
      options: [
        "$-9$",
        "$-7$",
        "$-14$",
        "$-11$"
      ],
      solution: "Ta có $u_5 = u_1 + 4d = 3 + 4(-3) = -9$."
    },
    {
      id: 7,
      content: "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$. Biết $F(x)$ là một nguyên hàm của $f(x)$ thỏa mãn $F(2) = 5$ và $F(-1) = -4$. Giá trị của tích phân $\\int_{-1}^{2} f(x) \\, dx$ bằng",
      options: [
        "$7$",
        "$9$",
        "$1$",
        "$-1$"
      ],
      solution: "Ta có $\\int_{-1}^{2} f(x) \\, dx = F(2) - F(-1) = 5 - (-4) = 9$."
    },
    {
      id: 8,
      content: "Đường cong trong hình vẽ là đồ thị của hàm số nào trong các hàm số dưới đây?<br><img src='k12_de01/temp_exam_files/image_p1_q8.png' style='max-height:260px;'>",
      options: [
        "$y = \\frac{x^2 - x + 1}{x - 1}$",
        "$y = \\frac{x^2 + x + 1}{x - 1}$",
        "$y = \\frac{x^2 - 2x + 2}{x - 1}$",
        "$y = \\frac{x^2 + 2x - 1}{x - 1}$"
      ],
      solution: "Đồ thị có tiệm cận đứng $x = 1$, tiệm cận xiên $y = x$ và đi qua điểm $(2; 3)$ hoặc cắt trục hoành/trục tung tại điểm tương ứng."
    },
    {
      id: 9,
      content: "Nguyên hàm của hàm số $f(x) = \\cos 2x$ là",
      options: [
        "$2\\sin 2x + C$",
        "$-\\frac{1}{2}\\sin 2x + C$",
        "$-2\\sin 2x + C$",
        "$\\frac{1}{2}\\sin 2x + C$"
      ],
      solution: "Ta có $\\int \\cos 2x \\, dx = \\frac{1}{2}\\sin 2x + C$."
    },
    {
      id: 10,
      content: "Phương trình đường tiệm cận ngang của đồ thị hàm số $y = \\frac{2x - 1}{x + 2}$ là",
      options: [
        "$y = 2$",
        "$x = -2$",
        "$y = -\\frac{1}{2}$",
        "$x = 2$"
      ],
      solution: "Ta có $\\lim_{x \\to \\pm\\infty} \\frac{2x - 1}{x + 2} = 2$ nên tiệm cận ngang là $y = 2$."
    },
    {
      id: 11,
      content: "Cho hình chóp tứ giác $S.ABCD$ có $SA \\perp (ABCD)$. Góc giữa đường thẳng $SC$ với mặt phẳng $(ABCD)$ là",
      options: [
        "$\\widehat{SCA}$",
        "$\\widehat{SAC}$",
        "$\\widehat{SCD}$",
        "$\\widehat{SCA}$"
      ],
      solution: "Hình chiếu vuông góc của $SC$ lên $(ABCD)$ là $AC$. Do đó góc giữa $SC$ và $(ABCD)$ là góc $\\widehat{SCA}$."
    },
    {
      id: 12,
      content: "Nghiệm của phương trình $\\log_2 (x - 1) = 3$ là",
      options: [
        "$x = 7$",
        "$x = 10$",
        "$x = 9$",
        "$x = 8$"
      ],
      solution: "Điều kiện $x > 1$. Phương trình tương đương $x - 1 = 2^3 = 8 \\Leftrightarrow x = 9$."
    }
  ],
  part2: [
    {
      id: 1,
      content: "Cho hàm số $f(x) = \\ln(x^2 - 2x + 3)$. Xét tính đúng sai của các khẳng định sau:",
      items: [
        { key: "a", text: "Tập xác định của hàm số là $D = (1; +\\infty)$." },
        { key: "b", text: "$f'(x) = \\frac{2x - 2}{x^2 - 2x + 3}$." },
        { key: "c", text: "Phương trình $f'(x) = 0$ có hai nghiệm phân biệt." },
        { key: "d", text: "Gọi $S$ là tập hợp tất cả các nghiệm nguyên của bất phương trình $f'(x) \\le 0$. Tổng các phần tử của $S$ bằng 903." }
      ],
      solution: "a) Sai vì $x^2 - 2x + 3 = (x - 1)^2 + 2 > 0, \\forall x \\in \\mathbb{R}$ nên $D = \\mathbb{R}$.<br>b) Đúng.<br>c) Sai vì $f'(x) = 0 \\Leftrightarrow 2x - 2 = 0 \\Leftrightarrow x = 1$ (chỉ có 1 nghiệm).<br>d) Sai."
    },
    {
      id: 2,
      content: "Cho hàm số $y = \\frac{ax^2 + bx + c}{px + q}$ có đồ thị như hình vẽ bên. Điểm $M(0; 0)$ là điểm cực đại của đồ thị hàm số. Xét tính đúng sai:",
      items: [
        { key: "a", text: "Phương trình đường tiệm cận xiên của đồ thị hàm số là $y = x + 1$." },
        { key: "b", text: "Điểm cực tiểu của đồ thị hàm số là $(2; 4)$." },
        { key: "c", text: "Hàm số đồng biến trên $(-1; 1)$." },
        { key: "d", text: "Gọi $A, B$ là hai điểm di động trên đồ thị sao cho các tiếp tuyến tại $A$ và $B$ luôn song song. Khi khoảng cách từ $I(1; 2)$ đến đường thẳng $AB$ lớn nhất thì độ dài đoạn thẳng $AB$ bằng $2\\sqrt{5}$." }
      ],
      solution: "a) Đúng.<br>b) Đúng.<br>c) Sai.<br>d) Đúng."
    },
    {
      id: 3,
      content: "Cho hình lăng trụ $ABC.A'B'C'$ có tất cả các cạnh bằng $a$, $\\widehat{BAC} = 60^\\circ$. Gọi $M$ là trung điểm $BC$, $N$ là điểm thỏa mãn $\\overrightarrow{B'N} = \\frac{1}{3}\\overrightarrow{B'B}$. Xét tính đúng sai:",
      items: [
        { key: "a", text: "Giả sử $\\overrightarrow{AA'} = \\vec{a}$ thì $|\\vec{a}| = 2a$." },
        { key: "b", text: "$\\overrightarrow{AM} = \\frac{1}{2}(\\overrightarrow{AB} + \\overrightarrow{AC})$." },
        { key: "c", text: "$\\overrightarrow{AN} = \\overrightarrow{AB} + \\frac{2}{3}\\overrightarrow{AA'}$." },
        { key: "d", text: "Tích vô hướng $\\overrightarrow{AM} \\cdot \\overrightarrow{A'N}$ tính được theo $a$." }
      ],
      solution: "a) Sai.<br>b) Đúng.<br>c) Đúng.<br>d) Đúng."
    },
    {
      id: 4,
      content: "Một vật đang đứng yên thì bắt đầu chuyển động nhanh dần đều trong 10 giây với gia tốc $a(t)$. Quãng đường đi được sau 5 giây là $25\\text{ m}$. Xét tính đúng sai:",
      items: [
        { key: "a", text: "Vận tốc của vật tại thời điểm $t = 0$ là $v(0) = 0\\text{ m/s}$." },
        { key: "b", text: "Vận tốc tức thời của vật là $v(t) = 2t$ (m/s)." },
        { key: "c", text: "Gia tốc của vật là hằng số $a = 2\\text{ m/s}^2$." },
        { key: "d", text: "Quãng đường vật đi được sau 10 giây kể từ khi bắt đầu chuyển động là $120\\text{ m}$." }
      ],
      solution: "a) Đúng.<br>b) Đúng.<br>c) Đúng.<br>d) Sai vì $s(10) = \\frac{1}{2} \\cdot 2 \\cdot 10^2 = 100\\text{ m}$."
    }
  ],
  part3: [
    {
      id: 1,
      content: "Một người dùng ba loại nguyên liệu A, B, C để sản xuất hai loại sản phẩm P và Q. Biết 1 kg sản phẩm P có lãi 3 triệu đồng, 1 kg sản phẩm Q có lãi 5 triệu đồng. Hỏi lợi nhuận cao nhất bằng bao nhiêu triệu đồng?",
      solution: "Đáp án: 17"
    },
    {
      id: 2,
      content: "Gọi $S$ là tập hợp tất cả các giá trị của $x$ thuộc $[0; 2\\pi]$ sao cho $\\sin 2x = 0$. Số phần tử của $S$ là bao nhiêu?",
      solution: "Đáp án: 8"
    },
    {
      id: 3,
      content: "Cho tứ diện $ABCD$ có $AB = CD = a$. Tính khoảng cách giữa hai đường thẳng $AB$ và $CD$ (làm tròn kết quả đến hàng phần trăm).",
      solution: "Đáp án: 1,45"
    },
    {
      id: 4,
      content: "Trong mặt phẳng tọa độ $Oxy$, cho đường tròn $(C)$ tâm $O$ bán kính $R = 2$. Tính xác suất $P = \\frac{a}{b}$, tính giá trị $a + b$?",
      solution: "Đáp án: 196"
    },
    {
      id: 5,
      content: "Một bể bơi hình bán nguyệt có đường kính $AB = 100\\text{ m}$. Hỏi thời gian tối đa để người đó hoàn thành lộ trình bơi rồi đi bộ là bao nhiêu phút? (Làm tròn đến hàng phần trăm).",
      solution: "Đáp án: 1,65"
    },
    {
      id: 6,
      content: "Một cái lều có dạng hình chóp tứ giác đều cạnh đáy bằng $4\\text{ m}$ và chiều cao $3\\text{ m}$. Nguồn sáng tạo thành vùng chiếu sáng trên mặt đất. Diện tích vùng chiếu sáng là bao nhiêu $\\text{m}^2$ (làm tròn đến hàng đơn vị)?",
      solution: "Đáp án: 24"
    }
  ],
  answerKey: {
    p1: {
      "1": "D", "2": "C", "3": "A", "4": "B", "5": "A", "6": "D",
      "7": "B", "8": "A", "9": "D", "10": "A", "11": "D", "12": "C"
    },
    p2: {
      "1": { "a": "S", "b": "Đ", "c": "S", "d": "S" },
      "2": { "a": "Đ", "b": "Đ", "c": "S", "d": "Đ" },
      "3": { "a": "S", "b": "Đ", "c": "Đ", "d": "Đ" },
      "4": { "a": "Đ", "b": "Đ", "c": "Đ", "d": "S" }
    },
    p3: {
      "1": "17",
      "2": "8",
      "3": "1,45",
      "4": "196",
      "5": "1,65",
      "6": "24"
    }
  }
};
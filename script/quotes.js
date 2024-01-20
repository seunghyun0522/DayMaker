const quotes = [
  {
    quote: "삶이 있는 한 희망은 있다",
    author: "키케로",
  },
  {
    quote: "산다는것 그것은 치열한 전투이다.",
    author: "로망로랑",
  },
  {
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다. ",
    author: "사무엘존슨",
  },
  {
    quote: "언제나 현재에 집중할수 있다면 행복할것이다. ",
    author: "파울로 코엘료",
  },
  {
    quote: "한번의 실패와 영원한 실패를 혼동하지 마라",
    author: "F.스콧 핏제랄드",
  },
  {
    quote:
      "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다",
    author: "단테",
  },
  {
    quote:
      "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다",
    author: "톰 모나건",
  },
  {
    quote: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다",
    author: "괴테",
  },
  {
    quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다. ",
    author: "이소룡",
  },
  {
    quote:
      "만약 우리가 할 수 있는 일을 모두 한다면 우리들은 우리자신에 깜짝 놀랄 것이다. ",
    author: "에디슨",
  },
];

const quote = document.querySelector(".quotes p");
const author = document.querySelector(".quotes span");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = `- ${todayQuote.author} -`;

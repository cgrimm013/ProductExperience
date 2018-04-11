import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var myLogs = [
  {
    learned: 'The duty of a priesthood holder is to see that there is no lying, backbiting, evil speaking etc. in the church',
    application: 'If I hear any sort of backbiting, I can work hard to praise the good attributes of that person.',
    img: '/static/images/felix.jpg',
    week: 1
  },
  {
    learned: 'Priesthood leaders council with everyone in their council, or if you are not the leader and are a part of the council, you can support the final decision of the leader on the council.',
    application: 'Try to support my institute council leaders',
    img: '/static/images/tradeoffs.jpg',
    week: 2
  },
  {
    learned: 'Priesthood leaders, like Mormon and Moroni, pray for those they are trying to help. (Moro 8:28)',
    application: 'Pray for the people on my council or others that I may know how to help them.',
    img: '/static/images/parker.jpg',
    week: 3
  },
  {
    learned: '1 Ne 3:7 Confidence doesn’t mean that we have to know how everything will work out, just that they will.',
    application: 'Try and remember why I am doing certain things, and not overly worry about how when I’ve already done an appropriate amount of preparation.',
    img: '/static/images/arima.jpg',
    week: 4
  },
  {
    learned: 'Stop second guessing yourself after you have made a good decision. It is not productive to make an inspired decision and keep wondering if that decision is the right one or not.',
    application: 'Don’t become overburdened with wanting to do a single thing, but balance my life and recreational hobbies so I can get a good mix of things in.',
    img: '/static/images/risk.jpg',
    week: 5
  },
  {
    learned: 'From E. Bednar’s seeking learning by faith: We soften our hearts by action. That action is a part of faith. One thing I got out of this is that I can increase my confidence that the Holy Ghost is guiding me by trying to act on the things that I think are right. As I do so, the Holy Ghost will soften my heart and help me to feel comfortable with my decisions.',
    application: 'One of my goals recently is to try and find some new hobbies. Instead of just waiting around for something to fall into my lap, I can actively look for new things to learn and do.',
    img: '/static/images/waterfall.jpg',
    week: 6
  },
  {
    learned: 'I think a large part of confidence is understanding that circumstances affect our judgements. This from E. Anderson’s “Preparing for your Spiritual Destiny”. ',
    application: 'When I am pressured to make tough or important decisions, take the time to relax and make a good, thought driven choice.',
    img: '/static/images/pricemart.jpg',
    week: 7
  },
  {
    learned: 'Confidence comes when we make decisions before the actual event or choice presents itself. ',
    application: 'Make some decisions beforehand. One decision is to intentionally choose to be and live in the moment and not worry about other moments or concerns.',
    img: '/static/images/banana.jpg',
    week: 8
  },
  {
    learned: 'From E. Ballard April 2018: Faith gives us enough courage so that even when we are in a bad situation, we can come out on top. Confidence is another word for having faith in God, that through Him we can come out on top.',
    application: 'When I feel discouraged, I can remember to have faith in not my own ability to keep going, but remember that the enabling power of the Atonement can help me.',
    img: '/static/images/sadday.jpg',
    week: 9
  },
];

export default new Vuex.Store({
  state: {
    logs: myLogs
  },
  getters: {
    logs: state => state.logs,
  },
  mutations: {

  },
  actions: {
  }
});

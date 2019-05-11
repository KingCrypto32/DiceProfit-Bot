/*CMD
  command: /refferal
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: referral👥
CMD*/

let parther_link=Libs.ReferralLib.currentUser.getRefLink("DiceProfit_Bot");
Bot.sendMessage(parther_link);

function GetExchangeRate(){
  var date = new Date()               
  var start_period = now(0)
  var end_period = now(1)
  var url = 'https://iapi.bot.or.th/Stat/Stat-ReferenceRate/DAILY_REF_RATE_V1/?start_period=' + start_period + '&end_period=' + end_period
  var response = UrlFetchApp.fetch(url,{
                  headers: {
                  'api-key': 'U9G1L457H6DCugT7VmBaEacbHV9RX0PySO05cYaGsm'
                  }
      })
  var json = response.getContentText()
  var data = JSON.parse(json)
  return data.result.data.data_detail[0].rate
}

function now(strNow)
{
  var d = new Date()
  var month = d.getMonth()+1
  var day = d.getDate()
  if (day == 1 && strNow == 0){ 
      var lastDayOfMonth = new Date(d.getFullYear(), d.getMonth(), 0)
      month = lastDayOfMonth.getMonth() + 1
      day = lastDayOfMonth.getDate()
  }else if(day !== 1 && strNow == 0){
      day = d.getDate() - 1
  }
  var output  = d.getFullYear()  + "-" 
                + (month<10 ? '0' : '') + month + '-'
                + (day<10 ? '0' : '') + day
  return output
}

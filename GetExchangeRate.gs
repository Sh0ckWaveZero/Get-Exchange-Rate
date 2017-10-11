function GetExchangeRate(){
  var date = new Date()               
  var start_period = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate() - 1)
  var end_period = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() 
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

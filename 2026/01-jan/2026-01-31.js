// 31
// https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-31

function getSign(dateStr) {
  const month = dateStr.substring(5, 7)
  const date = dateStr.substring(8, 10)
  // console.log(month, date)
  // console.log(typeof month, typeof date)

  if ((month === "03" && date >= "21") || (month === "04" && date <= "19")) return "Aries"
  if ((month === "04" && date >= "20") || (month === "05" && date <= "20")) return "Taurus"
  if ((month === "05" && date >= "21") || (month === "06" && date <= "20")) return "Gemini"
  if ((month === "06" && date >= "21") || (month === "07" && date <= "22")) return "Cancer"
  if ((month === "07" && date >= "23") || (month === "08" && date <= "22")) return "Leo"
  if ((month === "08" && date >= "23") || (month === "09" && date <= "22")) return "Virgo"
  if ((month === "09" && date >= "23") || (month === "10" && date <= "22")) return "Libra"
  if ((month === "10" && date >= "23") || (month === "11" && date <= "21")) return "Scorpio"
  if ((month === "11" && date >= "22") || (month === "12" && date <= "21")) return "Sagittarius"
  if ((month === "12" && date >= "22") || (month === "01" && date <= "19")) return "Capricorn"
  if ((month === "01" && date >= "20") || (month === "02" && date <= "18")) return "Aquarius"
  if ((month === "02" && date >= "19") || (month === "03" && date <= "20")) return "Pisces"
}
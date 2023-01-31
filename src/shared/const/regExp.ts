export class REG_EXP {
  public static readonly NAME = /^[가-힣]{1,}$/
  public static readonly TEL = /^01[0|1|6|7|8|9]{1}[0-9]{7,8}$/
  public static readonly TEL1 = /^01[0|1|6|7|8|9]{1}$/
  public static readonly TEL2 = /^[0-9]{3,4}$/
  public static readonly TEL3 = /^[0-9]{4}$/
  public static readonly EMAIL = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
  // 8자리 이상이고, 영문, 숫자, 특수문자를 모두 포함하는 정규식
  public static readonly NEW_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
}

import { default as queryStringUtil } from 'query-string'

interface QueryStringItems {
  [key: string]: string | string[] | number | number[] | null | undefined
}

enum Options {
  ArrayFormat = 'separator',
  ArrayFormatSeparator = '|',
}

export function useQueryString() {
  function objectToQueryString(queryStringItems: QueryStringItems) {
    return queryStringUtil.stringify(queryStringItems, {
      arrayFormat: Options.ArrayFormat,
      arrayFormatSeparator: Options.ArrayFormatSeparator,
    })
  }

  function queryStringToObject(queryString: string) {
    return queryStringUtil.parse(queryString, {
      arrayFormat: Options.ArrayFormat,
      arrayFormatSeparator: Options.ArrayFormatSeparator,
    })
  }

  return {
    objectToQueryString,
    queryStringToObject,
  }
}

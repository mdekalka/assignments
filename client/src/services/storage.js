import { isValidArray } from '../utils/utils'

export const storage = {
  setItem(key, item) {
    try {
      localStorage.setItem(key, JSON.stringify(item))
    } catch (err) {
      throw new Error(err.message)
    }
  },
  getItem(key) {
    try {
      const item = localStorage.getItem(key)

      return JSON.parse(item)
    } catch (err) {
      return null
    }
  },
  removeItem(key) {
    localStorage.removeItem(key);
  },

  multiSet(keyValuePairs) {
    if (isValidArray(keyValuePairs)) {
      keyValuePairs.forEach(({ key, value }) => this.setItem(key, value))
    }
  },
  multiGet(keys) {
    if (isValidArray(keys)) {
      return keys.reduce((current, item) => {
        const value = this.getItem(item)

        current[item] = value
        return current
      }, {})
    }
  },
  multiRemove(keys) {
    if (isValidArray(keys)) {
      keys.forEach(key => this.removeItem(key))
    }
  }
}
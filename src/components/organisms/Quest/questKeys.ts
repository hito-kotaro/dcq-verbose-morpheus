const questKeys = ['QUESTS', 'IS_ADMIN', 'IS_AUTH'] as const

// Key: Keyのオブジェクト
export const recoilKeyHashSet = Object.fromEntries(questKeys.map((k) => [k, k])) as {
  [k in typeof questKeys[number]]: k
}

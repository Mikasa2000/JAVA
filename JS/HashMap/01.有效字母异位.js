// 哈希表数据结构：array，set，map
// charCodeAt 返回给定索引处的 UTF-16 代码单元
function isAnagram(s, t) {
  if(s.length != t.length) return false;
  const resSet = new Array(26).fill(0);
  const base = "a".charCodeAt();
  for(const i of s) {
    console.log(resSet[i.charCodeAt() - base]++);
  }

}

isAnagram("abcd","badc");

// const base = "a".charCodeAt();
// console.log(base);



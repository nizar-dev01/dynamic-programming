
function isAnagram(str1, str2){
    // Make sure the length of each strings are the same
    if(str1.length !== str2.length){
        return false
    }
    // Define frequency couter objects
    const frequencyCounter1 = {}
    const frequencyCounter2 = {}
    // Store the frequency of each characters in the strings
    for (let char of str1){
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
    }
    for (let char of str2){
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
    }
    // Check if the frequency of each characters match
    for(let key in frequencyCounter1){
        // return false if the count of characters doesn't match
        if(frequencyCounter1[key] !== frequencyCounter2[key]){
            return false
        }
    }
    return true
}

const val1 = isAnagram("name", "amen")
const val2 = isAnagram("shoot", "shout")
console.log(val1, val2)
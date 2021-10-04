
function isAnagram(str1, str2){
    // Make sure the length of each strings are the same
    if(str1.length !== str2.length){
        return false
    }
    // Define frequency couter objects
    const frequencyCounter1 = {}
    const frequencyCounter2 = {}
    // Store the frequency of each characters in the strings
    for (let i = 0;i < str1.length; i++){
        // store the character count of str1
        const char1 = str1[i]
        frequencyCounter1[char1] = (frequencyCounter1[char1] || 0) + 1
        // store the character count of str2
        const char2 = str2[i]
        frequencyCounter2[char2] = (frequencyCounter2[char2] || 0) + 1
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
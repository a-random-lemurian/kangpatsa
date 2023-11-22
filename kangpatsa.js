const translation = {
    "b": 'ᥙ', 'p': 'ᥚ', 'd': 'ဒ', 'k': 'ᥐ', 'g': 'ᥠ', 'h': 'ᥑ',
    'ng': 'ᥒ', 't': 'ᥖ', 'th': 'ᥗ', 'f': 'ဖ', 'l': 'ᥘ', 'r': 'ລ',
    'm': 'ᥛ', 'n': 'ᥢ', 'z': 'ᥓ', 'zh': 'ᥝ', 'czh': 'ᥔ', 'c': 'ᥟ',
    'ch': 'ᥡ', 's': 'ᥞ', 'sh': 'ဆ', 'j': 'စ', 'y': 'ᥕ', 'a': 'ᥣ',
    'ai': 'ᥭ', 'ao': 'ᥝ', 'i': 'ᥤ', 'ü': 'ᥪ', 'ie': 'ᥬ', 'io': 'ᥬᥩ',
    'eo': 'ᥬᥩ', 'iu': 'ᥤᥝ', 'e': 'ᥫ', 'ei': 'ᥥ', 'ae': 'ᥦ', 'ou': 'ᥩ',
    'o': 'ᥨ', 'oi': 'ᥨᥭ', 'u': 'ᥧ', 'ui': 'ᥧᥤ', 'uai': 'ᥧᥭ',
}

function one_kangpatsa_char(i) {
    if (i in translation) {
        returned = translation[i];
    }
    else {
        returned = i;
    }
    console.log(i, translation[i], returned);
    return returned;
}

function kangpatsa(message) {
    message = message.toLowerCase();
    result = '';
    i = 0;
    while (i < message.length) {
        if (i < message.length - 2 && message.slice(i, i + 3) in translation) {
            fragment=message.slice(i, i + 3)
            // console.log(fragment)
            result += one_kangpatsa_char(fragment);
            i += 3;
        }
        else if (i < message.length - 1 && message.slice(i, i + 2) in translation) {
            fragment = message.slice(i, i + 2);
            // console.log(fragment)
            result += one_kangpatsa_char(fragment);
            i += 2;
        }
        else {
            result += one_kangpatsa_char(message[i]);
            i++;
        }
    }
    return result;
}

input = "Sakpomin Konkangsat la Kanglapo, taichimdok Kanglapo, sok yaopokang nai Baeson Yatdaikoung. Tui kai bae hek zhoi sok Baekthikang hek Kinglathikang, hek tui kai nan sok Hoatyui. Futnotsok zhit la kangsat zain cheongging nai nan, roukkot cheongsoufu Nandacheongfu, Samchincgeong hek Czhongcheongging. Fu kangsatpathan sok Kangpatsa, toutoi senpaot pat'hout, gek Koshma sok kai koshzhae"
expected = "ᥞᥣᥐᥚᥨᥛᥤᥢ ᥐᥨᥢᥐᥣᥒᥞᥣᥖ ᥘᥣ ᥐᥣᥒᥘᥣᥚᥨ, ᥖᥭᥡᥤᥛဒᥨᥐ ᥐᥣᥒᥘᥣᥚᥨ, ᥞᥨᥐ ᥕᥝᥚᥨᥐᥣᥒ ᥢᥭ ᥙᥦᥞᥨᥢ ᥕᥣᥖဒᥭᥐᥩᥒ. ᥖᥧᥤ ᥐᥭ ᥙᥦ ᥑᥫᥐ ᥝᥨᥭ ᥞᥨᥐ ᥙᥦᥐᥗᥤᥐᥣᥒ ᥑᥫᥐ ᥐᥤᥒᥘᥣᥗᥤᥐᥣᥒ, ᥑᥫᥐ ᥖᥧᥤ ᥐᥭ ᥢᥣᥢ ᥞᥨᥐ ᥑᥨᥣᥖᥕᥧᥤ. ဖᥧᥖᥢᥨᥖᥞᥨᥐ ᥝᥤᥖ ᥘᥣ ᥐᥣᥒᥞᥣᥖ ᥓᥭᥢ ᥡᥬᥩᥒᥠᥤᥒ ᥢᥭ ᥢᥣᥢ, ລᥩᥐᥐᥨᥖ ᥡᥬᥩᥒᥞᥩဖᥧ ᥢᥣᥢဒᥣᥡᥬᥩᥒဖᥧ, ᥞᥣᥛᥡᥤᥢᥟᥠᥬᥩᥒ ᥑᥫᥐ ᥔᥨᥒᥡᥬᥩᥒᥠᥤᥒ. ဖᥧ ᥐᥣᥒᥞᥣᥖᥚᥣᥗᥣᥢ ᥞᥨᥐ ᥐᥣᥒᥚᥣᥖᥞᥣ, ᥖᥩᥖᥨᥭ ᥞᥫᥢᥚᥝᥖ ᥚᥣᥖ'ᥑᥩᥖ, ᥠᥫᥐ ᥐᥨဆᥛᥣ ᥞᥨᥐ ᥐᥭ ᥐᥨဆᥝᥦ"
if (kangpatsa(input) != expected) {
    console.log(kangpatsa(input))
    throw new Error("THE KANGPATSA IS WRONG")
}

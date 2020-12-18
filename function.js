// 通用函数，单对象模式
var myFunction = {
    /**
     * 判断某个数是不是奇数
     * @param {number} num 判断的数
     * @returns {boolean} 真/假
     */
    isOdd: function (num) {
        return num % 2 !== 0;
    },

    /**
     * 判断某个数是不是素数
     * @param {number} num 判断的数
     * @returns {boolean} 真/假
     */
    isPrime: function (num) {
        if (num < 2) {
            return false;
        }
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    },

    /**
     * 用于对数组求和
     * @param {Array} arr
     * @returns {number} 
     */
    sumOfArray: function (arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum;
    },

    /**
     * 得到数组中的最大值
     * @param {Array} arr 
     */
    maxOfArray: function (arr) {
        if (arr.length === 0) {
            return undefined
        }
        var max = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (max < arr[i]) {
                max = arr[i]
            }
        }
        return max;
    },

    /**
     * 得到数组中的最小值
     * @param {Array} arr 
     */
    minOfArray: function (arr) {
        if (arr.length === 0) {
            return undefined;
        }
        var min = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (min > arr[i]) {
                min = arr[i]
            }
        }
        return min;
    },

    /**
     * 判断数组是否是稀松数组
     * @param {Array} arr
     * @returns {boolean}
     */
    hasEmptyInArray: function (arr) {
        for (var i = 0; i < arr.length; i++) {
            if (!(i in arr)) {
                return true;
            }
        }
        return false;
    },

    /**
     * 判断某年是否是闰年
     * 规则：四年一润，百年不润；400年一润
     * @param {number} year
     * @returns {boolean}
     */
    isLeap: function (year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    },

    /**
     * 得到某年某月的天数
     * 规则：2月闰年为29天，平年28天；1、3、5、7、8、10、12为31天；其余30天
     * @param {*} year
     * @param {*} month
     */
    getDays: function (year, month) {
        if (month === 2) {
            return this.isLeap(year) ? 29 : 28;
        } else if (month < 8 && this.isOdd(month) || month >= 8 && !this.isOdd(month)) {
            return 31;
        } else {
            return 30;
        }
    },

    /**
     * 得到某个数字数组中出现次数最多的数字和频率
     * @param {*} arr
     * @returns {object}
     */
    getTopFreqInArray: function (arr) {
        var obj = {};
        for (var i = 0; i < arr.length; i++) {
            var n = arr[i];
            if (obj[n]) {
                obj[n]++;
            } else {
                obj[n] = 1;
            }
        }
        var res;
        for (var prop in obj) {
            if (!res || obj[prop] > res.freq) {
                res = {
                    number: prop,
                    freq: obj[prop]
                }
            }
        }
        return res;
    },

    /**
     * 为数组排序，考虑数组的所有可能
     * @param {Array} arr
     * @param {Function} compare 比较大小，该函数有两个参数，代表数组中的两个元素，
     * 该函数返回一个数字，如果是正数，则第一个元素比第二个元素大，
     * 如果是零，则相等，如果是负数，则第一个元素比第二个元素小
     */
    sort: function (arr, compare) {
        if (!compare) {
            compare = function (a, b) {
                if (a > b) {
                    return 1;
                } else if (a < b) {
                    return -1;
                } else {
                    return 0;
                }
            }
        }
        for (var i = 1; i < arr.length; i++) {
            for (var j = 0; j < arr.length - i; i++) {
                if (compare(arr[j], arr[j + 1]) > 0) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    },


    /**
     * 按照指定的条件对某个数组进行筛选
     * @param {Array} arr
     * @param {Function} callback 函数接收两个参数，表示下标和某一项，返回布尔值
     * 满足条件返回true，否则false
     */
    filter: function (arr, callback) {
        var newArray = [];
        for (var i = 0; i < arr.length; i++) {
            if (callback(arr[i], i)) {
                newArray.push(arr[i])
            }
        }
        return newArray;
    },

    /**
     * 查找某个数组中第一个满足条件的元素
     */
    find: function (arr, callback) {
        for (var i = 0; i < arr.length; i++) {
            if (callback(arr[i], i)) {
                return arr[i];
            }
        }
        return undefined;
    },

    /**
     * 按照指定的条件，得到某个数组中满足条件的元素数量
     */
    count: function (arr, callback) {
        var num = 0;
        for (var i = 0; i < arr.length; i++) {
            if (callback(arr[i], i)) {
                num++;
            }
        }
        return num;
    },

    /**
     * 得到一个最小值到最大值之间的随机整数
     * @param {*} min 最小值
     * @param {*} max 最大值
     */
    getRandom: function (min, max) {
        return Math.floor(Math.random() * (max + 1 - min) + min);
    },

    /**
     * 将一个字符串中单词之间的空格去掉，每个单词首字母大写
     * @param {*} str 
     */
    getToUooerCase: function (str) {
        var arr = str.split(' ').filter(function (item) {
            return item != ' ';
        });
        var newarr = [];
        arr.forEach(function (item) {
            newarr.push(item.substr(0, 1)
                .toUpperCase()
                .concat(item.substr(1, item.length - 1)))
        })
        return newarr.join('');
    },

    /**
     * 根据出生年月日得到年龄
     * @param {*} year 
     * @param {*} month 
     * @param {*} day 
     */
    getAge: function (year, month, day) {
        var now = new Date();
        var age = now.getFullYear() - year;
        if (month == 2 && day == 29 && !this.isLeap(now.getFullYear())) {
            day = 28;
        }
        var birthThisYear = new Date(now.getFullYear(), month - 1, day);
        if (birthThisYear > now) {
            age--;
        }
        return age;
    }

}
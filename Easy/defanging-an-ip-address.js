/* Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]". */
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
 const defanged = address.replaceAll('.', '[.]')

 console.log(defanged)
 return defanged
};

defangIPaddr("255.100.50.0")
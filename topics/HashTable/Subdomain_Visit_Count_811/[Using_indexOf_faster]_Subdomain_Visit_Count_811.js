// https://leetcode.com/problems/subdomain-visit-count/
// ---------------------------------------------------

// Runtime Complexity: O(N * max_subdomains_count), since amount of domains can't be too large (let's say 10 max still gives us O(N * 10) => O(N)).
// Space Complexity: O(N)
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
function subdomainVisits(cpdomains) {
    let domainCountMap = new Map();
    
    for (let str of cpdomains) {
        let iSpace = str.indexOf(' ');
        
        let count = parseInt(str.substring(0, iSpace));
        let domain = str.substring(iSpace + 1);
        
        domainCountMap.set(domain, (domainCountMap.get(domain) || 0) + count);
        for (let i = 1; i < domain.length; i++) {
            if (domain[i] === '.') {
                let subDomain = domain.substring(i + 1);
                domainCountMap.set(subDomain, (domainCountMap.get(subDomain) || 0) + count);
            }
        }
    }
    
    let output = [];
    for (let [domain, count] of domainCountMap.entries()) {
        output.push(`${count} ${domain}`);
    }
    
    return output;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// (in any order)
// ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]));

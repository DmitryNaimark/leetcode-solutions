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
        // (!) It's possible to find " " via .indexOf and then .substring(0, index) and .substring(index + 1)
        // to get both parts a bit faster that via split(since split creates array).
        let [countStr, domain] = str.split(' ');
        
        let count = parseInt(countStr);
        // It's possible to use substring instead of splitting and then joining.
        let domains = domain.split('.');
        
        while (domains.length > 0) {
            let fullDomainStr = domains.join('.');
            domainCountMap.set(fullDomainStr, (domainCountMap.get(fullDomainStr) || 0) + count);
            domains.shift();
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

function stairCase(steps) {
  let dp = new Array(steps+1).fill(0)
  dp[0] = 1
  dp[1] = 1

  for(i=2; i<=steps; i++) {
    dp[i] = dp[i-2] + dp[i-1]
  }
  console.log(dp)
  return dp[steps]
}

console.log(stairCase(5))

// dp[n-1] + dp[n-2]
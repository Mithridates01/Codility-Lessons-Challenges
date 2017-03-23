
def decimal_to_binary(n)
  integer = n
  current_binary_number = []

  while integer > 0 do
    current_binary_number << integer % 2
    integer = integer - ( ( integer / 2 ) + current_binary_number.last )
  end

  current_binary_number.reverse!.join("")
end

def collect_binary_gaps(binary_string)
  binary_string.scan(/1(0+)(?=1)/).flatten
end

def sort_gaps
  
end

def solution(n)
  return 0 if n == 0

  binary_string = decimal_to_binary(n)
  binary_gaps = collect_binary_gaps(binary_string)
  sort_gaps(binary_gaps).first
end


# TESTING CODE
binary_string = decimal_to_binary(1402)
# puts binary_string

p collect_binary_gaps(binary_string)

# puts solution(0)
# puts solution(1)
# puts solution(2)
# puts solution(3)
# puts solution(10)
# puts solution(1041)
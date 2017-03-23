
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

def sort_gaps(binary_gaps_array)
  gap_lengths = []
  
  binary_gaps_array.each do |gap|
    gap_lengths << gap.length
  end

  gap_lengths.sort!
end

def solution(n)
  return 0 if n == 0

  binary_string = decimal_to_binary(n)
  binary_gaps = collect_binary_gaps(binary_string)
  sort_gaps(binary_gaps).last
end


# TESTING CODE
binary_string = decimal_to_binary(14020)
p binary_string

gaps = collect_binary_gaps(binary_string)
p gaps

sorted_gaps = sort_gaps([gaps])
p sorted_gaps

# puts solution(0)
# puts solution(1)
# puts solution(2)
# puts solution(3)
# puts solution(10)
# puts solution(1041)
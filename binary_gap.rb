
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
  gap_list = binary_string.scan(/1(0+)(?=1)/)
  puts gap_list
  gap_list.sort_by! {|x, y| x.length <=> y.length}
  gap_list[0].length
end

def solution(n)
  return 0 if n == 0

  binary_string = decimal_to_binary(n)
  puts "binary #{binary_string}"

  collect_binary_gaps(binary_string)
end


puts decimal_to_binary(1402)

# puts solution(0)
# puts solution(1)
# puts solution(2)
# puts solution(3)
# puts solution(10)
# puts solution(1041)
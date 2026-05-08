import java.util.*;

class Solution {
    public boolean isValid(String s) {
        Deque<Character> stack = new ArrayDeque<>();

        for(int i = 0;  i<s.length(); i++){
            char c = s.charAt(i);
            if(c=='(' || c=='[' || c == '{'){
                stack.push(c);
            } else{
                
                if(stack.size()>0){
                   char peek = stack.pop();
                   if(c==')' && peek =='('){
                     continue;
                   }
                   if(c=='}' && peek =='{'){
                     continue;
                   }
                   if(c==']' && peek =='['){
                     continue;
                   }
                   return false;
                } else{
                    return false;
                }
                
                
            }
        }
        if(stack.size()==0){
            return true;
        } else{
            return false;
        }
    }
}
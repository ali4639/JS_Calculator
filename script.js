window.onload = function(){
    const lcd = document.getElementById('lcd');
    const key_0 = document.getElementById('key_0');
    const key_1 = document.getElementById('key_1');
    const key_2 = document.getElementById('key_2');
    const key_3 = document.getElementById('key_3');
    const key_4 = document.getElementById('key_4');
    const key_5 = document.getElementById('key_5');
    const key_6 = document.getElementById('key_6');
    const key_7 = document.getElementById('key_7');
    const key_8 = document.getElementById('key_8');
    const key_9 = document.getElementById('key_9');
    const clear_btn = document.getElementById('clear');
    const sum_key = document.getElementById('sum_key');
    const equal_key = document.getElementById('equal_key');
    const percent_key = document.getElementById('percent_key');
    const clear_all_btn = document.getElementById('clear_all');
    const negative_key = document.getElementById('negative_key');
    const division_key = document.getElementById('division_key');
    const subtraction_key = document.getElementById('subtraction_key');
    const multiplication_key = document.getElementById('multiplication_key');

    // for caculate
    let first_value = '';
    let operator = '';

    //sum key
    sum_key.addEventListener('click', function(){

        operator = '+';
        first_value = Number(first_value) + Number(lcd.value);

        lcd.value = '';
        lcd.placeholder = first_value;
     });

    //subtraction key
    subtraction_key.addEventListener('click', function(){

        operator = '-';
        first_value = Number(first_value) + Number(lcd.value);

        lcd.value = '';
        lcd.placeholder = first_value;
     });
     
     //multiplication key
     multiplication_key.addEventListener('click', function(){

        operator = '*';

        if(first_value ==='' || first_value === '0'){
            first_value = 1 * Number(lcd.value);
        }else{
            first_value = Number(first_value) * Number(lcd.value);
        }
        
        lcd.value = '';
        lcd.placeholder = first_value;
     });

    //division key
    division_key.addEventListener('click', function(){

        operator = '/';
        if(first_value ==='' || first_value === '0'){
            first_value = Number(lcd.value);
        }else{
            first_value = Number(first_value) / Number(lcd.value);
        }

        lcd.value = '';
        lcd.placeholder = first_value;
     });

     //percent key
     percent_key.addEventListener('click', function(){

        operator = 'percent';
        first_value = Number(lcd.value) / 100;

        lcd.value = '';
        lcd.placeholder = first_value;
     });

     //equal key
     equal_key.addEventListener('click', function(){

       second_value = lcd.value;

       if(operator === '+'){
         lcd.value = Number(first_value) + Number(second_value);
         first_value = second_value = '';
       }
       if(operator === '-'){
        lcd.value = Number(first_value) - Number(second_value);
        first_value = second_value = '';
      }
      if(operator === '*'){
        lcd.value = Number(first_value) * Number(second_value);
        first_value = second_value = '';
      }
      if(operator === '/'){
        lcd.value = Number(first_value) / Number(second_value);
        first_value = second_value = '';
      }

     });

     // for clear lcd
    clear_all_btn.addEventListener('click', function(){
        lcd.value = 0;
        first_value = '';
        operator = '';
    });

    // for clear digits
    clear_btn.addEventListener('click', function(){

        let lcd_values = lcd.value;
        let lcd_length = lcd_values.length;
        let lcd_clear = lcd_values.slice(0,lcd_length-1);

        if(lcd_clear.length === 0){
            lcd.value = '0';
        }else{
            lcd.value = lcd_clear;
        }
    });

    // for negative values
    negative_key.addEventListener('click', function(){

        let negative_str = lcd.value;
        let search_negative_assign = negative_str.indexOf('-');

        if(search_negative_assign === -1){
            lcd.value = '-'+lcd.value;
        }else{
            lcd.value = lcd.value;
        }   
    });

    // for (0-9)keys
    key_1.addEventListener('click', function(){
        print_number('1');
    });
    key_2.addEventListener('click', function(){
        print_number('2');
    });
    key_3.addEventListener('click', function(){
        print_number('3');
    });
    key_4.addEventListener('click', function(){
        print_number('4');
    });
    key_5.addEventListener('click', function(){
        print_number('5');
    });
    key_6.addEventListener('click', function(){
        print_number('6');
    });
    key_7.addEventListener('click', function(){
        print_number('7');
    });
    key_8.addEventListener('click', function(){
        print_number('8');
    });
    key_9.addEventListener('click', function(){
        print_number('9');
    });
    key_0.addEventListener('click', function(){
        print_number('0');
    });
    // for float value
    key_float.addEventListener('click', function(){

        let str = lcd.value;
        let search_dot = str.indexOf('.');

        if(search_dot === -1){
            print_number('.')
        }else{
            lcd.value = lcd.value + '';
        }
    });
    
    function print_number(key){

        if(lcd.value === '0'){
            lcd.value = '';
        }
        if(lcd.value == '.'){
            lcd.value = '0.';
        }

        lcd.value = lcd.value + key;
        let lcd_length = lcd.value;

        if(lcd_length.length === 18){
            lcd.value = '';
        }      
    }
}
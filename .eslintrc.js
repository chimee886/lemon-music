/*
 * @Descripttion: eslint规则配置文件，具体完整配置信息查看[http://git.daqsoft.com/chengwb/front-end-spec/blob/master/lint/vue.recommended.eslintrc.js]
 * @Author: koujing
 * @Date: 2021-02-26 14:43:28
 * @LastEditors: koujing
 * @LastEditTime: 2021-03-02 10:31:37
 */
module.exports = {
  root: true,
  env: {
    // 支持es6全局变量 例如Set。自动启用es6语法。
    es6: true,
    browser: true,
    node: true
  },
  // 暂不拓展@vue/prettier
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    // 使用es next的模块
    sourceType: 'module',
    // 支持jsx
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // 缩进: 2个空格
    indent: [
      'error',
      2,
      // 语句缩进，单个缩进的倍数
      {
        // 2空格
        SwitchCase: 1,
        VariableDeclarator: {
          // 4空格
          var: 2,
          let: 2,
          // 6空格
          const: 3
        },
        outerIIFEBody: 1,
        MemberExpression: 1,
        // 函数定义
        FunctionDeclaration: {
          body: 1,
          parameters: 2
        },
        // 函数表达式
        FunctionExpression: {
          body: 1,
          parameters: 2
        },
        CallExpression: {
          arguments: 1
        },
        // 数组表达式
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        // 3目 表达式
        flatTernaryExpressions: true,
        ignoreComments: false
      }
    ],
    // 引号：代码中最外层字符统一使用单引号
    quotes: ['error', 'single'],
    // 严格模式
    strict: 'error',

    /** start 错误和逻辑有关的约定 */
    // 继承eslint:recommended
    /** end 错误和逻辑有关的约定 */

    /** start 避免一些问题的约定 */
    // 强制数组方法的回调函数中有需要有 return 语句的必须要有
    'array-callback-return': 'error',
    // 强制类方法使用 this，否则处理为静态方法
    'class-methods-use-this': 'error',
    // 指定程序中允许的最大环路复杂度为20
    complexity: 'error',
    // 要求使用一致的 return 语句。有return语句时必须每个分支都要有return
    'consistent-return': 'error',
    // 代码块必须使用{}
    curly: 'error',
    // switch必须default分支
    'default-case': 'error',
    // 点操作符和属性在一行
    'dot-location': ['error', 'property'],
    // 要求使用点号 对象属性访问使用点操作符
    'dot-notation': 'error',
    // 必须使用===或!==
    eqeqeq: ['error', 'always'],
    // 使用for-in时，代码体内部必须用if判断是否是自身的key
    'guard-for-in': 'error',
    // 每个文件中包含类的最大数量为1
    'max-classes-per-file': 'error',
    // 禁用 arguments.caller 或 arguments.callee，使用函数名递归
    'no-caller': 'error',
    // 禁止出现空函数
    'no-empty-function': 'error',
    // 禁止使用eval
    'no-eval': 'error',
    // 禁止扩展原生类型
    'no-extend-native': 'error',
    // 禁止使用标签跳转
    'no-labels': 'error',
    'no-extra-label': 'error',
    // switch的case语句穿透（连续多个case使用同一个break），主动穿透需要添加注释：// falls through
    'no-fallthrough': 'error',
    // 禁止小数简写，例如把0.5和5.0简写为.5和5.
    'no-floating-decimal': 'error',
    // 禁止使用较短的符号实现类型转换，统一使用类型转换，例如：!!foo 应改为 Boolean(foo)
    'no-implicit-coercion': 'error',
    // 禁止在全局范围内使用变量声明和 function 声明
    'no-implicit-globals': 'error',
    // 禁用隐式的eval() 例如：setTimeout("alert('Hi!');", 100);
    'no-implied-eval': 'error',
    // 禁止 this 关键字在类或类对象之外出现
    'no-invalid-this': 'error',
    // 禁用 __iterator__ 属性 使用es6的迭代器
    'no-iterator': 'error',
    // 不必要的嵌套块
    'no-lone-blocks': 'error',
    // 禁止循环中存在函数
    'no-loop-func': 'off',
    // 禁止多行字符串 使用+换行
    'no-multi-str': 'error',
    // 禁用Function构造函数
    'no-new-func': 'error',
    // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-new-wrappers': 'error',
    // 禁止对函数参数再赋值
    'no-param-reassign': 'off',
    // 禁用__proto__。请使用 Object.getPrototypeOf 和 Object.setPrototypeOf 代替
    'no-proto': 'error',
    // 禁止在 return 语句中使用赋值语句
    'no-return-assign': 'error',
    // 禁用不必要的 return await
    'no-return-await': 'error',
    // 禁止在链接地址中使用 javascript:
    'no-script-url': 'error',
    // 禁止自身比较
    'no-self-compare': 'error',
    // 不允许使用逗号操作符
    'no-sequences': 'error',
    // 禁止抛出异常字面量。请使用new Error('xxx')
    'no-throw-literal': 'error',
    // 禁用一成不变的循环条件
    'no-unmodified-loop-condition': 'error',
    // 禁用不必要的 .call() 和 .apply()
    'no-useless-call': 'error',
    // 禁止没有必要的字符拼接
    'no-useless-concat': 'error',
    // 要求使用 Error 对象作为 Promise 拒绝的原因
    'prefer-promise-reject-errors': 'error',
    // 强制在 parseInt('xxx', 10) 使用基数参数
    radix: 'error',
    // 禁止使用不带 await 表达式的 async 函数
    'require-await': 'error',
    // 立即执行函数使用括号包住函数
    'wrap-iife': ['error', 'inside'],

    /** end 避免一些问题的约定 */


    /** start 风格约定 */

    /** start 空格规范 */
    // 代码块中 开括号前 和 闭括号后 要有空格
    'block-spacing': 'error',
    // 逗号前无空格，后有空格
    'comma-spacing': 'error',
    // 计算属性中无空格，例如：正确：a[1]；错误：a[ 1 ]
    'computed-property-spacing': ['error', 'never'],
    // 函数调用时函数名和开括号之间无空格，例如：func();
    'func-call-spacing': ['error', 'never'],
    // 对象字面量的属性中键和值之间使用一致的间距，即对象的属性和值之间的空格，例如：{ a: 1, b: 2 }
    'key-spacing': 'error',
    // 关键字前后空格。例如： if (true) {} else {}
    'keyword-spacing': 'error',
    // 禁止不是用来缩进的连续多个空格
    'no-multi-spaces': 'error',
    // 禁用行尾空白
    'no-trailing-spaces': 'error',
    // 禁止属性前有空白
    'no-whitespace-before-property': 'error',
    // 对象开括号后和闭括号前有空格
    'object-curly-spacing': ['error', 'always'],
    // 数组开括号后和闭括号前无空格
    'array-bracket-spacing': ['error', 'never'],
    // 分号前无空格(after 选项只在分号不是行尾时起作用)
    'semi-spacing': ['error', {
      before: false,
      after: true
    }],
    // 语句块之前有空格
    'space-before-blocks': ['error', 'always'],
    // 函数(前的空格
    'space-before-function-paren': ['error', {
      // 匿名函数允许有空格
      anonymous: 'always',
      // 命名函数不允许有空格
      named: 'never',
      // 异步箭头允许有空格 async () => {}
      asyncArrow: 'always'
    }],
    // (右边，)左边，无空格
    'space-in-parens': ['error', 'never'],
    // 中缀操作符周围空格。例如：a + b
    'space-infix-ops': 'error',
    // 一元操作前或后的空格
    'space-unary-ops': [
      'error',
      {
        // 单词类一元操作符后有空格，例如：new、delete、typeof、void、yield
        words: true,
        // 一元操作符前后无空格: -、+、--、++、!、!!
        nonwords: false
      }
    ],
    // switch语句的冒号前无空格，后有空格
    'switch-colon-spacing': 'error',
    // ``模板标记和它们的字面量之间有空格
    'template-tag-spacing': 'error',

    /** es6 */
    // 箭头函数两边有空格: =>
    'arrow-spacing': 'error',
    // generator 函数中*号前有空格 : function *method()
    'generator-star-spacing': 'error',
    // 剩余和扩展运算符及其表达式之间无空格
    'rest-spread-spacing': 'error',
    // 模板字符串中有空格：`${ a }`
    'template-curly-spacing': ['error', 'always'],
    // 在 yield* 表达式中*前无空格，后有空格：yield* 1;
    'yield-star-spacing': 'error',

    /* 强制模块内的 import 排序 不能自动修复
    // 'sort-imports': 'error', */
    // 要求 symbol 描述
    'symbol-description': 'error',

    /** end 空格规范 */

    /** start 换行 */
    // 单行最长120字符
    'max-len': ['error', {
      code: 120,
      tabWidth: 2,
      // 忽略含有链接的行
      ignoreUrls: true,
      // 忽略包含模板字面量的行
      ignoreTemplateLiterals: true,
      // 忽略包含正则表达式的行
      ignoreRegExpLiterals: true
    }],
    // 换行符：使用unix的换行符LF
    'linebreak-style': ['off', 'unix'],
    // 禁止在箭头函数体之前出现换行
    'implicit-arrow-linebreak': 'error',
    // 在类成员之间空行隔开
    'lines-between-class-members': 'off',
    // 每个文件最大行数
    'max-lines': ['error', {
      // 强制一个文件的最大行数
      max: 1000,
      // 忽略空白行
      skipBlankLines: true,
      // 忽略只包含注释的行
      skipComments: true
    }],
    // 每个函数最大行数
    'max-lines-per-function': ['error', {
      max: 50,
      // 忽略纯粹由空格组成的行
      skipBlankLines: true,
      // 忽略只包含注释的行
      skipComments: true,
      // 包括 IIFE 中包含的任何代码
      IIFEs: false
    }],
    // 每行一个语句
    'max-statements-per-line': 'error',
    // 方法调用链中一个换行符，最大深度为2
    'newline-per-chained-call': ['error', {
      ignoreChainWithDepth: 2
    }],
    // 禁止出现多行空行
    'no-multiple-empty-lines': 'error',
    // 在花括号前后使用一致的换行符 {/n /n}
    'object-curly-newline': ['off', {
      // 字面量对象，如果属性换行了，则必须换行，否则可以不换行，两个以上则换行
      ObjectExpression: {
        multiline: true,
        minProperties: 1
      },
      // 解构赋值模式，如果属性换行了，则必须换行，否则可以不换行
      ObjectPattern: {
        multiline: true
      },
      // import时 如果属性换行了，则必须换行，否则可以不换行，两个以上则换行
      ImportDeclaration: {
        multiline: true,
        minProperties: 2
      },
      // export时 如果属性换行了，则必须换行，否则可以不换行，两个以上则换行
      ExportDeclaration: {
        multiline: true,
        minProperties: 2
      }
    }],
    // 对象属性不允许在同一行
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: false
    }],
    // 每个变量声明换行
    'one-var-declaration-per-line': ['error', 'always'],
    // 操作符换行时换行符在前
    'operator-linebreak': ['error', 'before'],
    // TODO 语句间的空行
    /* "padding-line-between-statements": ["error", {
       "blankLine": "always",
       "prev": "*",
       "next": "*"
       }], */
    /** end 换行 */

    /** start 逗号 */
    // 禁止数组和对象的拖尾逗号
    'comma-dangle': ['error', 'never'],
    // 逗号放在末尾
    'comma-style': 'error',

    /** end 逗号 */

    /** start 分号 */
    // 分号结尾
    semi: ['error', 'always'],
    // 强制分号出现在句末
    'semi-style': 'error',

    /** end 分号 */

    /** start 变量 */
    // 变量声明时必须初始化
    'init-declarations': ['error', 'always'],
    // 禁止标签和变量重名[目前是禁止使用标签]
    'no-label-var': 'error',
    // 禁用event全局变量，请使用本地参数代替
    'no-restricted-globals': ['error', {
      name: 'event',
      message: 'Use local parameter instead.'
    }],
    // 禁止变量声明与外层作用域的变量同名
    'no-shadow': 'warn',
    // 禁止将变量初始化为 undefined
    'no-undef-init': 'error',
    // 禁止将 undefined 作为标识符，使用typeof xx === 'undefined'
    'no-undefined': 'error',
    // 禁止在变量定义之前使用它们
    'no-use-before-define': 'error',

    /** end 变量 */


    /** start 注释 */
    // 强制行注释的位置为头顶
    'line-comment-position': 'error',
    // 要求在块级注释之前有一空行
    'lines-around-comment': ['error', {
      // 要求在块级注释之前有一空行
      beforeBlockComment: true,
      // 允许注释出现在块语句的开始位置
      allowBlockStart: true,
      // 允许注释出现在块语句的结束位置
      allowBlockEnd: true,
      // 允许注释出现在对象字面量的开始位置
      allowObjectStart: true,
      // 允许注释出现在对象字面量的结束位置
      allowObjectEnd: true,
      // 允许注释出现在数组字面量的开始位置
      allowArrayStart: true,
      // 允许注释出现在数组字面量的结束位置
      allowArrayEnd: true,
      // 允许注释出现在类的开始位置
      allowClassStart: true,
      // 允许注释出现在类的结束位置
      allowClassEnd: true
    }],
    // 注释开始后要有空格
    'spaced-comment': ['error', 'always'],
    // 注释和代码在同一行时警告
    'no-inline-comments': 'warn',
    // 禁止使用连续的行注释，改为块注释，每行以*开头[忽略文档注释]
    'multiline-comment-style': ['off', 'bare-block'],

    /** end 注释 */

    // 在数组开括号后和闭括号前强制换行
    'array-bracket-newline': 'off',
    // 强制数组元素间出现换行
    'array-element-newline': 'off',
    // 它将大括号放在控制语句或声明语句同一行的位置
    'brace-style': 'error',
    // 驼峰命名
    camelcase: 'error',
    // 统一制定that为this的别名
    'consistent-this': ['error', 'that'],
    // 文件末尾强制一行空行
    'eol-last': 'error',
    // 要求函数名与赋值给它们的变量名或属性名相匹配
    'func-name-matching': 'off',
    // 函数表达式，是否需要函数名
    'func-names': ['warn', 'always'],
    // 强制 function 声明或表达式的一致性
    'func-style': 'off',
    // 强制在函数括号()内使用一致的换行
    'function-paren-newline': 'off',

    /* 标识符，小驼峰验证。。无法单独设置普通变量和const变量
       "id-match": ["error", "^[a-z]+([A-Za-z0-9]*)*$", {
       "properties": true,
       "onlyDeclarations": false,
       "ignoreDestructuring": false
       }],
       强制所有不包含双引号的 JSX 属性值使用双引号。 */
    'jsx-quotes': 'error',
    // 强制块语句的最大可嵌套深度为4
    'max-depth': 'error',
    // 强制函数定义中最大参数个数为3
    'max-params': 'error',
    // 如果表达式跨越多个行，则在三元表达式的操作数之间强制换行。
    'multiline-ternary': ['error', 'always-multiline'],
    // 构造函数名首字母大写
    'new-cap': ['error', {
      newIsCap: true,
      capIsNew: true,
      properties: true
    }],
    // 调用无参构造函数时带括号
    'new-parens': 'error',
    // 禁用 Array 构造函数
    'no-array-constructor': 'error',
    // 禁止 if 语句作为唯一语句出现在 else 语句块中
    'no-lonely-if': 'error',
    // 禁止空格和 tab 的混合缩进
    'no-mixed-spaces-and-tabs': 'error',
    // 禁止连续赋值
    'no-multi-assign': 'error',
    // 禁止使用嵌套的三元表达式 嵌套请改为if else
    'no-nested-ternary': 'error',
    // 禁止使用 Object 构造函数, 直接使用var myObject = {};
    'no-new-object': 'error',
    // 禁止使用特定的语法 with语句
    'no-restricted-syntax': [
      'error',
      {
        selector: 'WithStatement',
        message: 'With statement are not allowed.'
      }
    ],
    // 禁用 tab
    'no-tabs': 'error',
    // 禁止标识符中有悬空下划线 TODO
    'no-underscore-dangle': ['error', {
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true
    }],
    // 禁止可以表达为更简单结构的三元操作符，例如： answer === 1 ? true : false 可以改为 answer === 1
    'no-unneeded-ternary': 'error',
    // 单个变量声明
    'one-var': ['error', 'never'],
    // 尽可能地简化赋值操作，例如： a = a + 1; 简写为 a += 1;
    'operator-assignment': 'error',
    // 对象字面量属性名称不使用引号，数字属性需要引号
    'quote-props': ['error', 'as-needed', {
      unnecessary: true,
      numbers: true
    }],
    // 要求或禁止 Unicode 字节顺序标记 (BOM)
    'unicode-bom': ['error', 'never'],
    // 要求正则表达式被包裹起来 例如：(/foo/).test("bar");
    'wrap-regex': 'error',

    /** end 风格约定 */


    /** start es6 */
    // 箭头函数体大括号可以省略时，强制不使用它们
    'arrow-body-style': ['error', 'as-needed'],
    // 箭头函数的参数括号在可以省略括号的地方强制不使用括号；如果函数体使用了花括号，则参数需要括号。
    'arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: true
    }],
    // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    'no-confusing-arrow': ['error', {
      allowParens: false
    }],
    // 禁止重复模块导入，请合并
    'no-duplicate-imports': ['error', {
      includeExports: true
    }],
    // 禁止对象中使用不必要的计算属性
    'no-useless-computed-key': 'error',
    // 禁用不必要的构造函数
    'no-useless-constructor': 'error',
    // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    'no-useless-rename': 'error',
    // 禁止使用var变量
    'no-var': 'error',
    // 对象字面量简写语法
    'object-shorthand': ['error', 'always'],
    // 要求回调函数使用箭头函数
    'prefer-arrow-callback': 'off',
    // 值不会被修改的变量，使用const
    'prefer-const': 'error',
    // 要求使用剩余参数而不是 arguments。例如：function test(...args) {console.log(args);}
    'prefer-rest-params': 'error',
    // 建议使用模板字面量而非字符串连接
    'prefer-template': 'error',

    /** end es6 */


    /** start Vue eslint */

    // 缩进为2个空格
    'vue/script-indent': ['error', 2, {
      // 与script的缩进1个缩进
      baseIndent: 0,
      // case语句1个缩进
      switchCase: 1,
      ignores: []
    }],

    /* base
       在 <template> 中可以使用eslint的注释命令 */
    'vue/comment-directive': 'error',

    /* // 7.0.0 实验性规则，有可能删除。在<script setup="args">中查找变量
       'vue/experimental-script-setup-vars': 'error',
       变量在jsx中使用了不提示变量未使用 */
    'vue/jsx-uses-vars': 'error',

    /*
       // essential
       // 7.0.0 自定义事件名使用短横线命名
       'vue/custom-event-name-casing': 'error',
       // 7.0.0 禁止watch中使用箭头函数，绑定的this不是vue实例
       'vue/no-arrow-functions-in-watch': 'error',
       禁止在计算属性中使用异步操作 */
    'vue/no-async-in-computed-properties': 'error',

    /* // 7.0.0 禁止v-model使用自定义修饰符
       'vue/no-custom-modifiers-on-v-model': 'error',
       禁止相同的属性名 */
    'vue/no-dupe-keys': 'error',

    /* // 7.0.0 不允许同一个if else语句链中出现重复条件，检测不可达的分支
       'vue/no-dupe-v-else-if': 'error',
       禁止html相同的attributes */
    'vue/no-duplicate-attributes': 'error',

    /* // 7.0.0 检查模板中是否包含单个根元素
       'vue/no-multiple-template-root': 'error',
       // 7.0.0 禁止修改props
       'vue/no-mutating-props': 'error',
       检查模板中的语法错误 */
    'vue/no-parsing-error': 'error',
    // 禁止使用保留字段
    'vue/no-reserved-keys': 'error',
    // data属性必须为函数返回对象
    'vue/no-shared-component-data': 'error',
    // 禁止在计算属性中引入副作用代码（修改其它数据）
    'vue/no-side-effects-in-computed-properties': 'error',
    // 禁止在<template>上使用key属性
    'vue/no-template-key': 'error',
    // 禁止在<textarea>使用插值，请使用v-model
    'vue/no-textarea-mustache': 'error',
    // 禁止注册未使用的组件
    'vue/no-unused-components': 'error',
    // 禁止定义未使用的变量，包含v-for中定义的
    'vue/no-unused-vars': 'error',
    // 禁止v-if和v-for一起使用
    'vue/no-use-v-if-with-v-for': 'error',

    /* // 7.0.0 禁止v-for没有key属性
       'vue/no-v-for-template-key': 'error',
       // 7.0.0 禁止v-model指令使用参数
       'vue/no-v-model-argument': 'error',
       <component>必须使用v-bind指令设置is属性 */
    'vue/require-component-is': 'error',
    // prop属性类型必须使用js的原生对象，例如：String、Object
    'vue/require-prop-type-constructor': 'error',
    // render函数必须带return
    'vue/require-render-return': 'error',
    // v-for指令必须使用v-bind:key
    'vue/require-v-for-key': 'error',
    // 检查prop的类型和默认值是否匹配，数组和对象必须使用函数返回数据
    'vue/require-valid-default-prop': 'error',
    // 计算属性必须有返回值
    'vue/return-in-computed-property': 'error',
    // 标签上有多个v-on指令时，需要指定click.exact修饰符
    'vue/use-v-on-exact': 'error',
    // 检查root元素
    'vue/valid-template-root': 'error',

    /* // 7.0.0 检查.sync语法修饰
       'vue/valid-v-bind-sync': 'error',
       检查v-bind指令正确性（错误修饰符或不赋值） */
    'vue/valid-v-bind': 'error',
    // 检查v-cloak指令正确性
    'vue/valid-v-cloak': 'error',
    // 检查v-else-if指令正确性
    'vue/valid-v-else-if': 'error',
    'vue/valid-v-else': 'error',
    'vue/valid-v-for': 'error',
    'vue/valid-v-html': 'error',
    'vue/valid-v-if': 'error',
    'vue/valid-v-model': 'error',
    'vue/valid-v-on': 'error',
    'vue/valid-v-once': 'error',
    'vue/valid-v-pre': 'error',
    'vue/valid-v-show': 'error',

    /* // 7.0.0
       'vue/valid-v-slot': 'error',
       // 7.0.0
       'vue/valid-v-text': 'error', */

    /* // strongly-recommended
       强制模板中的属性使用短横线命名 */
    'vue/attribute-hyphenation': 'error',

    /* // 7.0.0 组件内部的名称强制使用大驼峰命名
       'vue/component-definition-name-casing': ['error', 'PascalCase'],
       标签的末尾>不换行 */
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never'
    }],
    // 标签的>前不使用空格
    'vue/html-closing-bracket-spacing': ['error', {
      // 开始标签
      startTag: 'never',
      // 结束标签
      endTag: 'never',
      // 自闭合标签
      selfClosingTag: 'always'
    }],
    // 必须要结束标签
    'vue/html-end-tags': 'error',
    // 保持html标签缩进为2个空格
    'vue/html-indent': 'error',
    // 标签属性值使用双引号
    'vue/html-quotes': 'error',
    // 不允许自闭合
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'always',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }],
    // 每行最大属性个数限制为1
    'vue/max-attributes-per-line': ['error', {
      'multiline': {
        'max': 1,
        'allowFirstLine': true
      }
    }],
    // 标签内容多行时，前后标签都换行
    'vue/multiline-html-element-content-newline': 'error',
    // 插值中保持空格
    'vue/mustache-interpolation-spacing': 'error',
    // 禁止多空格
    'vue/no-multi-spaces': 'error',
    // 禁止等号周围的括号
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    // 禁止在模板中声明覆盖变量
    'vue/no-template-shadow': 'off',

    /* // 7.0.0 一个文件一个组件
       'vue/one-component-per-file': 'error',
       prop名使用小驼峰命名 */
    'vue/prop-name-casing': 'error',
    // prop必须设置default值，除了Boolean
    'vue/require-default-prop': 'error',
    // prop必须要指定类型
    'vue/require-prop-types': 'error',
    // 强制单行元素换行
    'vue/singleline-html-element-content-newline': ['error', {
      // 没有属性值时忽略
      ignoreWhenNoAttributes: true,
      // 没有内容时，忽略
      ignoreWhenEmpty: true
      // 忽略所有行内元素
    }],
    // v-bind统一使用简写
    'vue/v-bind-style': 'error',
    // v-on统一使用简写
    'vue/v-on-style': 'error',

    /* // 7.0.0 v-slot简写
       'vue/v-slot-style': 'warn',

       // recommended
       元素的属性顺序 https://eslint.vuejs.org/rules/attributes-order.html */
    'vue/attributes-order': 'error',
    // // 7.0.0 组件的tag顺序
    'vue/component-tags-order': ['error', {
      order: ['template', 'script', 'style']
    }],

    /* // 7.0.0 无效的template
       'vue/no-lone-template': 'error',
       // 7.0.0 不允许给slot传递多个参数
       'vue/no-multiple-slot-args': 'warn',
       html指令警告 （防止xss） */
    'vue/no-v-html': 'warn',
    // 组件中属性的顺序（按推荐顺序）https://v3.vuejs.org/style-guide/#component-instance-options-order-recommended
    'vue/order-in-components': 'error',
    // 禁止在模板中使用this
    'vue/this-in-template': 'error',


    /* 扩展规则
       7.0.0 模板中的数组换行
       'vue/array-bracket-newline': 'error',
       // 7.0.0 模板中的数组空格
       'vue/array-bracket-spacing': 'error',
       模板中的箭头函数空格 */
    'vue/arrow-spacing': 'error',
    // 模板中的代码块空格
    'vue/block-spacing': 'error',
    // 模板中的大括号风格
    'vue/brace-style': 'error',
    // 驼峰命名
    'vue/camelcase': 'error',
    // 模板中禁止逗号拖尾
    'vue/comma-dangle': ['error', 'never'],

    /* // 7.0.0 模板中逗号空格
       'vue/comma-spacing': 'error',
       // 7.0.0 一致逗号样式
       'vue/comma-style': 'error',
       模板中点的换行 */
    'vue/dot-location': ['error', 'property'],

    /* 7.0.0 要求使用点号 对象属性访问使用点操作符
       'vue/dot-notation': 'error',
       等号=== !== */
    'vue/eqeqeq': 'error',

    /* // 7.0.0 模板中函数调用时函数名和开括号之间无空格
       'vue/func-call-spacing': ['error', 'never'],
       模板中象字面量的属性中键和值之间使用一致的间距 */
    'vue/key-spacing': 'error',
    // 模板中关键字的空格
    'vue/keyword-spacing': 'error',
    // 模板中的行长
    'vue/max-len': ['error', {
      code: 120,
      tabWidth: 2,
      // 忽略含有链接的行
      ignoreUrls: true,
      // 忽略包含模板字面量的行
      ignoreTemplateLiterals: true,
      // 忽略包含正则表达式的行
      ignoreRegExpLiterals: true
    }],

    /* 'vue/no-empty-pattern': 'off',
       // 7.0.0 模板中多余的圆括号
       'vue/no-extra-parens': 'off',
       无效的空格 */
    'vue/no-irregular-whitespace': 'error',
    // 禁用语法with
    'vue/no-restricted-syntax': [
      'error',
      {
        selector: 'WithStatement',
        message: 'With statement are not allowed.'
      }
    ],

    /* 7.0.0 禁止稀疏的数组 例如：[,,,]
       'vue/no-sparse-arrays': 'error',
       7.0.0 禁止没有必要的字符拼接
       'vue/no-useless-concat': 'error',
       // 7.0.0 模板中大括号内的换行
       'vue/object-curly-newline': 'error',
       模板中大括号内的空格 */
    'vue/object-curly-spacing': 'error',

    /* // 7.0.0 模板中对象属性不允许在同一行
       'vue/object-property-newline': ['error', {
         allowAllPropertiesOnSameLine: false
       }],
       // 7.0.0 模板中操作符换行时换行符在前
       'vue/operator-linebreak': ['error', 'before'],
       7.0.0 使用模板字面量而非字符串连接
       'vue/prefer-template': 'error',
       // 7.0.0 圆括号两边无空格
       'vue/space-in-parens': 'error',
       模板中 二元操作符两边的空格 */
    'vue/space-infix-ops': 'error',
    // 模板中 一元操作符两边的空格
    'vue/space-unary-ops': [
      'error',
      {
        // 单词类一元操作符后有空格，例如：new、delete、typeof、void、yield
        words: true,
        // 一元操作符前后无空格: -、+、--、++、!、!!
        nonwords: false
      }
    ],

    /* // 7.0.0 模板中字符串模板的大括号的空格
       'vue/template-curly-spacing': 'error', */

    /* 未分类
       // 7.0.0 标签换行
       'vue/block-tag-newline': 'error',
       模板中使用组件名要求使用短横线 */
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],

    /* // 7.0.0 模板中注释的换行
       'vue/html-comment-content-newline': 'error',
       // 7.0.0 模板中注释的空格
       'vue/html-comment-content-spacing': 'error',
       // 7.0.0 模板中注释的缩进
       'vue/html-comment-indent': 'error',
       7.0.0 检查组件名和文件名是否一致
       'match-component-file-name': ['error', {
         'extensions': ['vue'],
         'shouldMatchCase': false
       }],
       7.0.0 不允许在模板中使用裸字符串
       'vue/no-bare-strings-in-template': 'error',
       强制布尔类型的prop属性不要默认值 */
    'vue/no-boolean-default': 'off',

    /* 7.0.0 当使用v-bind='$attrs'时强制设置inheritAttrs 为false
       'vue/no-duplicate-attr-inheritance': 'error',
       7.0.0 禁止空的<template> <script> <style>
       'vue/no-empty-component-block': 'error',
       7.0.0
       'vue/no-multiple-objects-in-class': 'error',
       7.0.0
       'no-potential-component-option-typo': 'error',
       7.0.0
       'vue/no-reserved-component-names': 'error',
       7.0.0
       'vue/no-restricted-component-options': 'error',
       7.0.0
       'vue/no-restricted-static-attribute': 'error',
       7.0.0
       'vue/no-restricted-v-bind': 'error',
       7.0.0
       'vue/no-static-inline-styles': 'error',
       7.0.0
       'vue/no-template-target-blank': 'error',
       7.0.0
       'vue/no-unregistered-components': 'error',
       7.0.0
       'vue/no-unsupported-features': 'error',
       7.0.0
       'vue/no-unused-properties': 'error',
       7.0.0
       'vue/no-useless-mustaches': 'error',
       7.0.0 禁止不必要的v-bind
       'vue/no-useless-v-bind': 'error',
       两个块之间保留一个空行 */
    'vue/padding-line-between-blocks': 'error',
    // 直接导出组件
    'vue/require-direct-export': 'error',
    // 组件必须设置name属性(TODO 没有排除全局组件的)
    'vue/require-name-property': 'error',
    // 属性排序
    'vue/sort-keys': 'off',
    // 静态class的名称排序
    'vue/static-class-names-order': 'off',

    /* // 7.0.0 v-for使用in 操作符
    'vue/v-for-delimiter-style': 'error',
     强制或禁止v-on无参函数后面带括号 */
    'vue/v-on-function-call': 'off'

    /** end Vue eslint */
  },
  overrides: [
    {
      // vue文件使用了eslint-plugin-vue的script-indent规则，所以需要关闭eslint的缩进规则，避免冲突
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ]
};

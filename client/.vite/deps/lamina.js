import {
  require_prop_types,
  shallow,
  subscribeWithSelector,
  useDrag
} from "./chunk-2CSG5P47.js";
import {
  require_client,
  require_react_dom
} from "./chunk-RVWEW5R4.js";
import {
  _extends,
  create,
  extend
} from "./chunk-MBCVEDCU.js";
import {
  require_react
} from "./chunk-V4EFTLOS.js";
import {
  Color,
  Material,
  MathUtils,
  Matrix3,
  Matrix4,
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshPhongMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  MeshToonMaterial,
  Texture,
  TextureLoader,
  Vector2,
  Vector3,
  Vector4
} from "./chunk-6LVYPTPY.js";
import {
  __commonJS,
  __require,
  __toESM
} from "./chunk-OZI5HTJH.js";

// node_modules/glsl-tokenizer/lib/literals.js
var require_literals = __commonJS({
  "node_modules/glsl-tokenizer/lib/literals.js"(exports, module) {
    module.exports = [
      // current
      "precision",
      "highp",
      "mediump",
      "lowp",
      "attribute",
      "const",
      "uniform",
      "varying",
      "break",
      "continue",
      "do",
      "for",
      "while",
      "if",
      "else",
      "in",
      "out",
      "inout",
      "float",
      "int",
      "uint",
      "void",
      "bool",
      "true",
      "false",
      "discard",
      "return",
      "mat2",
      "mat3",
      "mat4",
      "vec2",
      "vec3",
      "vec4",
      "ivec2",
      "ivec3",
      "ivec4",
      "bvec2",
      "bvec3",
      "bvec4",
      "sampler1D",
      "sampler2D",
      "sampler3D",
      "samplerCube",
      "sampler1DShadow",
      "sampler2DShadow",
      "struct",
      "asm",
      "class",
      "union",
      "enum",
      "typedef",
      "template",
      "this",
      "packed",
      "goto",
      "switch",
      "default",
      "inline",
      "noinline",
      "volatile",
      "public",
      "static",
      "extern",
      "external",
      "interface",
      "long",
      "short",
      "double",
      "half",
      "fixed",
      "unsigned",
      "input",
      "output",
      "hvec2",
      "hvec3",
      "hvec4",
      "dvec2",
      "dvec3",
      "dvec4",
      "fvec2",
      "fvec3",
      "fvec4",
      "sampler2DRect",
      "sampler3DRect",
      "sampler2DRectShadow",
      "sizeof",
      "cast",
      "namespace",
      "using"
    ];
  }
});

// node_modules/glsl-tokenizer/lib/operators.js
var require_operators = __commonJS({
  "node_modules/glsl-tokenizer/lib/operators.js"(exports, module) {
    module.exports = [
      "<<=",
      ">>=",
      "++",
      "--",
      "<<",
      ">>",
      "<=",
      ">=",
      "==",
      "!=",
      "&&",
      "||",
      "+=",
      "-=",
      "*=",
      "/=",
      "%=",
      "&=",
      "^^",
      "^=",
      "|=",
      "(",
      ")",
      "[",
      "]",
      ".",
      "!",
      "~",
      "*",
      "/",
      "%",
      "+",
      "-",
      "<",
      ">",
      "&",
      "^",
      "|",
      "?",
      ":",
      "=",
      ",",
      ";",
      "{",
      "}"
    ];
  }
});

// node_modules/glsl-tokenizer/lib/builtins.js
var require_builtins = __commonJS({
  "node_modules/glsl-tokenizer/lib/builtins.js"(exports, module) {
    module.exports = [
      // Keep this list sorted
      "abs",
      "acos",
      "all",
      "any",
      "asin",
      "atan",
      "ceil",
      "clamp",
      "cos",
      "cross",
      "dFdx",
      "dFdy",
      "degrees",
      "distance",
      "dot",
      "equal",
      "exp",
      "exp2",
      "faceforward",
      "floor",
      "fract",
      "gl_BackColor",
      "gl_BackLightModelProduct",
      "gl_BackLightProduct",
      "gl_BackMaterial",
      "gl_BackSecondaryColor",
      "gl_ClipPlane",
      "gl_ClipVertex",
      "gl_Color",
      "gl_DepthRange",
      "gl_DepthRangeParameters",
      "gl_EyePlaneQ",
      "gl_EyePlaneR",
      "gl_EyePlaneS",
      "gl_EyePlaneT",
      "gl_Fog",
      "gl_FogCoord",
      "gl_FogFragCoord",
      "gl_FogParameters",
      "gl_FragColor",
      "gl_FragCoord",
      "gl_FragData",
      "gl_FragDepth",
      "gl_FragDepthEXT",
      "gl_FrontColor",
      "gl_FrontFacing",
      "gl_FrontLightModelProduct",
      "gl_FrontLightProduct",
      "gl_FrontMaterial",
      "gl_FrontSecondaryColor",
      "gl_LightModel",
      "gl_LightModelParameters",
      "gl_LightModelProducts",
      "gl_LightProducts",
      "gl_LightSource",
      "gl_LightSourceParameters",
      "gl_MaterialParameters",
      "gl_MaxClipPlanes",
      "gl_MaxCombinedTextureImageUnits",
      "gl_MaxDrawBuffers",
      "gl_MaxFragmentUniformComponents",
      "gl_MaxLights",
      "gl_MaxTextureCoords",
      "gl_MaxTextureImageUnits",
      "gl_MaxTextureUnits",
      "gl_MaxVaryingFloats",
      "gl_MaxVertexAttribs",
      "gl_MaxVertexTextureImageUnits",
      "gl_MaxVertexUniformComponents",
      "gl_ModelViewMatrix",
      "gl_ModelViewMatrixInverse",
      "gl_ModelViewMatrixInverseTranspose",
      "gl_ModelViewMatrixTranspose",
      "gl_ModelViewProjectionMatrix",
      "gl_ModelViewProjectionMatrixInverse",
      "gl_ModelViewProjectionMatrixInverseTranspose",
      "gl_ModelViewProjectionMatrixTranspose",
      "gl_MultiTexCoord0",
      "gl_MultiTexCoord1",
      "gl_MultiTexCoord2",
      "gl_MultiTexCoord3",
      "gl_MultiTexCoord4",
      "gl_MultiTexCoord5",
      "gl_MultiTexCoord6",
      "gl_MultiTexCoord7",
      "gl_Normal",
      "gl_NormalMatrix",
      "gl_NormalScale",
      "gl_ObjectPlaneQ",
      "gl_ObjectPlaneR",
      "gl_ObjectPlaneS",
      "gl_ObjectPlaneT",
      "gl_Point",
      "gl_PointCoord",
      "gl_PointParameters",
      "gl_PointSize",
      "gl_Position",
      "gl_ProjectionMatrix",
      "gl_ProjectionMatrixInverse",
      "gl_ProjectionMatrixInverseTranspose",
      "gl_ProjectionMatrixTranspose",
      "gl_SecondaryColor",
      "gl_TexCoord",
      "gl_TextureEnvColor",
      "gl_TextureMatrix",
      "gl_TextureMatrixInverse",
      "gl_TextureMatrixInverseTranspose",
      "gl_TextureMatrixTranspose",
      "gl_Vertex",
      "greaterThan",
      "greaterThanEqual",
      "inversesqrt",
      "length",
      "lessThan",
      "lessThanEqual",
      "log",
      "log2",
      "matrixCompMult",
      "max",
      "min",
      "mix",
      "mod",
      "normalize",
      "not",
      "notEqual",
      "pow",
      "radians",
      "reflect",
      "refract",
      "sign",
      "sin",
      "smoothstep",
      "sqrt",
      "step",
      "tan",
      "texture2D",
      "texture2DLod",
      "texture2DProj",
      "texture2DProjLod",
      "textureCube",
      "textureCubeLod",
      "texture2DLodEXT",
      "texture2DProjLodEXT",
      "textureCubeLodEXT",
      "texture2DGradEXT",
      "texture2DProjGradEXT",
      "textureCubeGradEXT"
    ];
  }
});

// node_modules/glsl-tokenizer/lib/literals-300es.js
var require_literals_300es = __commonJS({
  "node_modules/glsl-tokenizer/lib/literals-300es.js"(exports, module) {
    var v100 = require_literals();
    module.exports = v100.slice().concat([
      "layout",
      "centroid",
      "smooth",
      "case",
      "mat2x2",
      "mat2x3",
      "mat2x4",
      "mat3x2",
      "mat3x3",
      "mat3x4",
      "mat4x2",
      "mat4x3",
      "mat4x4",
      "uvec2",
      "uvec3",
      "uvec4",
      "samplerCubeShadow",
      "sampler2DArray",
      "sampler2DArrayShadow",
      "isampler2D",
      "isampler3D",
      "isamplerCube",
      "isampler2DArray",
      "usampler2D",
      "usampler3D",
      "usamplerCube",
      "usampler2DArray",
      "coherent",
      "restrict",
      "readonly",
      "writeonly",
      "resource",
      "atomic_uint",
      "noperspective",
      "patch",
      "sample",
      "subroutine",
      "common",
      "partition",
      "active",
      "filter",
      "image1D",
      "image2D",
      "image3D",
      "imageCube",
      "iimage1D",
      "iimage2D",
      "iimage3D",
      "iimageCube",
      "uimage1D",
      "uimage2D",
      "uimage3D",
      "uimageCube",
      "image1DArray",
      "image2DArray",
      "iimage1DArray",
      "iimage2DArray",
      "uimage1DArray",
      "uimage2DArray",
      "image1DShadow",
      "image2DShadow",
      "image1DArrayShadow",
      "image2DArrayShadow",
      "imageBuffer",
      "iimageBuffer",
      "uimageBuffer",
      "sampler1DArray",
      "sampler1DArrayShadow",
      "isampler1D",
      "isampler1DArray",
      "usampler1D",
      "usampler1DArray",
      "isampler2DRect",
      "usampler2DRect",
      "samplerBuffer",
      "isamplerBuffer",
      "usamplerBuffer",
      "sampler2DMS",
      "isampler2DMS",
      "usampler2DMS",
      "sampler2DMSArray",
      "isampler2DMSArray",
      "usampler2DMSArray"
    ]);
  }
});

// node_modules/glsl-tokenizer/lib/builtins-300es.js
var require_builtins_300es = __commonJS({
  "node_modules/glsl-tokenizer/lib/builtins-300es.js"(exports, module) {
    var v100 = require_builtins();
    v100 = v100.slice().filter(function(b5) {
      return !/^(gl\_|texture)/.test(b5);
    });
    module.exports = v100.concat([
      // the updated gl_ constants
      "gl_VertexID",
      "gl_InstanceID",
      "gl_Position",
      "gl_PointSize",
      "gl_FragCoord",
      "gl_FrontFacing",
      "gl_FragDepth",
      "gl_PointCoord",
      "gl_MaxVertexAttribs",
      "gl_MaxVertexUniformVectors",
      "gl_MaxVertexOutputVectors",
      "gl_MaxFragmentInputVectors",
      "gl_MaxVertexTextureImageUnits",
      "gl_MaxCombinedTextureImageUnits",
      "gl_MaxTextureImageUnits",
      "gl_MaxFragmentUniformVectors",
      "gl_MaxDrawBuffers",
      "gl_MinProgramTexelOffset",
      "gl_MaxProgramTexelOffset",
      "gl_DepthRangeParameters",
      "gl_DepthRange",
      "trunc",
      "round",
      "roundEven",
      "isnan",
      "isinf",
      "floatBitsToInt",
      "floatBitsToUint",
      "intBitsToFloat",
      "uintBitsToFloat",
      "packSnorm2x16",
      "unpackSnorm2x16",
      "packUnorm2x16",
      "unpackUnorm2x16",
      "packHalf2x16",
      "unpackHalf2x16",
      "outerProduct",
      "transpose",
      "determinant",
      "inverse",
      "texture",
      "textureSize",
      "textureProj",
      "textureLod",
      "textureOffset",
      "texelFetch",
      "texelFetchOffset",
      "textureProjOffset",
      "textureLodOffset",
      "textureProjLod",
      "textureProjLodOffset",
      "textureGrad",
      "textureGradOffset",
      "textureProjGrad",
      "textureProjGradOffset"
    ]);
  }
});

// node_modules/glsl-tokenizer/index.js
var require_glsl_tokenizer = __commonJS({
  "node_modules/glsl-tokenizer/index.js"(exports, module) {
    module.exports = tokenize3;
    var literals100 = require_literals();
    var operators = require_operators();
    var builtins100 = require_builtins();
    var literals300es = require_literals_300es();
    var builtins300es = require_builtins_300es();
    var NORMAL = 999;
    var TOKEN = 9999;
    var BLOCK_COMMENT = 0;
    var LINE_COMMENT = 1;
    var PREPROCESSOR = 2;
    var OPERATOR = 3;
    var INTEGER = 4;
    var FLOAT = 5;
    var IDENT = 6;
    var BUILTIN = 7;
    var KEYWORD = 8;
    var WHITESPACE = 9;
    var EOF = 10;
    var HEX = 11;
    var map = [
      "block-comment",
      "line-comment",
      "preprocessor",
      "operator",
      "integer",
      "float",
      "ident",
      "builtin",
      "keyword",
      "whitespace",
      "eof",
      "integer"
    ];
    function tokenize3(opt) {
      var i6 = 0, total = 0, mode = NORMAL, c6, last, content = [], tokens = [], token_idx = 0, token_offs = 0, line = 1, col = 0, start = 0, isnum = false, isoperator = false, input = "", len;
      opt = opt || {};
      var allBuiltins = builtins100;
      var allLiterals = literals100;
      if (opt.version === "300 es") {
        allBuiltins = builtins300es;
        allLiterals = literals300es;
      }
      var builtinsDict = {}, literalsDict = {};
      for (var i6 = 0; i6 < allBuiltins.length; i6++) {
        builtinsDict[allBuiltins[i6]] = true;
      }
      for (var i6 = 0; i6 < allLiterals.length; i6++) {
        literalsDict[allLiterals[i6]] = true;
      }
      return function(data) {
        tokens = [];
        if (data !== null)
          return write(data);
        return end();
      };
      function token(data) {
        if (data.length) {
          tokens.push({
            type: map[mode],
            data,
            position: start,
            line,
            column: col
          });
        }
      }
      function write(chunk) {
        i6 = 0;
        if (chunk.toString)
          chunk = chunk.toString();
        input += chunk.replace(/\r\n/g, "\n");
        len = input.length;
        var last2;
        while (c6 = input[i6], i6 < len) {
          last2 = i6;
          switch (mode) {
            case BLOCK_COMMENT:
              i6 = block_comment();
              break;
            case LINE_COMMENT:
              i6 = line_comment();
              break;
            case PREPROCESSOR:
              i6 = preprocessor();
              break;
            case OPERATOR:
              i6 = operator();
              break;
            case INTEGER:
              i6 = integer();
              break;
            case HEX:
              i6 = hex();
              break;
            case FLOAT:
              i6 = decimal();
              break;
            case TOKEN:
              i6 = readtoken();
              break;
            case WHITESPACE:
              i6 = whitespace();
              break;
            case NORMAL:
              i6 = normal();
              break;
          }
          if (last2 !== i6) {
            switch (input[last2]) {
              case "\n":
                col = 0;
                ++line;
                break;
              default:
                ++col;
                break;
            }
          }
        }
        total += i6;
        input = input.slice(i6);
        return tokens;
      }
      function end(chunk) {
        if (content.length) {
          token(content.join(""));
        }
        mode = EOF;
        token("(eof)");
        return tokens;
      }
      function normal() {
        content = content.length ? [] : content;
        if (last === "/" && c6 === "*") {
          start = total + i6 - 1;
          mode = BLOCK_COMMENT;
          last = c6;
          return i6 + 1;
        }
        if (last === "/" && c6 === "/") {
          start = total + i6 - 1;
          mode = LINE_COMMENT;
          last = c6;
          return i6 + 1;
        }
        if (c6 === "#") {
          mode = PREPROCESSOR;
          start = total + i6;
          return i6;
        }
        if (/\s/.test(c6)) {
          mode = WHITESPACE;
          start = total + i6;
          return i6;
        }
        isnum = /\d/.test(c6);
        isoperator = /[^\w_]/.test(c6);
        start = total + i6;
        mode = isnum ? INTEGER : isoperator ? OPERATOR : TOKEN;
        return i6;
      }
      function whitespace() {
        if (/[^\s]/g.test(c6)) {
          token(content.join(""));
          mode = NORMAL;
          return i6;
        }
        content.push(c6);
        last = c6;
        return i6 + 1;
      }
      function preprocessor() {
        if ((c6 === "\r" || c6 === "\n") && last !== "\\") {
          token(content.join(""));
          mode = NORMAL;
          return i6;
        }
        content.push(c6);
        last = c6;
        return i6 + 1;
      }
      function line_comment() {
        return preprocessor();
      }
      function block_comment() {
        if (c6 === "/" && last === "*") {
          content.push(c6);
          token(content.join(""));
          mode = NORMAL;
          return i6 + 1;
        }
        content.push(c6);
        last = c6;
        return i6 + 1;
      }
      function operator() {
        if (last === "." && /\d/.test(c6)) {
          mode = FLOAT;
          return i6;
        }
        if (last === "/" && c6 === "*") {
          mode = BLOCK_COMMENT;
          return i6;
        }
        if (last === "/" && c6 === "/") {
          mode = LINE_COMMENT;
          return i6;
        }
        if (c6 === "." && content.length) {
          while (determine_operator(content))
            ;
          mode = FLOAT;
          return i6;
        }
        if (c6 === ";" || c6 === ")" || c6 === "(") {
          if (content.length)
            while (determine_operator(content))
              ;
          token(c6);
          mode = NORMAL;
          return i6 + 1;
        }
        var is_composite_operator = content.length === 2 && c6 !== "=";
        if (/[\w_\d\s]/.test(c6) || is_composite_operator) {
          while (determine_operator(content))
            ;
          mode = NORMAL;
          return i6;
        }
        content.push(c6);
        last = c6;
        return i6 + 1;
      }
      function determine_operator(buf) {
        var j3 = 0, idx, res;
        do {
          idx = operators.indexOf(buf.slice(0, buf.length + j3).join(""));
          res = operators[idx];
          if (idx === -1) {
            if (j3-- + buf.length > 0)
              continue;
            res = buf.slice(0, 1).join("");
          }
          token(res);
          start += res.length;
          content = content.slice(res.length);
          return content.length;
        } while (1);
      }
      function hex() {
        if (/[^a-fA-F0-9]/.test(c6)) {
          token(content.join(""));
          mode = NORMAL;
          return i6;
        }
        content.push(c6);
        last = c6;
        return i6 + 1;
      }
      function integer() {
        if (c6 === ".") {
          content.push(c6);
          mode = FLOAT;
          last = c6;
          return i6 + 1;
        }
        if (/[eE]/.test(c6)) {
          content.push(c6);
          mode = FLOAT;
          last = c6;
          return i6 + 1;
        }
        if (c6 === "x" && content.length === 1 && content[0] === "0") {
          mode = HEX;
          content.push(c6);
          last = c6;
          return i6 + 1;
        }
        if (/[^\d]/.test(c6)) {
          token(content.join(""));
          mode = NORMAL;
          return i6;
        }
        content.push(c6);
        last = c6;
        return i6 + 1;
      }
      function decimal() {
        if (c6 === "f") {
          content.push(c6);
          last = c6;
          i6 += 1;
        }
        if (/[eE]/.test(c6)) {
          content.push(c6);
          last = c6;
          return i6 + 1;
        }
        if ((c6 === "-" || c6 === "+") && /[eE]/.test(last)) {
          content.push(c6);
          last = c6;
          return i6 + 1;
        }
        if (/[^\d]/.test(c6)) {
          token(content.join(""));
          mode = NORMAL;
          return i6;
        }
        content.push(c6);
        last = c6;
        return i6 + 1;
      }
      function readtoken() {
        if (/[^\d\w_]/.test(c6)) {
          var contentstr = content.join("");
          if (literalsDict[contentstr]) {
            mode = KEYWORD;
          } else if (builtinsDict[contentstr]) {
            mode = BUILTIN;
          } else {
            mode = IDENT;
          }
          token(content.join(""));
          mode = NORMAL;
          return i6;
        }
        content.push(c6);
        last = c6;
        return i6 + 1;
      }
    }
  }
});

// node_modules/glsl-tokenizer/string.js
var require_string = __commonJS({
  "node_modules/glsl-tokenizer/string.js"(exports, module) {
    var tokenize3 = require_glsl_tokenizer();
    module.exports = tokenizeString;
    function tokenizeString(str, opt) {
      var generator = tokenize3(opt);
      var tokens = [];
      tokens = tokens.concat(generator(str));
      tokens = tokens.concat(generator(null));
      return tokens;
    }
  }
});

// node_modules/glsl-token-depth/index.js
var require_glsl_token_depth = __commonJS({
  "node_modules/glsl-token-depth/index.js"(exports, module) {
    module.exports = getTokenDepth;
    function getTokenDepth(tokens) {
      var loop = false;
      var depth = 0;
      for (var i6 = 0; i6 < tokens.length; i6++) {
        loop = loop || tokens[i6].type === "keyword" && tokens[i6].data === "for";
        switch (tokens[i6].data) {
          case "(":
            tokens[i6].depth = loop ? depth++ : depth;
            break;
          case "{":
            tokens[i6].depth = loop ? depth : depth++;
            loop = false;
            break;
          case "}":
            tokens[i6].depth = --depth;
            break;
          default:
            tokens[i6].depth = depth;
        }
      }
      for (var i6 = 0; i6 < tokens.length; i6++) {
        var token = tokens[i6];
        var index = i6 + 1;
        if (token.type !== "ident" && token.type !== "keyword")
          continue;
        skipArrayArguments();
        if (tokens[index].type !== "ident")
          continue;
        skipArrayArguments();
        index++;
        if (tokens[index].data !== "(")
          continue;
        while (tokens[index] && tokens[index].data !== ";" && tokens[index].data !== "{") {
          tokens[index++].depth++;
        }
        if (tokens[index] && tokens[index].data === "{")
          tokens[index].depth++;
      }
      return tokens;
      function skipArrayArguments() {
        while (tokens[index] && (tokens[index].type === "whitespace" || tokens[index].data === "[" || tokens[index].data === "]" || tokens[index].data === "integer"))
          index++;
      }
    }
  }
});

// node_modules/glsl-token-scope/index.js
var require_glsl_token_scope = __commonJS({
  "node_modules/glsl-token-scope/index.js"(exports, module) {
    module.exports = tokenScope;
    function tokenScope(tokens) {
      var stack = [0];
      var inc = stack[0];
      var ldepth = 0;
      if (!tokens || !tokens.length)
        return tokens;
      if (!("depth" in tokens[0])) {
        throw new Error("glsl-token-scope: No scope depth defined on tokens! Use glsl-token-depth on these tokens first");
      }
      for (var i6 = 0; i6 < tokens.length; i6++) {
        var token = tokens[i6];
        var depth = token.depth;
        if (depth > ldepth) {
          stack.push(++inc);
        } else if (depth < ldepth) {
          stack.splice(-1, 1);
        }
        token.scope = stack[stack.length - 1];
        token.stack = stack.slice();
        ldepth = token.depth;
      }
      return tokens;
    }
  }
});

// node_modules/glsl-token-properties/index.js
var require_glsl_token_properties = __commonJS({
  "node_modules/glsl-token-properties/index.js"(exports, module) {
    module.exports = properties;
    function properties(tokens) {
      for (var i6 = 0; i6 < tokens.length; i6++) {
        var token = tokens[i6];
        token.property = false;
        if (token.type !== "ident")
          continue;
        var j3 = i6;
        while (tokens[--j3] && tokens[j3].type === "whitespace")
          ;
        if (!tokens[j3])
          continue;
        if (tokens[j3].type !== "operator")
          continue;
        if (tokens[j3].data !== ".")
          continue;
        token.property = true;
      }
      return tokens;
    }
  }
});

// node_modules/glsl-token-assignments/assignments.js
var require_assignments = __commonJS({
  "node_modules/glsl-token-assignments/assignments.js"(exports, module) {
    module.exports = {
      "<<=": true,
      ">>=": true,
      "++": true,
      "--": true,
      "+=": true,
      "-=": true,
      "*=": true,
      "/=": true,
      "%=": true,
      "&=": true,
      "^=": true,
      "|=": true,
      "=": true
    };
  }
});

// node_modules/glsl-token-assignments/ignored.js
var require_ignored = __commonJS({
  "node_modules/glsl-token-assignments/ignored.js"(exports, module) {
    module.exports = {
      "precision": true,
      "highp": true,
      "mediump": true,
      "lowp": true,
      "attribute": true,
      "const": true,
      "uniform": true,
      "varying": true,
      "break": true,
      "continue": true,
      "do": true,
      "for": true,
      "while": true,
      "if": true,
      "else": true,
      "in": true,
      "out": true,
      "inout": true,
      "true": true,
      "false": true,
      "return": true
    };
  }
});

// node_modules/glsl-token-assignments/index.js
var require_glsl_token_assignments = __commonJS({
  "node_modules/glsl-token-assignments/index.js"(exports, module) {
    var assignments = require_assignments();
    var ignoredKeywords = require_ignored();
    module.exports = assigns;
    function assigns(tokens) {
      var idx = 0;
      for (var i6 = 0; i6 < tokens.length; i6++) {
        var token = tokens[i6];
        var type = token.type;
        token.assignment = false;
        token.declaration = false;
        if (type !== "ident" && type !== "builtin")
          continue;
        idx = i6 + 1;
        skipWhitespace(1);
        if (tokens[idx].type !== "operator")
          continue;
        if (!assignments[tokens[idx].data])
          continue;
        token.assignment = true;
      }
      for (var i6 = 0; i6 < tokens.length; i6++) {
        var datatype = tokens[i6];
        var type = datatype.type;
        var data = datatype.data;
        datatype.declaration = false;
        if (type === "keyword") {
          if (ignoredKeywords[data])
            continue;
        } else if (type !== "ident")
          continue;
        idx = i6 + 1;
        skipArrayDimensions();
        if (tokens[idx].type !== "ident")
          continue;
        tokens[idx++].declaration = true;
        skipArrayDimensions();
        if (tokens[idx].data === "(") {
          idx++;
          skipWhitespace(1);
          while (tokens[idx] && tokens[idx].data !== ")") {
            if (tokens[idx].type !== "keyword" && tokens[idx].type !== "ident")
              break;
            idx++;
            skipWhitespace(1);
            if (tokens[idx].type !== "ident")
              continue;
            tokens[idx++].declaration = true;
            skipWhitespace(1);
            skipArrayDimensions();
            skipWhitespace(1);
            if (tokens[idx].data !== ",")
              continue;
            idx++;
            skipWhitespace(1);
          }
          i6 = idx;
          continue;
        }
        while (tokens[idx] && tokens[idx].data !== ";") {
          if (tokens[idx].data === ",") {
            idx++;
            skipWhitespace(1);
            if (tokens[idx].declaration = tokens[idx].type === "ident")
              idx++;
          } else {
            skipWhitespace(1);
            skipParens();
            skipWhitespace(1);
            idx++;
          }
        }
        i6 = idx;
      }
      for (var i6 = 0; i6 < tokens.length; i6++) {
        var token = tokens[i6];
        if (token.type !== "keyword")
          continue;
        if (token.data !== "struct")
          continue;
        idx = i6 + 1;
        skipWhitespace(1);
        if (tokens[idx].type !== "ident")
          continue;
        idx++;
        skipWhitespace(1);
        if (tokens[idx++].data !== "{")
          continue;
        skipWhitespace(1);
        while (tokens[idx].type === "ident" || tokens[idx].type === "keyword") {
          do {
            idx++;
            skipWhitespace(1);
            tokens[idx].structMember = true;
            tokens[idx].declaration = false;
            idx++;
            skipArrayDimensions();
          } while (tokens[idx].data === ",");
          if (tokens[idx].data === ";")
            idx++;
          skipWhitespace();
        }
        idx++;
        skipWhitespace(1);
        if (tokens[idx].type !== "ident")
          continue;
        tokens[idx].declaration = true;
        skipWhitespace(1);
        while (tokens[++idx].data === ",") {
          skipWhitespace(1);
          idx++;
          skipWhitespace(1);
          if (tokens[idx].type === "ident")
            tokens[idx].declaration = true;
          skipWhitespace(1);
        }
      }
      return tokens;
      function skipWhitespace(n6) {
        while (tokens[idx] && tokens[idx].type === "whitespace")
          idx++;
      }
      function skipArrayDimensions() {
        while (tokens[idx] && (tokens[idx].type === "integer" || tokens[idx].data === "[" || tokens[idx].data === "]" || tokens[idx].type === "whitespace"))
          idx++;
      }
      function skipParens() {
        if (!tokens[idx])
          return;
        if (tokens[idx].data !== "(")
          return;
        var depth = 0;
        var a5 = idx;
        do {
          if (tokens[idx].data === ";")
            break;
          if (tokens[idx].data === "(")
            depth++;
          if (tokens[idx].data === ")")
            depth--;
        } while (depth && tokens[++idx]);
      }
    }
  }
});

// node_modules/glsl-token-descope/index.js
var require_glsl_token_descope = __commonJS({
  "node_modules/glsl-token-descope/index.js"(exports, module) {
    module.exports = glslTokenDescope;
    function glslTokenDescope(tokens, rename) {
      require_glsl_token_depth()(tokens);
      require_glsl_token_scope()(tokens);
      require_glsl_token_properties()(tokens);
      require_glsl_token_assignments()(tokens);
      var scope = getScope(tokens);
      var renamer = rename || defaultRenamer();
      var map = {};
      for (var i6 = 0; i6 < tokens.length; i6++) {
        var token = tokens[i6];
        var stack = token.stack;
        var name = token.data;
        token.descoped = false;
        if (token.type !== "ident")
          continue;
        if (token.property)
          continue;
        if (token.structMember)
          continue;
        var bound = false;
        for (var j3 = stack.length - 1; j3 >= 0; j3--) {
          var s6 = scope[stack[j3]];
          if (!s6)
            continue;
          if (!s6[name])
            continue;
          bound = true;
          if (j3)
            break;
          token.descoped = token.data;
          token.data = map[name] = map[name] || renamer(name, token) || token.data;
        }
        if (!bound) {
          token.descoped = token.data;
          token.data = map[name] = map[name] || renamer(name, token) || token.data;
        }
      }
      return tokens;
    }
    function defaultRenamer() {
      var k5 = 0;
      return function rename(name) {
        return name + "_" + (k5++).toString(36);
      };
    }
    function getScope(tokens) {
      var scope = {};
      for (var i6 = 0; i6 < tokens.length; i6++) {
        var token = tokens[i6];
        if (token.declaration) {
          scope[token.scope] = scope[token.scope] || {};
          scope[token.scope][token.data] = token;
        }
      }
      return scope;
    }
  }
});

// node_modules/glsl-token-string/index.js
var require_glsl_token_string = __commonJS({
  "node_modules/glsl-token-string/index.js"(exports, module) {
    module.exports = toString;
    function toString(tokens) {
      var output = [];
      for (var i6 = 0; i6 < tokens.length; i6++) {
        if (tokens[i6].type === "eof")
          continue;
        output.push(tokens[i6].data);
      }
      return output.join("");
    }
  }
});

// node_modules/glsl-token-functions/index.js
var require_glsl_token_functions = __commonJS({
  "node_modules/glsl-token-functions/index.js"(exports, module) {
    module.exports = functions;
    function functions(tokens) {
      var returnType = null;
      var defnName = null;
      var braceDepth = 0;
      var braceStart = 0;
      var defnStart = 0;
      var argFinish = 0;
      var argStart = 0;
      var output = [];
      var i6, j3, token;
      for (i6 = 0, j3; i6 < tokens.length; i6++) {
        token = tokens[i6];
        if (token.data === "{") {
          if (braceDepth && braceDepth++)
            continue;
          j3 = findPrevious(i6, findOp(")"), findOp());
          if (j3 < 0)
            continue;
          argFinish = j3;
          j3 = findPrevious(j3, findOp("("), findOp(")"));
          if (j3 < 0)
            continue;
          argStart = j3;
          j3 = findPrevious(j3, findGlyph);
          if (j3 < 0)
            continue;
          if (tokens[j3].type !== "ident")
            continue;
          defnName = tokens[j3].data;
          j3 = findPrevious(j3, findGlyph);
          if (j3 < 0)
            continue;
          braceDepth = 1;
          braceStart = i6;
          returnType = tokens[j3].data;
          defnStart = j3;
          var k5 = findPrevious(j3, findGlyph);
          switch (tokens[k5] && tokens[k5].data) {
            case "lowp":
            case "highp":
            case "mediump":
              defnStart = k5;
          }
        } else if (braceDepth && token.data === "}") {
          if (--braceDepth)
            continue;
          output.push({
            name: defnName,
            type: returnType,
            body: [braceStart + 1, i6],
            args: [argStart, argFinish + 1],
            outer: [defnStart, i6 + 1]
          });
        }
      }
      for (i6 = 0; i6 < tokens.length; i6++) {
        token = tokens[i6];
        if (token.data === ";") {
          j3 = findPrevious(i6, findOp(")"), findOp());
          if (j3 < 0)
            continue;
          argFinish = j3;
          j3 = findPrevious(j3, findOp("("), findOp(")"));
          if (j3 < 0)
            continue;
          argStart = j3;
          j3 = findPrevious(j3, findGlyph);
          if (j3 < 0)
            continue;
          if (tokens[j3].type !== "ident")
            continue;
          defnName = tokens[j3].data;
          j3 = findPrevious(j3, findGlyph);
          if (j3 < 0)
            continue;
          if (tokens[j3].type === "operator")
            continue;
          if (tokens[j3].data === "return")
            continue;
          returnType = tokens[j3].data;
          output.push({
            name: defnName,
            type: returnType,
            body: false,
            args: [argStart, argFinish + 1],
            outer: [j3, i6 + 1]
          });
        }
      }
      return output.sort(function(a5, b5) {
        return a5.outer[0] - b5.outer[0];
      });
      function findPrevious(start, match, bail) {
        for (var i7 = start - 1; i7 >= 0; i7--) {
          if (match(tokens[i7]))
            return i7;
          if (bail && bail(tokens[i7]))
            return -1;
        }
        return -1;
      }
    }
    function findOp(data) {
      return function(token) {
        return token.type === "operator" && (!data || token.data === data);
      };
    }
    function findGlyph(token) {
      return token.type !== "whitespace";
    }
  }
});

// node_modules/object-hash/dist/object_hash.js
var require_object_hash = __commonJS({
  "node_modules/object-hash/dist/object_hash.js"(exports, module) {
    !function(e12) {
      var t12;
      "object" == typeof exports ? module.exports = e12() : "function" == typeof define && define.amd ? define(e12) : ("undefined" != typeof window ? t12 = window : "undefined" != typeof global ? t12 = global : "undefined" != typeof self && (t12 = self), t12.objectHash = e12());
    }(function() {
      return function r14(o9, i6, u5) {
        function s6(n6, e13) {
          if (!i6[n6]) {
            if (!o9[n6]) {
              var t12 = "function" == typeof __require && __require;
              if (!e13 && t12)
                return t12(n6, true);
              if (a5)
                return a5(n6, true);
              throw new Error("Cannot find module '" + n6 + "'");
            }
            e13 = i6[n6] = { exports: {} };
            o9[n6][0].call(e13.exports, function(e14) {
              var t13 = o9[n6][1][e14];
              return s6(t13 || e14);
            }, e13, e13.exports, r14, o9, i6, u5);
          }
          return i6[n6].exports;
        }
        for (var a5 = "function" == typeof __require && __require, e12 = 0; e12 < u5.length; e12++)
          s6(u5[e12]);
        return s6;
      }({ 1: [function(w4, b5, m5) {
        !function(e12, n6, s6, c6, d5, h5, p5, g5, y5) {
          "use strict";
          var r14 = w4("crypto");
          function t12(e13, t13) {
            t13 = u5(e13, t13);
            var n7;
            return void 0 === (n7 = "passthrough" !== t13.algorithm ? r14.createHash(t13.algorithm) : new l6()).write && (n7.write = n7.update, n7.end = n7.update), f5(t13, n7).dispatch(e13), n7.update || n7.end(""), n7.digest ? n7.digest("buffer" === t13.encoding ? void 0 : t13.encoding) : (e13 = n7.read(), "buffer" !== t13.encoding ? e13.toString(t13.encoding) : e13);
          }
          (m5 = b5.exports = t12).sha1 = function(e13) {
            return t12(e13);
          }, m5.keys = function(e13) {
            return t12(e13, { excludeValues: true, algorithm: "sha1", encoding: "hex" });
          }, m5.MD5 = function(e13) {
            return t12(e13, { algorithm: "md5", encoding: "hex" });
          }, m5.keysMD5 = function(e13) {
            return t12(e13, { algorithm: "md5", encoding: "hex", excludeValues: true });
          };
          var o9 = r14.getHashes ? r14.getHashes().slice() : ["sha1", "md5"], i6 = (o9.push("passthrough"), ["buffer", "hex", "binary", "base64"]);
          function u5(e13, t13) {
            var n7 = {};
            if (n7.algorithm = (t13 = t13 || {}).algorithm || "sha1", n7.encoding = t13.encoding || "hex", n7.excludeValues = !!t13.excludeValues, n7.algorithm = n7.algorithm.toLowerCase(), n7.encoding = n7.encoding.toLowerCase(), n7.ignoreUnknown = true === t13.ignoreUnknown, n7.respectType = false !== t13.respectType, n7.respectFunctionNames = false !== t13.respectFunctionNames, n7.respectFunctionProperties = false !== t13.respectFunctionProperties, n7.unorderedArrays = true === t13.unorderedArrays, n7.unorderedSets = false !== t13.unorderedSets, n7.unorderedObjects = false !== t13.unorderedObjects, n7.replacer = t13.replacer || void 0, n7.excludeKeys = t13.excludeKeys || void 0, void 0 === e13)
              throw new Error("Object argument required.");
            for (var r15 = 0; r15 < o9.length; ++r15)
              o9[r15].toLowerCase() === n7.algorithm.toLowerCase() && (n7.algorithm = o9[r15]);
            if (-1 === o9.indexOf(n7.algorithm))
              throw new Error('Algorithm "' + n7.algorithm + '"  not supported. supported values: ' + o9.join(", "));
            if (-1 === i6.indexOf(n7.encoding) && "passthrough" !== n7.algorithm)
              throw new Error('Encoding "' + n7.encoding + '"  not supported. supported values: ' + i6.join(", "));
            return n7;
          }
          function a5(e13) {
            if ("function" == typeof e13)
              return null != /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e13));
          }
          function f5(o10, t13, i7) {
            i7 = i7 || [];
            function u6(e13) {
              return t13.update ? t13.update(e13, "utf8") : t13.write(e13, "utf8");
            }
            return { dispatch: function(e13) {
              return this["_" + (null === (e13 = o10.replacer ? o10.replacer(e13) : e13) ? "null" : typeof e13)](e13);
            }, _object: function(t14) {
              var n7, e13 = Object.prototype.toString.call(t14), r15 = /\[object (.*)\]/i.exec(e13);
              r15 = (r15 = r15 ? r15[1] : "unknown:[" + e13 + "]").toLowerCase();
              if (0 <= (e13 = i7.indexOf(t14)))
                return this.dispatch("[CIRCULAR:" + e13 + "]");
              if (i7.push(t14), void 0 !== s6 && s6.isBuffer && s6.isBuffer(t14))
                return u6("buffer:"), u6(t14);
              if ("object" === r15 || "function" === r15 || "asyncfunction" === r15)
                return e13 = Object.keys(t14), o10.unorderedObjects && (e13 = e13.sort()), false === o10.respectType || a5(t14) || e13.splice(0, 0, "prototype", "__proto__", "constructor"), o10.excludeKeys && (e13 = e13.filter(function(e14) {
                  return !o10.excludeKeys(e14);
                })), u6("object:" + e13.length + ":"), n7 = this, e13.forEach(function(e14) {
                  n7.dispatch(e14), u6(":"), o10.excludeValues || n7.dispatch(t14[e14]), u6(",");
                });
              if (!this["_" + r15]) {
                if (o10.ignoreUnknown)
                  return u6("[" + r15 + "]");
                throw new Error('Unknown object type "' + r15 + '"');
              }
              this["_" + r15](t14);
            }, _array: function(e13, t14) {
              t14 = void 0 !== t14 ? t14 : false !== o10.unorderedArrays;
              var n7 = this;
              if (u6("array:" + e13.length + ":"), !t14 || e13.length <= 1)
                return e13.forEach(function(e14) {
                  return n7.dispatch(e14);
                });
              var r15 = [], t14 = e13.map(function(e14) {
                var t15 = new l6(), n8 = i7.slice();
                return f5(o10, t15, n8).dispatch(e14), r15 = r15.concat(n8.slice(i7.length)), t15.read().toString();
              });
              return i7 = i7.concat(r15), t14.sort(), this._array(t14, false);
            }, _date: function(e13) {
              return u6("date:" + e13.toJSON());
            }, _symbol: function(e13) {
              return u6("symbol:" + e13.toString());
            }, _error: function(e13) {
              return u6("error:" + e13.toString());
            }, _boolean: function(e13) {
              return u6("bool:" + e13.toString());
            }, _string: function(e13) {
              u6("string:" + e13.length + ":"), u6(e13.toString());
            }, _function: function(e13) {
              u6("fn:"), a5(e13) ? this.dispatch("[native]") : this.dispatch(e13.toString()), false !== o10.respectFunctionNames && this.dispatch("function-name:" + String(e13.name)), o10.respectFunctionProperties && this._object(e13);
            }, _number: function(e13) {
              return u6("number:" + e13.toString());
            }, _xml: function(e13) {
              return u6("xml:" + e13.toString());
            }, _null: function() {
              return u6("Null");
            }, _undefined: function() {
              return u6("Undefined");
            }, _regexp: function(e13) {
              return u6("regex:" + e13.toString());
            }, _uint8array: function(e13) {
              return u6("uint8array:"), this.dispatch(Array.prototype.slice.call(e13));
            }, _uint8clampedarray: function(e13) {
              return u6("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(e13));
            }, _int8array: function(e13) {
              return u6("int8array:"), this.dispatch(Array.prototype.slice.call(e13));
            }, _uint16array: function(e13) {
              return u6("uint16array:"), this.dispatch(Array.prototype.slice.call(e13));
            }, _int16array: function(e13) {
              return u6("int16array:"), this.dispatch(Array.prototype.slice.call(e13));
            }, _uint32array: function(e13) {
              return u6("uint32array:"), this.dispatch(Array.prototype.slice.call(e13));
            }, _int32array: function(e13) {
              return u6("int32array:"), this.dispatch(Array.prototype.slice.call(e13));
            }, _float32array: function(e13) {
              return u6("float32array:"), this.dispatch(Array.prototype.slice.call(e13));
            }, _float64array: function(e13) {
              return u6("float64array:"), this.dispatch(Array.prototype.slice.call(e13));
            }, _arraybuffer: function(e13) {
              return u6("arraybuffer:"), this.dispatch(new Uint8Array(e13));
            }, _url: function(e13) {
              return u6("url:" + e13.toString());
            }, _map: function(e13) {
              u6("map:");
              e13 = Array.from(e13);
              return this._array(e13, false !== o10.unorderedSets);
            }, _set: function(e13) {
              u6("set:");
              e13 = Array.from(e13);
              return this._array(e13, false !== o10.unorderedSets);
            }, _file: function(e13) {
              return u6("file:"), this.dispatch([e13.name, e13.size, e13.type, e13.lastModfied]);
            }, _blob: function() {
              if (o10.ignoreUnknown)
                return u6("[blob]");
              throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n');
            }, _domwindow: function() {
              return u6("domwindow");
            }, _bigint: function(e13) {
              return u6("bigint:" + e13.toString());
            }, _process: function() {
              return u6("process");
            }, _timer: function() {
              return u6("timer");
            }, _pipe: function() {
              return u6("pipe");
            }, _tcp: function() {
              return u6("tcp");
            }, _udp: function() {
              return u6("udp");
            }, _tty: function() {
              return u6("tty");
            }, _statwatcher: function() {
              return u6("statwatcher");
            }, _securecontext: function() {
              return u6("securecontext");
            }, _connection: function() {
              return u6("connection");
            }, _zlib: function() {
              return u6("zlib");
            }, _context: function() {
              return u6("context");
            }, _nodescript: function() {
              return u6("nodescript");
            }, _httpparser: function() {
              return u6("httpparser");
            }, _dataview: function() {
              return u6("dataview");
            }, _signal: function() {
              return u6("signal");
            }, _fsevent: function() {
              return u6("fsevent");
            }, _tlswrap: function() {
              return u6("tlswrap");
            } };
          }
          function l6() {
            return { buf: "", write: function(e13) {
              this.buf += e13;
            }, end: function(e13) {
              this.buf += e13;
            }, read: function() {
              return this.buf;
            } };
          }
          m5.writeToStream = function(e13, t13, n7) {
            return void 0 === n7 && (n7 = t13, t13 = {}), f5(t13 = u5(e13, t13), n7).dispatch(e13);
          };
        }.call(this, w4("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, w4("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_9a5aa49d.js", "/");
      }, { buffer: 3, crypto: 5, lYpoI2: 11 }], 2: [function(e12, t12, f5) {
        !function(e13, t13, n6, r14, o9, i6, u5, s6, a5) {
          !function(e14) {
            "use strict";
            var a6 = "undefined" != typeof Uint8Array ? Uint8Array : Array, t14 = "+".charCodeAt(0), n7 = "/".charCodeAt(0), r15 = "0".charCodeAt(0), o10 = "a".charCodeAt(0), i7 = "A".charCodeAt(0), u6 = "-".charCodeAt(0), s7 = "_".charCodeAt(0);
            function f6(e15) {
              e15 = e15.charCodeAt(0);
              return e15 === t14 || e15 === u6 ? 62 : e15 === n7 || e15 === s7 ? 63 : e15 < r15 ? -1 : e15 < r15 + 10 ? e15 - r15 + 26 + 26 : e15 < i7 + 26 ? e15 - i7 : e15 < o10 + 26 ? e15 - o10 + 26 : void 0;
            }
            e14.toByteArray = function(e15) {
              var t15, n8;
              if (0 < e15.length % 4)
                throw new Error("Invalid string. Length must be a multiple of 4");
              var r16 = e15.length, r16 = "=" === e15.charAt(r16 - 2) ? 2 : "=" === e15.charAt(r16 - 1) ? 1 : 0, o11 = new a6(3 * e15.length / 4 - r16), i8 = 0 < r16 ? e15.length - 4 : e15.length, u7 = 0;
              function s8(e16) {
                o11[u7++] = e16;
              }
              for (t15 = 0; t15 < i8; t15 += 4, 0)
                s8((16711680 & (n8 = f6(e15.charAt(t15)) << 18 | f6(e15.charAt(t15 + 1)) << 12 | f6(e15.charAt(t15 + 2)) << 6 | f6(e15.charAt(t15 + 3)))) >> 16), s8((65280 & n8) >> 8), s8(255 & n8);
              return 2 == r16 ? s8(255 & (n8 = f6(e15.charAt(t15)) << 2 | f6(e15.charAt(t15 + 1)) >> 4)) : 1 == r16 && (s8((n8 = f6(e15.charAt(t15)) << 10 | f6(e15.charAt(t15 + 1)) << 4 | f6(e15.charAt(t15 + 2)) >> 2) >> 8 & 255), s8(255 & n8)), o11;
            }, e14.fromByteArray = function(e15) {
              var t15, n8, r16, o11, i8 = e15.length % 3, u7 = "";
              function s8(e16) {
                return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e16);
              }
              for (t15 = 0, r16 = e15.length - i8; t15 < r16; t15 += 3)
                n8 = (e15[t15] << 16) + (e15[t15 + 1] << 8) + e15[t15 + 2], u7 += s8((o11 = n8) >> 18 & 63) + s8(o11 >> 12 & 63) + s8(o11 >> 6 & 63) + s8(63 & o11);
              switch (i8) {
                case 1:
                  u7 = (u7 += s8((n8 = e15[e15.length - 1]) >> 2)) + s8(n8 << 4 & 63) + "==";
                  break;
                case 2:
                  u7 = (u7 = (u7 += s8((n8 = (e15[e15.length - 2] << 8) + e15[e15.length - 1]) >> 10)) + s8(n8 >> 4 & 63)) + s8(n8 << 2 & 63) + "=";
              }
              return u7;
            };
          }(void 0 === f5 ? this.base64js = {} : f5);
        }.call(this, e12("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e12("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js", "/node_modules/gulp-browserify/node_modules/base64-js/lib");
      }, { buffer: 3, lYpoI2: 11 }], 3: [function(O2, e12, H3) {
        !function(e13, n6, f5, r14, h5, p5, g5, y5, w4) {
          var a5 = O2("base64-js"), i6 = O2("ieee754");
          function f5(e14, t13, n7) {
            if (!(this instanceof f5))
              return new f5(e14, t13, n7);
            var r15, o10, i7, u6, s7 = typeof e14;
            if ("base64" === t13 && "string" == s7)
              for (e14 = (u6 = e14).trim ? u6.trim() : u6.replace(/^\s+|\s+$/g, ""); e14.length % 4 != 0; )
                e14 += "=";
            if ("number" == s7)
              r15 = j3(e14);
            else if ("string" == s7)
              r15 = f5.byteLength(e14, t13);
            else {
              if ("object" != s7)
                throw new Error("First argument needs to be a number, array or string.");
              r15 = j3(e14.length);
            }
            if (f5._useTypedArrays ? o10 = f5._augment(new Uint8Array(r15)) : ((o10 = this).length = r15, o10._isBuffer = true), f5._useTypedArrays && "number" == typeof e14.byteLength)
              o10._set(e14);
            else if (C2(u6 = e14) || f5.isBuffer(u6) || u6 && "object" == typeof u6 && "number" == typeof u6.length)
              for (i7 = 0; i7 < r15; i7++)
                f5.isBuffer(e14) ? o10[i7] = e14.readUInt8(i7) : o10[i7] = e14[i7];
            else if ("string" == s7)
              o10.write(e14, 0, t13);
            else if ("number" == s7 && !f5._useTypedArrays && !n7)
              for (i7 = 0; i7 < r15; i7++)
                o10[i7] = 0;
            return o10;
          }
          function b5(e14, t13, n7, r15) {
            return f5._charsWritten = c6(function(e15) {
              for (var t14 = [], n8 = 0; n8 < e15.length; n8++)
                t14.push(255 & e15.charCodeAt(n8));
              return t14;
            }(t13), e14, n7, r15);
          }
          function m5(e14, t13, n7, r15) {
            return f5._charsWritten = c6(function(e15) {
              for (var t14, n8, r16 = [], o10 = 0; o10 < e15.length; o10++)
                n8 = e15.charCodeAt(o10), t14 = n8 >> 8, n8 = n8 % 256, r16.push(n8), r16.push(t14);
              return r16;
            }(t13), e14, n7, r15);
          }
          function v5(e14, t13, n7) {
            var r15 = "";
            n7 = Math.min(e14.length, n7);
            for (var o10 = t13; o10 < n7; o10++)
              r15 += String.fromCharCode(e14[o10]);
            return r15;
          }
          function o9(e14, t13, n7, r15) {
            r15 || (d5("boolean" == typeof n7, "missing or invalid endian"), d5(null != t13, "missing offset"), d5(t13 + 1 < e14.length, "Trying to read beyond buffer length"));
            var o10, r15 = e14.length;
            if (!(r15 <= t13))
              return n7 ? (o10 = e14[t13], t13 + 1 < r15 && (o10 |= e14[t13 + 1] << 8)) : (o10 = e14[t13] << 8, t13 + 1 < r15 && (o10 |= e14[t13 + 1])), o10;
          }
          function u5(e14, t13, n7, r15) {
            r15 || (d5("boolean" == typeof n7, "missing or invalid endian"), d5(null != t13, "missing offset"), d5(t13 + 3 < e14.length, "Trying to read beyond buffer length"));
            var o10, r15 = e14.length;
            if (!(r15 <= t13))
              return n7 ? (t13 + 2 < r15 && (o10 = e14[t13 + 2] << 16), t13 + 1 < r15 && (o10 |= e14[t13 + 1] << 8), o10 |= e14[t13], t13 + 3 < r15 && (o10 += e14[t13 + 3] << 24 >>> 0)) : (t13 + 1 < r15 && (o10 = e14[t13 + 1] << 16), t13 + 2 < r15 && (o10 |= e14[t13 + 2] << 8), t13 + 3 < r15 && (o10 |= e14[t13 + 3]), o10 += e14[t13] << 24 >>> 0), o10;
          }
          function _3(e14, t13, n7, r15) {
            if (r15 || (d5("boolean" == typeof n7, "missing or invalid endian"), d5(null != t13, "missing offset"), d5(t13 + 1 < e14.length, "Trying to read beyond buffer length")), !(e14.length <= t13))
              return r15 = o9(e14, t13, n7, true), 32768 & r15 ? -1 * (65535 - r15 + 1) : r15;
          }
          function E3(e14, t13, n7, r15) {
            if (r15 || (d5("boolean" == typeof n7, "missing or invalid endian"), d5(null != t13, "missing offset"), d5(t13 + 3 < e14.length, "Trying to read beyond buffer length")), !(e14.length <= t13))
              return r15 = u5(e14, t13, n7, true), 2147483648 & r15 ? -1 * (4294967295 - r15 + 1) : r15;
          }
          function I4(e14, t13, n7, r15) {
            return r15 || (d5("boolean" == typeof n7, "missing or invalid endian"), d5(t13 + 3 < e14.length, "Trying to read beyond buffer length")), i6.read(e14, t13, n7, 23, 4);
          }
          function A2(e14, t13, n7, r15) {
            return r15 || (d5("boolean" == typeof n7, "missing or invalid endian"), d5(t13 + 7 < e14.length, "Trying to read beyond buffer length")), i6.read(e14, t13, n7, 52, 8);
          }
          function s6(e14, t13, n7, r15, o10) {
            o10 || (d5(null != t13, "missing value"), d5("boolean" == typeof r15, "missing or invalid endian"), d5(null != n7, "missing offset"), d5(n7 + 1 < e14.length, "trying to write beyond buffer length"), Y3(t13, 65535));
            o10 = e14.length;
            if (!(o10 <= n7))
              for (var i7 = 0, u6 = Math.min(o10 - n7, 2); i7 < u6; i7++)
                e14[n7 + i7] = (t13 & 255 << 8 * (r15 ? i7 : 1 - i7)) >>> 8 * (r15 ? i7 : 1 - i7);
          }
          function l6(e14, t13, n7, r15, o10) {
            o10 || (d5(null != t13, "missing value"), d5("boolean" == typeof r15, "missing or invalid endian"), d5(null != n7, "missing offset"), d5(n7 + 3 < e14.length, "trying to write beyond buffer length"), Y3(t13, 4294967295));
            o10 = e14.length;
            if (!(o10 <= n7))
              for (var i7 = 0, u6 = Math.min(o10 - n7, 4); i7 < u6; i7++)
                e14[n7 + i7] = t13 >>> 8 * (r15 ? i7 : 3 - i7) & 255;
          }
          function B2(e14, t13, n7, r15, o10) {
            o10 || (d5(null != t13, "missing value"), d5("boolean" == typeof r15, "missing or invalid endian"), d5(null != n7, "missing offset"), d5(n7 + 1 < e14.length, "Trying to write beyond buffer length"), F3(t13, 32767, -32768)), e14.length <= n7 || s6(e14, 0 <= t13 ? t13 : 65535 + t13 + 1, n7, r15, o10);
          }
          function L3(e14, t13, n7, r15, o10) {
            o10 || (d5(null != t13, "missing value"), d5("boolean" == typeof r15, "missing or invalid endian"), d5(null != n7, "missing offset"), d5(n7 + 3 < e14.length, "Trying to write beyond buffer length"), F3(t13, 2147483647, -2147483648)), e14.length <= n7 || l6(e14, 0 <= t13 ? t13 : 4294967295 + t13 + 1, n7, r15, o10);
          }
          function U3(e14, t13, n7, r15, o10) {
            o10 || (d5(null != t13, "missing value"), d5("boolean" == typeof r15, "missing or invalid endian"), d5(null != n7, "missing offset"), d5(n7 + 3 < e14.length, "Trying to write beyond buffer length"), D2(t13, 34028234663852886e22, -34028234663852886e22)), e14.length <= n7 || i6.write(e14, t13, n7, r15, 23, 4);
          }
          function x4(e14, t13, n7, r15, o10) {
            o10 || (d5(null != t13, "missing value"), d5("boolean" == typeof r15, "missing or invalid endian"), d5(null != n7, "missing offset"), d5(n7 + 7 < e14.length, "Trying to write beyond buffer length"), D2(t13, 17976931348623157e292, -17976931348623157e292)), e14.length <= n7 || i6.write(e14, t13, n7, r15, 52, 8);
          }
          H3.Buffer = f5, H3.SlowBuffer = f5, H3.INSPECT_MAX_BYTES = 50, f5.poolSize = 8192, f5._useTypedArrays = function() {
            try {
              var e14 = new ArrayBuffer(0), t13 = new Uint8Array(e14);
              return t13.foo = function() {
                return 42;
              }, 42 === t13.foo() && "function" == typeof t13.subarray;
            } catch (e15) {
              return false;
            }
          }(), f5.isEncoding = function(e14) {
            switch (String(e14).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "raw":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return true;
              default:
                return false;
            }
          }, f5.isBuffer = function(e14) {
            return !(null == e14 || !e14._isBuffer);
          }, f5.byteLength = function(e14, t13) {
            var n7;
            switch (e14 += "", t13 || "utf8") {
              case "hex":
                n7 = e14.length / 2;
                break;
              case "utf8":
              case "utf-8":
                n7 = T4(e14).length;
                break;
              case "ascii":
              case "binary":
              case "raw":
                n7 = e14.length;
                break;
              case "base64":
                n7 = M3(e14).length;
                break;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                n7 = 2 * e14.length;
                break;
              default:
                throw new Error("Unknown encoding");
            }
            return n7;
          }, f5.concat = function(e14, t13) {
            if (d5(C2(e14), "Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."), 0 === e14.length)
              return new f5(0);
            if (1 === e14.length)
              return e14[0];
            if ("number" != typeof t13)
              for (o10 = t13 = 0; o10 < e14.length; o10++)
                t13 += e14[o10].length;
            for (var n7 = new f5(t13), r15 = 0, o10 = 0; o10 < e14.length; o10++) {
              var i7 = e14[o10];
              i7.copy(n7, r15), r15 += i7.length;
            }
            return n7;
          }, f5.prototype.write = function(e14, t13, n7, r15) {
            isFinite(t13) ? isFinite(n7) || (r15 = n7, n7 = void 0) : (a6 = r15, r15 = t13, t13 = n7, n7 = a6), t13 = Number(t13) || 0;
            var o10, i7, u6, s7, a6 = this.length - t13;
            switch ((!n7 || a6 < (n7 = Number(n7))) && (n7 = a6), r15 = String(r15 || "utf8").toLowerCase()) {
              case "hex":
                o10 = function(e15, t14, n8, r16) {
                  n8 = Number(n8) || 0;
                  var o11 = e15.length - n8;
                  (!r16 || o11 < (r16 = Number(r16))) && (r16 = o11), d5((o11 = t14.length) % 2 == 0, "Invalid hex string"), o11 / 2 < r16 && (r16 = o11 / 2);
                  for (var i8 = 0; i8 < r16; i8++) {
                    var u7 = parseInt(t14.substr(2 * i8, 2), 16);
                    d5(!isNaN(u7), "Invalid hex string"), e15[n8 + i8] = u7;
                  }
                  return f5._charsWritten = 2 * i8, i8;
                }(this, e14, t13, n7);
                break;
              case "utf8":
              case "utf-8":
                i7 = this, u6 = t13, s7 = n7, o10 = f5._charsWritten = c6(T4(e14), i7, u6, s7);
                break;
              case "ascii":
              case "binary":
                o10 = b5(this, e14, t13, n7);
                break;
              case "base64":
                i7 = this, u6 = t13, s7 = n7, o10 = f5._charsWritten = c6(M3(e14), i7, u6, s7);
                break;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                o10 = m5(this, e14, t13, n7);
                break;
              default:
                throw new Error("Unknown encoding");
            }
            return o10;
          }, f5.prototype.toString = function(e14, t13, n7) {
            var r15, o10, i7, u6, s7 = this;
            if (e14 = String(e14 || "utf8").toLowerCase(), t13 = Number(t13) || 0, (n7 = void 0 !== n7 ? Number(n7) : s7.length) === t13)
              return "";
            switch (e14) {
              case "hex":
                r15 = function(e15, t14, n8) {
                  var r16 = e15.length;
                  (!t14 || t14 < 0) && (t14 = 0);
                  (!n8 || n8 < 0 || r16 < n8) && (n8 = r16);
                  for (var o11 = "", i8 = t14; i8 < n8; i8++)
                    o11 += k5(e15[i8]);
                  return o11;
                }(s7, t13, n7);
                break;
              case "utf8":
              case "utf-8":
                r15 = function(e15, t14, n8) {
                  var r16 = "", o11 = "";
                  n8 = Math.min(e15.length, n8);
                  for (var i8 = t14; i8 < n8; i8++)
                    e15[i8] <= 127 ? (r16 += N3(o11) + String.fromCharCode(e15[i8]), o11 = "") : o11 += "%" + e15[i8].toString(16);
                  return r16 + N3(o11);
                }(s7, t13, n7);
                break;
              case "ascii":
              case "binary":
                r15 = v5(s7, t13, n7);
                break;
              case "base64":
                o10 = s7, u6 = n7, r15 = 0 === (i7 = t13) && u6 === o10.length ? a5.fromByteArray(o10) : a5.fromByteArray(o10.slice(i7, u6));
                break;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                r15 = function(e15, t14, n8) {
                  for (var r16 = e15.slice(t14, n8), o11 = "", i8 = 0; i8 < r16.length; i8 += 2)
                    o11 += String.fromCharCode(r16[i8] + 256 * r16[i8 + 1]);
                  return o11;
                }(s7, t13, n7);
                break;
              default:
                throw new Error("Unknown encoding");
            }
            return r15;
          }, f5.prototype.toJSON = function() {
            return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
          }, f5.prototype.copy = function(e14, t13, n7, r15) {
            if (t13 = t13 || 0, (r15 = r15 || 0 === r15 ? r15 : this.length) !== (n7 = n7 || 0) && 0 !== e14.length && 0 !== this.length) {
              d5(n7 <= r15, "sourceEnd < sourceStart"), d5(0 <= t13 && t13 < e14.length, "targetStart out of bounds"), d5(0 <= n7 && n7 < this.length, "sourceStart out of bounds"), d5(0 <= r15 && r15 <= this.length, "sourceEnd out of bounds"), r15 > this.length && (r15 = this.length);
              var o10 = (r15 = e14.length - t13 < r15 - n7 ? e14.length - t13 + n7 : r15) - n7;
              if (o10 < 100 || !f5._useTypedArrays)
                for (var i7 = 0; i7 < o10; i7++)
                  e14[i7 + t13] = this[i7 + n7];
              else
                e14._set(this.subarray(n7, n7 + o10), t13);
            }
          }, f5.prototype.slice = function(e14, t13) {
            var n7 = this.length;
            if (e14 = S4(e14, n7, 0), t13 = S4(t13, n7, n7), f5._useTypedArrays)
              return f5._augment(this.subarray(e14, t13));
            for (var r15 = t13 - e14, o10 = new f5(r15, void 0, true), i7 = 0; i7 < r15; i7++)
              o10[i7] = this[i7 + e14];
            return o10;
          }, f5.prototype.get = function(e14) {
            return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(e14);
          }, f5.prototype.set = function(e14, t13) {
            return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(e14, t13);
          }, f5.prototype.readUInt8 = function(e14, t13) {
            if (t13 || (d5(null != e14, "missing offset"), d5(e14 < this.length, "Trying to read beyond buffer length")), !(e14 >= this.length))
              return this[e14];
          }, f5.prototype.readUInt16LE = function(e14, t13) {
            return o9(this, e14, true, t13);
          }, f5.prototype.readUInt16BE = function(e14, t13) {
            return o9(this, e14, false, t13);
          }, f5.prototype.readUInt32LE = function(e14, t13) {
            return u5(this, e14, true, t13);
          }, f5.prototype.readUInt32BE = function(e14, t13) {
            return u5(this, e14, false, t13);
          }, f5.prototype.readInt8 = function(e14, t13) {
            if (t13 || (d5(null != e14, "missing offset"), d5(e14 < this.length, "Trying to read beyond buffer length")), !(e14 >= this.length))
              return 128 & this[e14] ? -1 * (255 - this[e14] + 1) : this[e14];
          }, f5.prototype.readInt16LE = function(e14, t13) {
            return _3(this, e14, true, t13);
          }, f5.prototype.readInt16BE = function(e14, t13) {
            return _3(this, e14, false, t13);
          }, f5.prototype.readInt32LE = function(e14, t13) {
            return E3(this, e14, true, t13);
          }, f5.prototype.readInt32BE = function(e14, t13) {
            return E3(this, e14, false, t13);
          }, f5.prototype.readFloatLE = function(e14, t13) {
            return I4(this, e14, true, t13);
          }, f5.prototype.readFloatBE = function(e14, t13) {
            return I4(this, e14, false, t13);
          }, f5.prototype.readDoubleLE = function(e14, t13) {
            return A2(this, e14, true, t13);
          }, f5.prototype.readDoubleBE = function(e14, t13) {
            return A2(this, e14, false, t13);
          }, f5.prototype.writeUInt8 = function(e14, t13, n7) {
            n7 || (d5(null != e14, "missing value"), d5(null != t13, "missing offset"), d5(t13 < this.length, "trying to write beyond buffer length"), Y3(e14, 255)), t13 >= this.length || (this[t13] = e14);
          }, f5.prototype.writeUInt16LE = function(e14, t13, n7) {
            s6(this, e14, t13, true, n7);
          }, f5.prototype.writeUInt16BE = function(e14, t13, n7) {
            s6(this, e14, t13, false, n7);
          }, f5.prototype.writeUInt32LE = function(e14, t13, n7) {
            l6(this, e14, t13, true, n7);
          }, f5.prototype.writeUInt32BE = function(e14, t13, n7) {
            l6(this, e14, t13, false, n7);
          }, f5.prototype.writeInt8 = function(e14, t13, n7) {
            n7 || (d5(null != e14, "missing value"), d5(null != t13, "missing offset"), d5(t13 < this.length, "Trying to write beyond buffer length"), F3(e14, 127, -128)), t13 >= this.length || (0 <= e14 ? this.writeUInt8(e14, t13, n7) : this.writeUInt8(255 + e14 + 1, t13, n7));
          }, f5.prototype.writeInt16LE = function(e14, t13, n7) {
            B2(this, e14, t13, true, n7);
          }, f5.prototype.writeInt16BE = function(e14, t13, n7) {
            B2(this, e14, t13, false, n7);
          }, f5.prototype.writeInt32LE = function(e14, t13, n7) {
            L3(this, e14, t13, true, n7);
          }, f5.prototype.writeInt32BE = function(e14, t13, n7) {
            L3(this, e14, t13, false, n7);
          }, f5.prototype.writeFloatLE = function(e14, t13, n7) {
            U3(this, e14, t13, true, n7);
          }, f5.prototype.writeFloatBE = function(e14, t13, n7) {
            U3(this, e14, t13, false, n7);
          }, f5.prototype.writeDoubleLE = function(e14, t13, n7) {
            x4(this, e14, t13, true, n7);
          }, f5.prototype.writeDoubleBE = function(e14, t13, n7) {
            x4(this, e14, t13, false, n7);
          }, f5.prototype.fill = function(e14, t13, n7) {
            if (t13 = t13 || 0, n7 = n7 || this.length, d5("number" == typeof (e14 = "string" == typeof (e14 = e14 || 0) ? e14.charCodeAt(0) : e14) && !isNaN(e14), "value is not a number"), d5(t13 <= n7, "end < start"), n7 !== t13 && 0 !== this.length) {
              d5(0 <= t13 && t13 < this.length, "start out of bounds"), d5(0 <= n7 && n7 <= this.length, "end out of bounds");
              for (var r15 = t13; r15 < n7; r15++)
                this[r15] = e14;
            }
          }, f5.prototype.inspect = function() {
            for (var e14 = [], t13 = this.length, n7 = 0; n7 < t13; n7++)
              if (e14[n7] = k5(this[n7]), n7 === H3.INSPECT_MAX_BYTES) {
                e14[n7 + 1] = "...";
                break;
              }
            return "<Buffer " + e14.join(" ") + ">";
          }, f5.prototype.toArrayBuffer = function() {
            if ("undefined" == typeof Uint8Array)
              throw new Error("Buffer.toArrayBuffer not supported in this browser");
            if (f5._useTypedArrays)
              return new f5(this).buffer;
            for (var e14 = new Uint8Array(this.length), t13 = 0, n7 = e14.length; t13 < n7; t13 += 1)
              e14[t13] = this[t13];
            return e14.buffer;
          };
          var t12 = f5.prototype;
          function S4(e14, t13, n7) {
            return "number" != typeof e14 ? n7 : t13 <= (e14 = ~~e14) ? t13 : 0 <= e14 || 0 <= (e14 += t13) ? e14 : 0;
          }
          function j3(e14) {
            return (e14 = ~~Math.ceil(+e14)) < 0 ? 0 : e14;
          }
          function C2(e14) {
            return (Array.isArray || function(e15) {
              return "[object Array]" === Object.prototype.toString.call(e15);
            })(e14);
          }
          function k5(e14) {
            return e14 < 16 ? "0" + e14.toString(16) : e14.toString(16);
          }
          function T4(e14) {
            for (var t13 = [], n7 = 0; n7 < e14.length; n7++) {
              var r15 = e14.charCodeAt(n7);
              if (r15 <= 127)
                t13.push(e14.charCodeAt(n7));
              else
                for (var o10 = n7, i7 = (55296 <= r15 && r15 <= 57343 && n7++, encodeURIComponent(e14.slice(o10, n7 + 1)).substr(1).split("%")), u6 = 0; u6 < i7.length; u6++)
                  t13.push(parseInt(i7[u6], 16));
            }
            return t13;
          }
          function M3(e14) {
            return a5.toByteArray(e14);
          }
          function c6(e14, t13, n7, r15) {
            for (var o10 = 0; o10 < r15 && !(o10 + n7 >= t13.length || o10 >= e14.length); o10++)
              t13[o10 + n7] = e14[o10];
            return o10;
          }
          function N3(e14) {
            try {
              return decodeURIComponent(e14);
            } catch (e15) {
              return String.fromCharCode(65533);
            }
          }
          function Y3(e14, t13) {
            d5("number" == typeof e14, "cannot write a non-number as a number"), d5(0 <= e14, "specified a negative value for writing an unsigned value"), d5(e14 <= t13, "value is larger than maximum value for type"), d5(Math.floor(e14) === e14, "value has a fractional component");
          }
          function F3(e14, t13, n7) {
            d5("number" == typeof e14, "cannot write a non-number as a number"), d5(e14 <= t13, "value larger than maximum allowed value"), d5(n7 <= e14, "value smaller than minimum allowed value"), d5(Math.floor(e14) === e14, "value has a fractional component");
          }
          function D2(e14, t13, n7) {
            d5("number" == typeof e14, "cannot write a non-number as a number"), d5(e14 <= t13, "value larger than maximum allowed value"), d5(n7 <= e14, "value smaller than minimum allowed value");
          }
          function d5(e14, t13) {
            if (!e14)
              throw new Error(t13 || "Failed assertion");
          }
          f5._augment = function(e14) {
            return e14._isBuffer = true, e14._get = e14.get, e14._set = e14.set, e14.get = t12.get, e14.set = t12.set, e14.write = t12.write, e14.toString = t12.toString, e14.toLocaleString = t12.toString, e14.toJSON = t12.toJSON, e14.copy = t12.copy, e14.slice = t12.slice, e14.readUInt8 = t12.readUInt8, e14.readUInt16LE = t12.readUInt16LE, e14.readUInt16BE = t12.readUInt16BE, e14.readUInt32LE = t12.readUInt32LE, e14.readUInt32BE = t12.readUInt32BE, e14.readInt8 = t12.readInt8, e14.readInt16LE = t12.readInt16LE, e14.readInt16BE = t12.readInt16BE, e14.readInt32LE = t12.readInt32LE, e14.readInt32BE = t12.readInt32BE, e14.readFloatLE = t12.readFloatLE, e14.readFloatBE = t12.readFloatBE, e14.readDoubleLE = t12.readDoubleLE, e14.readDoubleBE = t12.readDoubleBE, e14.writeUInt8 = t12.writeUInt8, e14.writeUInt16LE = t12.writeUInt16LE, e14.writeUInt16BE = t12.writeUInt16BE, e14.writeUInt32LE = t12.writeUInt32LE, e14.writeUInt32BE = t12.writeUInt32BE, e14.writeInt8 = t12.writeInt8, e14.writeInt16LE = t12.writeInt16LE, e14.writeInt16BE = t12.writeInt16BE, e14.writeInt32LE = t12.writeInt32LE, e14.writeInt32BE = t12.writeInt32BE, e14.writeFloatLE = t12.writeFloatLE, e14.writeFloatBE = t12.writeFloatBE, e14.writeDoubleLE = t12.writeDoubleLE, e14.writeDoubleBE = t12.writeDoubleBE, e14.fill = t12.fill, e14.inspect = t12.inspect, e14.toArrayBuffer = t12.toArrayBuffer, e14;
          };
        }.call(this, O2("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, O2("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/buffer/index.js", "/node_modules/gulp-browserify/node_modules/buffer");
      }, { "base64-js": 2, buffer: 3, ieee754: 10, lYpoI2: 11 }], 4: [function(c6, d5, e12) {
        !function(e13, t12, a5, n6, r14, o9, i6, u5, s6) {
          var a5 = c6("buffer").Buffer, f5 = 4, l6 = new a5(f5);
          l6.fill(0);
          d5.exports = { hash: function(e14, t13, n7, r15) {
            for (var o10 = t13(function(e15, t14) {
              e15.length % f5 != 0 && (n8 = e15.length + (f5 - e15.length % f5), e15 = a5.concat([e15, l6], n8));
              for (var n8, r16 = [], o11 = t14 ? e15.readInt32BE : e15.readInt32LE, i8 = 0; i8 < e15.length; i8 += f5)
                r16.push(o11.call(e15, i8));
              return r16;
            }(e14 = a5.isBuffer(e14) ? e14 : new a5(e14), r15), 8 * e14.length), t13 = r15, i7 = new a5(n7), u6 = t13 ? i7.writeInt32BE : i7.writeInt32LE, s7 = 0; s7 < o10.length; s7++)
              u6.call(i7, o10[s7], 4 * s7, true);
            return i7;
          } };
        }.call(this, c6("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, c6("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { buffer: 3, lYpoI2: 11 }], 5: [function(v5, e12, _3) {
        !function(l6, c6, u5, d5, h5, p5, g5, y5, w4) {
          var u5 = v5("buffer").Buffer, e13 = v5("./sha"), t12 = v5("./sha256"), n6 = v5("./rng"), b5 = { sha1: e13, sha256: t12, md5: v5("./md5") }, s6 = 64, a5 = new u5(s6);
          function r14(e14, n7) {
            var r15 = b5[e14 = e14 || "sha1"], o10 = [];
            return r15 || i6("algorithm:", e14, "is not yet supported"), { update: function(e15) {
              return u5.isBuffer(e15) || (e15 = new u5(e15)), o10.push(e15), e15.length, this;
            }, digest: function(e15) {
              var t13 = u5.concat(o10), t13 = n7 ? function(e16, t14, n8) {
                u5.isBuffer(t14) || (t14 = new u5(t14)), u5.isBuffer(n8) || (n8 = new u5(n8)), t14.length > s6 ? t14 = e16(t14) : t14.length < s6 && (t14 = u5.concat([t14, a5], s6));
                for (var r16 = new u5(s6), o11 = new u5(s6), i7 = 0; i7 < s6; i7++)
                  r16[i7] = 54 ^ t14[i7], o11[i7] = 92 ^ t14[i7];
                return n8 = e16(u5.concat([r16, n8])), e16(u5.concat([o11, n8]));
              }(r15, n7, t13) : r15(t13);
              return o10 = null, e15 ? t13.toString(e15) : t13;
            } };
          }
          function i6() {
            var e14 = [].slice.call(arguments).join(" ");
            throw new Error([e14, "we accept pull requests", "http://github.com/dominictarr/crypto-browserify"].join("\n"));
          }
          a5.fill(0), _3.createHash = function(e14) {
            return r14(e14);
          }, _3.createHmac = r14, _3.randomBytes = function(e14, t13) {
            if (!t13 || !t13.call)
              return new u5(n6(e14));
            try {
              t13.call(this, void 0, new u5(n6(e14)));
            } catch (e15) {
              t13(e15);
            }
          };
          var o9, f5 = ["createCredentials", "createCipher", "createCipheriv", "createDecipher", "createDecipheriv", "createSign", "createVerify", "createDiffieHellman", "pbkdf2"], m5 = function(e14) {
            _3[e14] = function() {
              i6("sorry,", e14, "is not implemented yet");
            };
          };
          for (o9 in f5)
            m5(f5[o9], o9);
        }.call(this, v5("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, v5("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./md5": 6, "./rng": 7, "./sha": 8, "./sha256": 9, buffer: 3, lYpoI2: 11 }], 6: [function(w4, b5, e12) {
        !function(e13, r14, o9, i6, u5, a5, f5, l6, y5) {
          var t12 = w4("./helpers");
          function n6(e14, t13) {
            e14[t13 >> 5] |= 128 << t13 % 32, e14[14 + (t13 + 64 >>> 9 << 4)] = t13;
            for (var n7 = 1732584193, r15 = -271733879, o10 = -1732584194, i7 = 271733878, u6 = 0; u6 < e14.length; u6 += 16) {
              var s7 = n7, a6 = r15, f6 = o10, l7 = i7, n7 = c6(n7, r15, o10, i7, e14[u6 + 0], 7, -680876936), i7 = c6(i7, n7, r15, o10, e14[u6 + 1], 12, -389564586), o10 = c6(o10, i7, n7, r15, e14[u6 + 2], 17, 606105819), r15 = c6(r15, o10, i7, n7, e14[u6 + 3], 22, -1044525330);
              n7 = c6(n7, r15, o10, i7, e14[u6 + 4], 7, -176418897), i7 = c6(i7, n7, r15, o10, e14[u6 + 5], 12, 1200080426), o10 = c6(o10, i7, n7, r15, e14[u6 + 6], 17, -1473231341), r15 = c6(r15, o10, i7, n7, e14[u6 + 7], 22, -45705983), n7 = c6(n7, r15, o10, i7, e14[u6 + 8], 7, 1770035416), i7 = c6(i7, n7, r15, o10, e14[u6 + 9], 12, -1958414417), o10 = c6(o10, i7, n7, r15, e14[u6 + 10], 17, -42063), r15 = c6(r15, o10, i7, n7, e14[u6 + 11], 22, -1990404162), n7 = c6(n7, r15, o10, i7, e14[u6 + 12], 7, 1804603682), i7 = c6(i7, n7, r15, o10, e14[u6 + 13], 12, -40341101), o10 = c6(o10, i7, n7, r15, e14[u6 + 14], 17, -1502002290), n7 = d5(n7, r15 = c6(r15, o10, i7, n7, e14[u6 + 15], 22, 1236535329), o10, i7, e14[u6 + 1], 5, -165796510), i7 = d5(i7, n7, r15, o10, e14[u6 + 6], 9, -1069501632), o10 = d5(o10, i7, n7, r15, e14[u6 + 11], 14, 643717713), r15 = d5(r15, o10, i7, n7, e14[u6 + 0], 20, -373897302), n7 = d5(n7, r15, o10, i7, e14[u6 + 5], 5, -701558691), i7 = d5(i7, n7, r15, o10, e14[u6 + 10], 9, 38016083), o10 = d5(o10, i7, n7, r15, e14[u6 + 15], 14, -660478335), r15 = d5(r15, o10, i7, n7, e14[u6 + 4], 20, -405537848), n7 = d5(n7, r15, o10, i7, e14[u6 + 9], 5, 568446438), i7 = d5(i7, n7, r15, o10, e14[u6 + 14], 9, -1019803690), o10 = d5(o10, i7, n7, r15, e14[u6 + 3], 14, -187363961), r15 = d5(r15, o10, i7, n7, e14[u6 + 8], 20, 1163531501), n7 = d5(n7, r15, o10, i7, e14[u6 + 13], 5, -1444681467), i7 = d5(i7, n7, r15, o10, e14[u6 + 2], 9, -51403784), o10 = d5(o10, i7, n7, r15, e14[u6 + 7], 14, 1735328473), n7 = h5(n7, r15 = d5(r15, o10, i7, n7, e14[u6 + 12], 20, -1926607734), o10, i7, e14[u6 + 5], 4, -378558), i7 = h5(i7, n7, r15, o10, e14[u6 + 8], 11, -2022574463), o10 = h5(o10, i7, n7, r15, e14[u6 + 11], 16, 1839030562), r15 = h5(r15, o10, i7, n7, e14[u6 + 14], 23, -35309556), n7 = h5(n7, r15, o10, i7, e14[u6 + 1], 4, -1530992060), i7 = h5(i7, n7, r15, o10, e14[u6 + 4], 11, 1272893353), o10 = h5(o10, i7, n7, r15, e14[u6 + 7], 16, -155497632), r15 = h5(r15, o10, i7, n7, e14[u6 + 10], 23, -1094730640), n7 = h5(n7, r15, o10, i7, e14[u6 + 13], 4, 681279174), i7 = h5(i7, n7, r15, o10, e14[u6 + 0], 11, -358537222), o10 = h5(o10, i7, n7, r15, e14[u6 + 3], 16, -722521979), r15 = h5(r15, o10, i7, n7, e14[u6 + 6], 23, 76029189), n7 = h5(n7, r15, o10, i7, e14[u6 + 9], 4, -640364487), i7 = h5(i7, n7, r15, o10, e14[u6 + 12], 11, -421815835), o10 = h5(o10, i7, n7, r15, e14[u6 + 15], 16, 530742520), n7 = p5(n7, r15 = h5(r15, o10, i7, n7, e14[u6 + 2], 23, -995338651), o10, i7, e14[u6 + 0], 6, -198630844), i7 = p5(i7, n7, r15, o10, e14[u6 + 7], 10, 1126891415), o10 = p5(o10, i7, n7, r15, e14[u6 + 14], 15, -1416354905), r15 = p5(r15, o10, i7, n7, e14[u6 + 5], 21, -57434055), n7 = p5(n7, r15, o10, i7, e14[u6 + 12], 6, 1700485571), i7 = p5(i7, n7, r15, o10, e14[u6 + 3], 10, -1894986606), o10 = p5(o10, i7, n7, r15, e14[u6 + 10], 15, -1051523), r15 = p5(r15, o10, i7, n7, e14[u6 + 1], 21, -2054922799), n7 = p5(n7, r15, o10, i7, e14[u6 + 8], 6, 1873313359), i7 = p5(i7, n7, r15, o10, e14[u6 + 15], 10, -30611744), o10 = p5(o10, i7, n7, r15, e14[u6 + 6], 15, -1560198380), r15 = p5(r15, o10, i7, n7, e14[u6 + 13], 21, 1309151649), n7 = p5(n7, r15, o10, i7, e14[u6 + 4], 6, -145523070), i7 = p5(i7, n7, r15, o10, e14[u6 + 11], 10, -1120210379), o10 = p5(o10, i7, n7, r15, e14[u6 + 2], 15, 718787259), r15 = p5(r15, o10, i7, n7, e14[u6 + 9], 21, -343485551), n7 = g5(n7, s7), r15 = g5(r15, a6), o10 = g5(o10, f6), i7 = g5(i7, l7);
            }
            return Array(n7, r15, o10, i7);
          }
          function s6(e14, t13, n7, r15, o10, i7) {
            return g5((t13 = g5(g5(t13, e14), g5(r15, i7))) << o10 | t13 >>> 32 - o10, n7);
          }
          function c6(e14, t13, n7, r15, o10, i7, u6) {
            return s6(t13 & n7 | ~t13 & r15, e14, t13, o10, i7, u6);
          }
          function d5(e14, t13, n7, r15, o10, i7, u6) {
            return s6(t13 & r15 | n7 & ~r15, e14, t13, o10, i7, u6);
          }
          function h5(e14, t13, n7, r15, o10, i7, u6) {
            return s6(t13 ^ n7 ^ r15, e14, t13, o10, i7, u6);
          }
          function p5(e14, t13, n7, r15, o10, i7, u6) {
            return s6(n7 ^ (t13 | ~r15), e14, t13, o10, i7, u6);
          }
          function g5(e14, t13) {
            var n7 = (65535 & e14) + (65535 & t13);
            return (e14 >> 16) + (t13 >> 16) + (n7 >> 16) << 16 | 65535 & n7;
          }
          b5.exports = function(e14) {
            return t12.hash(e14, n6, 16);
          };
        }.call(this, w4("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, w4("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 7: [function(e12, l6, t12) {
        !function(e13, t13, n6, r14, o9, i6, u5, s6, f5) {
          var a5;
          l6.exports = a5 || function(e14) {
            for (var t14, n7 = new Array(e14), r15 = 0; r15 < e14; r15++)
              0 == (3 & r15) && (t14 = 4294967296 * Math.random()), n7[r15] = t14 >>> ((3 & r15) << 3) & 255;
            return n7;
          };
        }.call(this, e12("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e12("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { buffer: 3, lYpoI2: 11 }], 8: [function(c6, d5, e12) {
        !function(e13, t12, n6, r14, o9, s6, a5, f5, l6) {
          var i6 = c6("./helpers");
          function u5(l7, c7) {
            l7[c7 >> 5] |= 128 << 24 - c7 % 32, l7[15 + (c7 + 64 >> 9 << 4)] = c7;
            for (var e14, t13, n7, r15 = Array(80), o10 = 1732584193, i7 = -271733879, u6 = -1732584194, s7 = 271733878, d6 = -1009589776, h5 = 0; h5 < l7.length; h5 += 16) {
              for (var p5 = o10, g5 = i7, y5 = u6, w4 = s7, b5 = d6, a6 = 0; a6 < 80; a6++) {
                r15[a6] = a6 < 16 ? l7[h5 + a6] : v5(r15[a6 - 3] ^ r15[a6 - 8] ^ r15[a6 - 14] ^ r15[a6 - 16], 1);
                var f6 = m5(m5(v5(o10, 5), (f6 = i7, t13 = u6, n7 = s7, (e14 = a6) < 20 ? f6 & t13 | ~f6 & n7 : !(e14 < 40) && e14 < 60 ? f6 & t13 | f6 & n7 | t13 & n7 : f6 ^ t13 ^ n7)), m5(m5(d6, r15[a6]), (e14 = a6) < 20 ? 1518500249 : e14 < 40 ? 1859775393 : e14 < 60 ? -1894007588 : -899497514)), d6 = s7, s7 = u6, u6 = v5(i7, 30), i7 = o10, o10 = f6;
              }
              o10 = m5(o10, p5), i7 = m5(i7, g5), u6 = m5(u6, y5), s7 = m5(s7, w4), d6 = m5(d6, b5);
            }
            return Array(o10, i7, u6, s7, d6);
          }
          function m5(e14, t13) {
            var n7 = (65535 & e14) + (65535 & t13);
            return (e14 >> 16) + (t13 >> 16) + (n7 >> 16) << 16 | 65535 & n7;
          }
          function v5(e14, t13) {
            return e14 << t13 | e14 >>> 32 - t13;
          }
          d5.exports = function(e14) {
            return i6.hash(e14, u5, 20, true);
          };
        }.call(this, c6("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, c6("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 9: [function(c6, d5, e12) {
        !function(e13, t12, n6, r14, u5, s6, a5, f5, l6) {
          function b5(e14, t13) {
            var n7 = (65535 & e14) + (65535 & t13);
            return (e14 >> 16) + (t13 >> 16) + (n7 >> 16) << 16 | 65535 & n7;
          }
          function o9(e14, l7) {
            var c7, d6 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298), t13 = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225), n7 = new Array(64);
            e14[l7 >> 5] |= 128 << 24 - l7 % 32, e14[15 + (l7 + 64 >> 9 << 4)] = l7;
            for (var r15, o10, h5 = 0; h5 < e14.length; h5 += 16) {
              for (var i7 = t13[0], u6 = t13[1], s7 = t13[2], p5 = t13[3], a6 = t13[4], g5 = t13[5], y5 = t13[6], w4 = t13[7], f6 = 0; f6 < 64; f6++)
                n7[f6] = f6 < 16 ? e14[f6 + h5] : b5(b5(b5((o10 = n7[f6 - 2], m5(o10, 17) ^ m5(o10, 19) ^ v5(o10, 10)), n7[f6 - 7]), (o10 = n7[f6 - 15], m5(o10, 7) ^ m5(o10, 18) ^ v5(o10, 3))), n7[f6 - 16]), c7 = b5(b5(b5(b5(w4, m5(o10 = a6, 6) ^ m5(o10, 11) ^ m5(o10, 25)), a6 & g5 ^ ~a6 & y5), d6[f6]), n7[f6]), r15 = b5(m5(r15 = i7, 2) ^ m5(r15, 13) ^ m5(r15, 22), i7 & u6 ^ i7 & s7 ^ u6 & s7), w4 = y5, y5 = g5, g5 = a6, a6 = b5(p5, c7), p5 = s7, s7 = u6, u6 = i7, i7 = b5(c7, r15);
              t13[0] = b5(i7, t13[0]), t13[1] = b5(u6, t13[1]), t13[2] = b5(s7, t13[2]), t13[3] = b5(p5, t13[3]), t13[4] = b5(a6, t13[4]), t13[5] = b5(g5, t13[5]), t13[6] = b5(y5, t13[6]), t13[7] = b5(w4, t13[7]);
            }
            return t13;
          }
          var i6 = c6("./helpers"), m5 = function(e14, t13) {
            return e14 >>> t13 | e14 << 32 - t13;
          }, v5 = function(e14, t13) {
            return e14 >>> t13;
          };
          d5.exports = function(e14) {
            return i6.hash(e14, o9, 32, true);
          };
        }.call(this, c6("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, c6("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 10: [function(e12, t12, f5) {
        !function(e13, t13, n6, r14, o9, i6, u5, s6, a5) {
          f5.read = function(e14, t14, n7, r15, o10) {
            var i7, u6, l6 = 8 * o10 - r15 - 1, c6 = (1 << l6) - 1, d5 = c6 >> 1, s7 = -7, a6 = n7 ? o10 - 1 : 0, f6 = n7 ? -1 : 1, o10 = e14[t14 + a6];
            for (a6 += f6, i7 = o10 & (1 << -s7) - 1, o10 >>= -s7, s7 += l6; 0 < s7; i7 = 256 * i7 + e14[t14 + a6], a6 += f6, s7 -= 8)
              ;
            for (u6 = i7 & (1 << -s7) - 1, i7 >>= -s7, s7 += r15; 0 < s7; u6 = 256 * u6 + e14[t14 + a6], a6 += f6, s7 -= 8)
              ;
            if (0 === i7)
              i7 = 1 - d5;
            else {
              if (i7 === c6)
                return u6 ? NaN : 1 / 0 * (o10 ? -1 : 1);
              u6 += Math.pow(2, r15), i7 -= d5;
            }
            return (o10 ? -1 : 1) * u6 * Math.pow(2, i7 - r15);
          }, f5.write = function(e14, t14, l6, n7, r15, c6) {
            var o10, i7, u6 = 8 * c6 - r15 - 1, s7 = (1 << u6) - 1, a6 = s7 >> 1, d5 = 23 === r15 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f6 = n7 ? 0 : c6 - 1, h5 = n7 ? 1 : -1, c6 = t14 < 0 || 0 === t14 && 1 / t14 < 0 ? 1 : 0;
            for (t14 = Math.abs(t14), isNaN(t14) || t14 === 1 / 0 ? (i7 = isNaN(t14) ? 1 : 0, o10 = s7) : (o10 = Math.floor(Math.log(t14) / Math.LN2), t14 * (n7 = Math.pow(2, -o10)) < 1 && (o10--, n7 *= 2), 2 <= (t14 += 1 <= o10 + a6 ? d5 / n7 : d5 * Math.pow(2, 1 - a6)) * n7 && (o10++, n7 /= 2), s7 <= o10 + a6 ? (i7 = 0, o10 = s7) : 1 <= o10 + a6 ? (i7 = (t14 * n7 - 1) * Math.pow(2, r15), o10 += a6) : (i7 = t14 * Math.pow(2, a6 - 1) * Math.pow(2, r15), o10 = 0)); 8 <= r15; e14[l6 + f6] = 255 & i7, f6 += h5, i7 /= 256, r15 -= 8)
              ;
            for (o10 = o10 << r15 | i7, u6 += r15; 0 < u6; e14[l6 + f6] = 255 & o10, f6 += h5, o10 /= 256, u6 -= 8)
              ;
            e14[l6 + f6 - h5] |= 128 * c6;
          };
        }.call(this, e12("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e12("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/ieee754/index.js", "/node_modules/gulp-browserify/node_modules/ieee754");
      }, { buffer: 3, lYpoI2: 11 }], 11: [function(e12, h5, t12) {
        !function(e13, t13, n6, r14, o9, f5, l6, c6, d5) {
          var i6, u5, s6;
          function a5() {
          }
          (e13 = h5.exports = {}).nextTick = (u5 = "undefined" != typeof window && window.setImmediate, s6 = "undefined" != typeof window && window.postMessage && window.addEventListener, u5 ? function(e14) {
            return window.setImmediate(e14);
          } : s6 ? (i6 = [], window.addEventListener("message", function(e14) {
            var t14 = e14.source;
            t14 !== window && null !== t14 || "process-tick" !== e14.data || (e14.stopPropagation(), 0 < i6.length && i6.shift()());
          }, true), function(e14) {
            i6.push(e14), window.postMessage("process-tick", "*");
          }) : function(e14) {
            setTimeout(e14, 0);
          }), e13.title = "browser", e13.browser = true, e13.env = {}, e13.argv = [], e13.on = a5, e13.addListener = a5, e13.once = a5, e13.off = a5, e13.removeListener = a5, e13.removeAllListeners = a5, e13.emit = a5, e13.binding = function(e14) {
            throw new Error("process.binding is not supported");
          }, e13.cwd = function() {
            return "/";
          }, e13.chdir = function(e14) {
            throw new Error("process.chdir is not supported");
          };
        }.call(this, e12("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e12("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/process/browser.js", "/node_modules/gulp-browserify/node_modules/process");
      }, { buffer: 3, lYpoI2: 11 }] }, {}, [1])(1);
    });
  }
});

// node_modules/attr-accept/dist/es/index.js
var require_es = __commonJS({
  "node_modules/attr-accept/dist/es/index.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = function(file, acceptedFiles) {
      if (file && acceptedFiles) {
        var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(",");
        var fileName = file.name || "";
        var mimeType = (file.type || "").toLowerCase();
        var baseMimeType = mimeType.replace(/\/.*$/, "");
        return acceptedFilesArray.some(function(type) {
          var validType = type.trim().toLowerCase();
          if (validType.charAt(0) === ".") {
            return fileName.toLowerCase().endsWith(validType);
          } else if (validType.endsWith("/*")) {
            return baseMimeType === validType.replace(/\/.*$/, "");
          }
          return mimeType === validType;
        });
      }
      return true;
    };
  }
});

// node_modules/isobject/index.js
var require_isobject = __commonJS({
  "node_modules/isobject/index.js"(exports, module) {
    "use strict";
    module.exports = function isObject3(val) {
      return val != null && typeof val === "object" && Array.isArray(val) === false;
    };
  }
});

// node_modules/is-plain-object/index.js
var require_is_plain_object = __commonJS({
  "node_modules/is-plain-object/index.js"(exports, module) {
    "use strict";
    var isObject3 = require_isobject();
    function isObjectObject(o9) {
      return isObject3(o9) === true && Object.prototype.toString.call(o9) === "[object Object]";
    }
    module.exports = function isPlainObject(o9) {
      var ctor, prot;
      if (isObjectObject(o9) === false)
        return false;
      ctor = o9.constructor;
      if (typeof ctor !== "function")
        return false;
      prot = ctor.prototype;
      if (isObjectObject(prot) === false)
        return false;
      if (prot.hasOwnProperty("isPrototypeOf") === false) {
        return false;
      }
      return true;
    };
  }
});

// node_modules/is-extendable/index.js
var require_is_extendable = __commonJS({
  "node_modules/is-extendable/index.js"(exports, module) {
    "use strict";
    var isPlainObject = require_is_plain_object();
    module.exports = function isExtendable(val) {
      return isPlainObject(val) || typeof val === "function" || Array.isArray(val);
    };
  }
});

// node_modules/for-in/index.js
var require_for_in = __commonJS({
  "node_modules/for-in/index.js"(exports, module) {
    "use strict";
    module.exports = function forIn(obj, fn, thisArg) {
      for (var key in obj) {
        if (fn.call(thisArg, obj[key], key, obj) === false) {
          break;
        }
      }
    };
  }
});

// node_modules/mixin-deep/index.js
var require_mixin_deep = __commonJS({
  "node_modules/mixin-deep/index.js"(exports, module) {
    "use strict";
    var isExtendable = require_is_extendable();
    var forIn = require_for_in();
    function mixinDeep(target, objects) {
      var len = arguments.length, i6 = 0;
      while (++i6 < len) {
        var obj = arguments[i6];
        if (isObject3(obj)) {
          forIn(obj, copy, target);
        }
      }
      return target;
    }
    function copy(val, key) {
      if (!isValidKey(key)) {
        return;
      }
      var obj = this[key];
      if (isObject3(val) && isObject3(obj)) {
        mixinDeep(obj, val);
      } else {
        this[key] = val;
      }
    }
    function isObject3(val) {
      return isExtendable(val) && !Array.isArray(val);
    }
    function isValidKey(key) {
      return key !== "__proto__" && key !== "constructor" && key !== "prototype";
    }
    module.exports = mixinDeep;
  }
});

// node_modules/get-value/index.js
var require_get_value = __commonJS({
  "node_modules/get-value/index.js"(exports, module) {
    module.exports = function(obj, prop, a5, b5, c6) {
      if (!isObject3(obj) || !prop) {
        return obj;
      }
      prop = toString(prop);
      if (a5)
        prop += "." + toString(a5);
      if (b5)
        prop += "." + toString(b5);
      if (c6)
        prop += "." + toString(c6);
      if (prop in obj) {
        return obj[prop];
      }
      var segs = prop.split(".");
      var len = segs.length;
      var i6 = -1;
      while (obj && ++i6 < len) {
        var key = segs[i6];
        while (key[key.length - 1] === "\\") {
          key = key.slice(0, -1) + "." + segs[++i6];
        }
        obj = obj[key];
      }
      return obj;
    };
    function isObject3(val) {
      return val !== null && (typeof val === "object" || typeof val === "function");
    }
    function toString(val) {
      if (!val)
        return "";
      if (Array.isArray(val)) {
        return val.join(".");
      }
      return val;
    }
  }
});

// node_modules/assign-symbols/index.js
var require_assign_symbols = __commonJS({
  "node_modules/assign-symbols/index.js"(exports, module) {
    "use strict";
    module.exports = function(receiver, objects) {
      if (receiver === null || typeof receiver === "undefined") {
        throw new TypeError("expected first argument to be an object.");
      }
      if (typeof objects === "undefined" || typeof Symbol === "undefined") {
        return receiver;
      }
      if (typeof Object.getOwnPropertySymbols !== "function") {
        return receiver;
      }
      var isEnumerable = Object.prototype.propertyIsEnumerable;
      var target = Object(receiver);
      var len = arguments.length, i6 = 0;
      while (++i6 < len) {
        var provider = Object(arguments[i6]);
        var names = Object.getOwnPropertySymbols(provider);
        for (var j3 = 0; j3 < names.length; j3++) {
          var key = names[j3];
          if (isEnumerable.call(provider, key)) {
            target[key] = provider[key];
          }
        }
      }
      return target;
    };
  }
});

// node_modules/split-string/node_modules/extend-shallow/index.js
var require_extend_shallow = __commonJS({
  "node_modules/split-string/node_modules/extend-shallow/index.js"(exports, module) {
    "use strict";
    var isExtendable = require_is_extendable();
    var assignSymbols = require_assign_symbols();
    module.exports = Object.assign || function(obj) {
      if (obj === null || typeof obj === "undefined") {
        throw new TypeError("Cannot convert undefined or null to object");
      }
      if (!isObject3(obj)) {
        obj = {};
      }
      for (var i6 = 1; i6 < arguments.length; i6++) {
        var val = arguments[i6];
        if (isString(val)) {
          val = toObject(val);
        }
        if (isObject3(val)) {
          assign(obj, val);
          assignSymbols(obj, val);
        }
      }
      return obj;
    };
    function assign(a5, b5) {
      for (var key in b5) {
        if (hasOwn(b5, key)) {
          a5[key] = b5[key];
        }
      }
    }
    function isString(val) {
      return val && typeof val === "string";
    }
    function toObject(str) {
      var obj = {};
      for (var i6 in str) {
        obj[i6] = str[i6];
      }
      return obj;
    }
    function isObject3(val) {
      return val && typeof val === "object" || isExtendable(val);
    }
    function hasOwn(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }
  }
});

// node_modules/split-string/index.js
var require_split_string = __commonJS({
  "node_modules/split-string/index.js"(exports, module) {
    "use strict";
    var extend2 = require_extend_shallow();
    module.exports = function(str, options, fn) {
      if (typeof str !== "string") {
        throw new TypeError("expected a string");
      }
      if (typeof options === "function") {
        fn = options;
        options = null;
      }
      if (typeof options === "string") {
        options = { sep: options };
      }
      var opts = extend2({ sep: "." }, options);
      var quotes = opts.quotes || ['"', "'", "`"];
      var brackets;
      if (opts.brackets === true) {
        brackets = {
          "<": ">",
          "(": ")",
          "[": "]",
          "{": "}"
        };
      } else if (opts.brackets) {
        brackets = opts.brackets;
      }
      var tokens = [];
      var stack = [];
      var arr = [""];
      var sep = opts.sep;
      var len = str.length;
      var idx = -1;
      var closeIdx;
      function expected() {
        if (brackets && stack.length) {
          return brackets[stack[stack.length - 1]];
        }
      }
      while (++idx < len) {
        var ch = str[idx];
        var next = str[idx + 1];
        var tok = { val: ch, idx, arr, str };
        tokens.push(tok);
        if (ch === "\\") {
          tok.val = keepEscaping(opts, str, idx) === true ? ch + next : next;
          tok.escaped = true;
          if (typeof fn === "function") {
            fn(tok);
          }
          arr[arr.length - 1] += tok.val;
          idx++;
          continue;
        }
        if (brackets && brackets[ch]) {
          stack.push(ch);
          var e12 = expected();
          var i6 = idx + 1;
          if (str.indexOf(e12, i6 + 1) !== -1) {
            while (stack.length && i6 < len) {
              var s6 = str[++i6];
              if (s6 === "\\") {
                s6++;
                continue;
              }
              if (quotes.indexOf(s6) !== -1) {
                i6 = getClosingQuote(str, s6, i6 + 1);
                continue;
              }
              e12 = expected();
              if (stack.length && str.indexOf(e12, i6 + 1) === -1) {
                break;
              }
              if (brackets[s6]) {
                stack.push(s6);
                continue;
              }
              if (e12 === s6) {
                stack.pop();
              }
            }
          }
          closeIdx = i6;
          if (closeIdx === -1) {
            arr[arr.length - 1] += ch;
            continue;
          }
          ch = str.slice(idx, closeIdx + 1);
          tok.val = ch;
          tok.idx = idx = closeIdx;
        }
        if (quotes.indexOf(ch) !== -1) {
          closeIdx = getClosingQuote(str, ch, idx + 1);
          if (closeIdx === -1) {
            arr[arr.length - 1] += ch;
            continue;
          }
          if (keepQuotes(ch, opts) === true) {
            ch = str.slice(idx, closeIdx + 1);
          } else {
            ch = str.slice(idx + 1, closeIdx);
          }
          tok.val = ch;
          tok.idx = idx = closeIdx;
        }
        if (typeof fn === "function") {
          fn(tok, tokens);
          ch = tok.val;
          idx = tok.idx;
        }
        if (tok.val === sep && tok.split !== false) {
          arr.push("");
          continue;
        }
        arr[arr.length - 1] += tok.val;
      }
      return arr;
    };
    function getClosingQuote(str, ch, i6, brackets) {
      var idx = str.indexOf(ch, i6);
      if (str.charAt(idx - 1) === "\\") {
        return getClosingQuote(str, ch, idx + 1);
      }
      return idx;
    }
    function keepQuotes(ch, opts) {
      if (opts.keepDoubleQuotes === true && ch === '"')
        return true;
      if (opts.keepSingleQuotes === true && ch === "'")
        return true;
      return opts.keepQuotes;
    }
    function keepEscaping(opts, str, idx) {
      if (typeof opts.keepEscaping === "function") {
        return opts.keepEscaping(str, idx);
      }
      return opts.keepEscaping === true || str[idx + 1] === "\\";
    }
  }
});

// node_modules/extend-shallow/node_modules/is-extendable/index.js
var require_is_extendable2 = __commonJS({
  "node_modules/extend-shallow/node_modules/is-extendable/index.js"(exports, module) {
    "use strict";
    module.exports = function isExtendable(val) {
      return typeof val !== "undefined" && val !== null && (typeof val === "object" || typeof val === "function");
    };
  }
});

// node_modules/extend-shallow/index.js
var require_extend_shallow2 = __commonJS({
  "node_modules/extend-shallow/index.js"(exports, module) {
    "use strict";
    var isObject3 = require_is_extendable2();
    module.exports = function extend2(o9) {
      if (!isObject3(o9)) {
        o9 = {};
      }
      var len = arguments.length;
      for (var i6 = 1; i6 < len; i6++) {
        var obj = arguments[i6];
        if (isObject3(obj)) {
          assign(o9, obj);
        }
      }
      return o9;
    };
    function assign(a5, b5) {
      for (var key in b5) {
        if (hasOwn(b5, key)) {
          a5[key] = b5[key];
        }
      }
    }
    function hasOwn(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }
  }
});

// node_modules/set-value/node_modules/is-extendable/index.js
var require_is_extendable3 = __commonJS({
  "node_modules/set-value/node_modules/is-extendable/index.js"(exports, module) {
    "use strict";
    module.exports = function isExtendable(val) {
      return typeof val !== "undefined" && val !== null && (typeof val === "object" || typeof val === "function");
    };
  }
});

// node_modules/set-value/index.js
var require_set_value = __commonJS({
  "node_modules/set-value/index.js"(exports, module) {
    "use strict";
    var split2 = require_split_string();
    var extend2 = require_extend_shallow2();
    var isPlainObject = require_is_plain_object();
    var isObject3 = require_is_extendable3();
    module.exports = function(obj, prop, val) {
      if (!isObject3(obj)) {
        return obj;
      }
      if (Array.isArray(prop)) {
        prop = [].concat.apply([], prop).join(".");
      }
      if (typeof prop !== "string") {
        return obj;
      }
      var keys = split2(prop, { sep: ".", brackets: true }).filter(isValidKey);
      var len = keys.length;
      var idx = -1;
      var current = obj;
      while (++idx < len) {
        var key = keys[idx];
        if (idx !== len - 1) {
          if (!isObject3(current[key])) {
            current[key] = {};
          }
          current = current[key];
          continue;
        }
        if (isPlainObject(current[key]) && isPlainObject(val)) {
          current[key] = extend2({}, current[key], val);
        } else {
          current[key] = val;
        }
      }
      return obj;
    };
    function isValidKey(key) {
      return key !== "__proto__" && key !== "constructor" && key !== "prototype";
    }
  }
});

// node_modules/merge-value/index.js
var require_merge_value = __commonJS({
  "node_modules/merge-value/index.js"(exports, module) {
    "use strict";
    var isObject3 = require_is_extendable();
    var merge2 = require_mixin_deep();
    var get = require_get_value();
    var set = require_set_value();
    module.exports = function mergeValue(obj, prop, value) {
      if (!isObject3(obj)) {
        throw new TypeError("expected an object");
      }
      if (typeof prop !== "string" || value == null) {
        return merge2.apply(null, arguments);
      }
      if (typeof value === "string") {
        set(obj, prop, value);
        return obj;
      }
      var current = get(obj, prop);
      if (isObject3(value) && isObject3(current)) {
        value = merge2({}, current, value);
      }
      set(obj, prop, value);
      return obj;
    };
  }
});

// node_modules/lamina/index.js
var import_react10 = __toESM(require_react());
var import_glsl_tokenizer2 = __toESM(require_string());
var import_glsl_token_descope = __toESM(require_glsl_token_descope());
var import_glsl_token_string2 = __toESM(require_glsl_token_string());
var import_glsl_token_functions2 = __toESM(require_glsl_token_functions());

// node_modules/three-custom-shader-material/vanilla.js
var import_object_hash = __toESM(require_object_hash());
var import_glsl_tokenizer = __toESM(require_string());
var import_glsl_token_string = __toESM(require_glsl_token_string());
var import_glsl_token_functions = __toESM(require_glsl_token_functions());
var keywords = {
  position: "csm_Position",
  positionRaw: "csm_PositionRaw",
  pointSize: "csm_PointSize",
  fragColor: "csm_FragColor",
  // PBR
  diffuseColor: "csm_DiffuseColor",
  normal: "csm_Normal",
  roughness: "csm_Roughness",
  metalness: "csm_Metalness",
  emissive: "csm_Emissive"
};
var defaultPatchMap = {
  // VERT
  [`${keywords.normal}`]: {
    "#include <beginnormal_vertex>": `
    vec3 objectNormal = ${keywords.normal};
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `
  },
  [`${keywords.position}`]: {
    "#include <begin_vertex>": `
    vec3 transformed = ${keywords.position};
  `
  },
  [`${keywords.positionRaw}`]: {
    "#include <begin_vertex>": `
    vec4 csm_positionUnprojected = ${keywords.positionRaw};
    mat4x4 csm_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_unprojectMatrix = csm_unprojectMatrix * instanceMatrix;
    #endif
    csm_positionUnprojected = inverse(csm_unprojectMatrix) * csm_positionUnprojected;
    vec3 transformed = csm_positionUnprojected.xyz;
  `
  },
  [`${keywords.pointSize}`]: {
    "gl_PointSize = size;": `
    gl_PointSize = ${keywords.pointSize};
    `
  },
  // FRAG
  [`${keywords.diffuseColor}`]: {
    "#include <color_fragment>": `
    #include <color_fragment>
    diffuseColor = ${keywords.diffuseColor};
  `
  },
  [`${keywords.fragColor}`]: {
    "#include <dithering_fragment>": `
    #include <dithering_fragment>
    gl_FragColor  = ${keywords.fragColor};
  `
  },
  [`${keywords.emissive}`]: {
    "vec3 totalEmissiveRadiance = emissive;": `
    vec3 totalEmissiveRadiance = ${keywords.emissive};
    `
  },
  [`${keywords.roughness}`]: {
    "#include <roughnessmap_fragment>": `
    #include <roughnessmap_fragment>
    roughnessFactor = ${keywords.roughness};
    `
  },
  [`${keywords.metalness}`]: {
    "#include <metalnessmap_fragment>": `
    #include <metalnessmap_fragment>
    metalnessFactor = ${keywords.metalness};
    `
  }
};
var shaderMaterial_PatchMap = {
  // VERT
  [`${keywords.position}`]: {
    "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );": `
    gl_Position = projectionMatrix * modelViewMatrix * vec4( ${keywords.position}, 1.0 );
  `
  },
  [`${keywords.positionRaw}`]: {
    "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );": `
    gl_Position = ${keywords.position};
  `
  },
  // FRAG
  [`${keywords.diffuseColor}`]: {
    "gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );": `
    gl_FragColor = ${keywords.diffuseColor};
  `
  },
  [`${keywords.fragColor}`]: {
    "gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );": `
    gl_FragColor = ${keywords.fragColor};
  `
  }
};
var defaultDefinitions = (
  /* glsl */
  `

#ifdef IS_VERTEX
    vec3 csm_Position = position;
    vec4 csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4(position, 1.);
    vec3 csm_Normal = normal;
#else
    #if defined IS_SHADERMATERIAL || defined IS_MESHDEPTHMATERIAL || defined IS_MESHNORMALMATERIAL
        vec4 csm_DiffuseColor = vec4(1., 0., 1., 1.);
        vec4 csm_FragColor = vec4(1., 0., 1., 1.);
    #else
        #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
            vec3 csm_Emissive = emissive;
            float csm_Roughness = roughness;
            float csm_Metalness = metalness;
        #endif
        
        #ifdef USE_MAP
            vec4 _csm_sampledDiffuseColor = texture2D(map, vUv);

            #ifdef DECODE_VIDEO_TEXTURE
            // inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)
            _csm_sampledDiffuseColor = vec4(mix(pow(_csm_sampledDiffuseColor.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), _csm_sampledDiffuseColor.rgb * 0.0773993808, vec3(lessThanEqual(_csm_sampledDiffuseColor.rgb, vec3(0.04045)))), _csm_sampledDiffuseColor.w);
            #endif

            vec4 csm_DiffuseColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
            vec4 csm_FragColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
        #else
            vec4 csm_DiffuseColor = vec4(diffuse, opacity);
            vec4 csm_FragColor = vec4(diffuse, opacity);
        #endif
    #endif
#endif
`
);
var replaceAll = (str, find, rep) => str.split(find).join(rep);
var escapeRegExpMatch = function(s6) {
  return s6.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
};
var isExactMatch = (str, match) => {
  return new RegExp(`\\b${escapeRegExpMatch(match)}\\b`).test(str);
};
function isConstructor(f5) {
  try {
    new f5();
  } catch (err) {
    if (err.message.indexOf("is not a constructor") >= 0) {
      return false;
    }
  }
  return true;
}
var CustomShaderMaterial = class extends Material {
  constructor({
    baseMaterial,
    fragmentShader,
    vertexShader,
    uniforms,
    patchMap,
    cacheKey,
    ...opts
  }) {
    let base;
    if (isConstructor(baseMaterial)) {
      base = new baseMaterial(opts);
    } else {
      base = baseMaterial;
      Object.assign(base, opts);
    }
    if (base.type === "RawShaderMaterial") {
      throw new Error("CustomShaderMaterial does not support RawShaderMaterial");
    }
    super();
    this.uniforms = uniforms || {};
    this._customPatchMap = patchMap || {};
    this._fs = fragmentShader || "";
    this._vs = vertexShader || "";
    this._cacheKey = cacheKey;
    this._base = baseMaterial;
    this._type = base.type;
    this._instanceID = MathUtils.generateUUID();
    for (const key in base) {
      let k5 = key;
      if (key.startsWith("_")) {
        k5 = key.split("_")[1];
      }
      if (this[k5] === void 0)
        this[k5] = 0;
      this[k5] = base[k5];
    }
    this.update({
      fragmentShader,
      vertexShader,
      uniforms,
      cacheKey
    });
  }
  update(opts) {
    const uniforms = (opts == null ? void 0 : opts.uniforms) || {};
    const fragmentShader = (opts == null ? void 0 : opts.fragmentShader) || this._fs;
    const vertexShader = (opts == null ? void 0 : opts.vertexShader) || this._vs;
    const serializedUniforms = Object.values(uniforms).reduce((prev, {
      value
    }) => {
      return prev + JSON.stringify(value);
    }, "");
    this.uuid = (opts == null ? void 0 : opts.cacheKey == null ? void 0 : opts.cacheKey()) || (0, import_object_hash.default)([fragmentShader, vertexShader, serializedUniforms, this._instanceID]);
    this.generateMaterial({
      fragmentShader,
      vertexShader,
      uniforms
    });
  }
  clone() {
    const c6 = new this.constructor({
      baseMaterial: this._base,
      fragmentShader: this._fs,
      vertexShader: this._vs,
      patchMap: this._customPatchMap,
      uniforms: this.uniforms,
      cacheKey: this._cacheKey
    });
    for (const key in this) {
      if (key === "uuid")
        continue;
      c6[key] = this[key];
    }
    return c6;
  }
  generateMaterial({
    fragmentShader,
    vertexShader,
    uniforms
  }) {
    const parsedFragmentShader = this.parseShader(fragmentShader);
    const parsedVertexShader = this.parseShader(vertexShader);
    this.uniforms = uniforms || {};
    this.customProgramCacheKey = () => {
      return this.uuid;
    };
    this.onBeforeCompile = (shader) => {
      if (parsedFragmentShader) {
        const patchedFragmentShader = this.patchShader(parsedFragmentShader, shader.fragmentShader);
        shader.fragmentShader = this.getMaterialDefine() + patchedFragmentShader;
      }
      if (parsedVertexShader) {
        const patchedVertexShader = this.patchShader(parsedVertexShader, shader.vertexShader);
        shader.vertexShader = "#define IS_VERTEX;\n" + patchedVertexShader;
        shader.vertexShader = this.getMaterialDefine() + shader.vertexShader;
      }
      shader.uniforms = {
        ...shader.uniforms,
        ...this.uniforms
      };
      this.uniforms = shader.uniforms;
    };
    this.needsUpdate = true;
  }
  getMaterialDefine() {
    return `#define IS_${this._type.toUpperCase()};
`;
  }
  getPatchMapForMaterial() {
    switch (this._type) {
      case "ShaderMaterial":
        return shaderMaterial_PatchMap;
      default:
        return defaultPatchMap;
    }
  }
  patchShader(customShader, shader) {
    let patchedShader = shader;
    const patchMap = {
      ...this.getPatchMapForMaterial(),
      ...this._customPatchMap
    };
    Object.keys(patchMap).forEach((name) => {
      Object.keys(patchMap[name]).forEach((key) => {
        if (isExactMatch(customShader.main, name)) {
          patchedShader = replaceAll(patchedShader, key, patchMap[name][key]);
        }
      });
    });
    patchedShader = patchedShader.replace("void main() {", `
          ${customShader.header}
          void main() {
            ${defaultDefinitions}
            ${customShader.main}
          `);
    patchedShader = customShader.defines + patchedShader;
    return patchedShader;
  }
  parseShader(shader) {
    if (!shader)
      return;
    const s6 = shader.replace(/\/\*\*(.*?)\*\/|\/\/(.*?)\n/gm, "");
    const tokens = (0, import_glsl_tokenizer.default)(s6);
    const funcs = (0, import_glsl_token_functions.default)(tokens);
    const mainIndex = funcs.map((e12) => {
      return e12.name;
    }).indexOf("main");
    const variables = (0, import_glsl_token_string.default)(tokens.slice(0, mainIndex >= 0 ? funcs[mainIndex].outer[0] : void 0));
    const mainBody = mainIndex >= 0 ? this.getShaderFromIndex(tokens, funcs[mainIndex].body) : "";
    return {
      defines: "",
      header: variables,
      main: mainBody
    };
  }
  getShaderFromIndex(tokens, index) {
    return (0, import_glsl_token_string.default)(tokens.slice(index[0], index[1]));
  }
};

// node_modules/lamina/index.js
var import_client = __toESM(require_client());

// node_modules/leva/dist/vector-plugin-6f82aee9.esm.js
var import_react_dom3 = __toESM(require_react_dom());
var import_react2 = __toESM(require_react());

// node_modules/@radix-ui/react-compose-refs/dist/index.module.js
var o = __toESM(require_react());
function composeRefs(...o9) {
  return (e12) => o9.forEach((o10) => function(o11, e13) {
    "function" == typeof o11 ? o11(e13) : null != o11 && (o11.current = e13);
  }(o10, e12));
}
function useComposedRefs(...e12) {
  return o.useCallback(composeRefs(...e12), e12);
}

// node_modules/@radix-ui/react-slot/dist/index.module.js
var t = __toESM(require_react());
var Slot = t.forwardRef((e12, o9) => {
  const { children: a5, ...s6 } = e12;
  return t.Children.toArray(a5).some(l) ? t.createElement(t.Fragment, null, t.Children.map(a5, (e13) => l(e13) ? t.createElement(n, _extends({}, s6, { ref: o9 }), e13.props.children) : e13)) : t.createElement(n, _extends({}, s6, { ref: o9 }), a5);
});
Slot.displayName = "Slot";
var n = t.forwardRef((r14, n6) => {
  const { children: l6, ...a5 } = r14;
  return t.isValidElement(l6) ? t.cloneElement(l6, { ...o2(a5, l6.props), ref: composeRefs(n6, l6.ref) }) : t.Children.count(l6) > 1 ? t.Children.only(null) : null;
});
n.displayName = "SlotClone";
var Slottable = ({ children: e12 }) => t.createElement(t.Fragment, null, e12);
function l(e12) {
  return t.isValidElement(e12) && e12.type === Slottable;
}
function o2(e12, t12) {
  const r14 = { ...t12 };
  for (const n6 in t12) {
    const l6 = e12[n6], o9 = t12[n6];
    /^on[A-Z]/.test(n6) ? r14[n6] = (...e13) => {
      null == o9 || o9(...e13), null == l6 || l6(...e13);
    } : "style" === n6 ? r14[n6] = { ...l6, ...o9 } : "className" === n6 && (r14[n6] = [l6, o9].filter(Boolean).join(" "));
  }
  return { ...e12, ...r14 };
}

// node_modules/@radix-ui/react-portal/node_modules/@radix-ui/react-primitive/dist/index.module.js
var r = __toESM(require_react());
var Primitive = ["a", "button", "div", "h2", "h3", "img", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((o9, i6) => ({ ...o9, [i6]: r.forwardRef((o10, m5) => {
  const { asChild: a5, ...s6 } = o10, n6 = a5 ? Slot : i6;
  return r.useEffect(() => {
    window[Symbol.for("radix-ui")] = true;
  }, []), r.createElement(n6, _extends({}, s6, { ref: m5 }));
}) }), {});

// node_modules/@radix-ui/react-use-layout-effect/dist/index.module.js
var o3 = __toESM(require_react());
var useLayoutEffect2 = Boolean(null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) ? o3.useLayoutEffect : () => {
};

// node_modules/@radix-ui/react-portal/dist/index.module.js
var import_react_dom = __toESM(require_react_dom());
var r2 = __toESM(require_react());
var Portal = r2.forwardRef((a5, i6) => {
  var n6, d5;
  const { containerRef: s6, style: u5, ...c6 } = a5, m5 = null !== (n6 = null == s6 ? void 0 : s6.current) && void 0 !== n6 ? n6 : null === globalThis || void 0 === globalThis || null === (d5 = globalThis.document) || void 0 === d5 ? void 0 : d5.body, [, f5] = r2.useState({});
  return useLayoutEffect2(() => {
    f5({});
  }, []), m5 ? import_react_dom.default.createPortal(r2.createElement(Primitive.div, _extends({ "data-radix-portal": "" }, c6, { ref: i6, style: m5 === document.body ? { position: "absolute", top: 0, left: 0, zIndex: 2147483647, ...u5 } : void 0 })), m5) : null;
});
var UnstablePortal = r2.forwardRef((t12, a5) => {
  var i6;
  const { container: n6 = null === globalThis || void 0 === globalThis || null === (i6 = globalThis.document) || void 0 === i6 ? void 0 : i6.body, ...d5 } = t12;
  return n6 ? import_react_dom.default.createPortal(r2.createElement(Primitive.div, _extends({}, d5, { ref: a5 })), n6) : null;
});
var Root = Portal;

// node_modules/dequal/lite/index.mjs
var has = Object.prototype.hasOwnProperty;
function dequal(foo, bar) {
  var ctor, len;
  if (foo === bar)
    return true;
  if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
    if (ctor === Date)
      return foo.getTime() === bar.getTime();
    if (ctor === RegExp)
      return foo.toString() === bar.toString();
    if (ctor === Array) {
      if ((len = foo.length) === bar.length) {
        while (len-- && dequal(foo[len], bar[len]))
          ;
      }
      return len === -1;
    }
    if (!ctor || typeof foo === "object") {
      len = 0;
      for (ctor in foo) {
        if (has.call(foo, ctor) && ++len && !has.call(bar, ctor))
          return false;
        if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor]))
          return false;
      }
      return Object.keys(bar).length === len;
    }
  }
  return foo !== foo && bar !== bar;
}

// node_modules/v8n/dist/v8n.esm.js
var Rule = function Rule2(name, fn, args, modifiers) {
  this.name = name;
  this.fn = fn;
  this.args = args;
  this.modifiers = modifiers;
};
Rule.prototype._test = function _test(value) {
  var fn = this.fn;
  try {
    testAux(this.modifiers.slice(), fn, this)(value);
  } catch (ex) {
    fn = function() {
      return false;
    };
  }
  try {
    return testAux(this.modifiers.slice(), fn, this)(value);
  } catch (ex$1) {
    return false;
  }
};
Rule.prototype._check = function _check(value) {
  try {
    testAux(this.modifiers.slice(), this.fn, this)(value);
  } catch (ex) {
    if (testAux(this.modifiers.slice(), function(it) {
      return it;
    }, this)(false)) {
      return;
    }
  }
  if (!testAux(this.modifiers.slice(), this.fn, this)(value)) {
    throw null;
  }
};
Rule.prototype._testAsync = function _testAsync(value) {
  var this$1 = this;
  return new Promise(function(resolve, reject) {
    testAsyncAux(
      this$1.modifiers.slice(),
      this$1.fn,
      this$1
    )(value).then(function(valid) {
      if (valid) {
        resolve(value);
      } else {
        reject(null);
      }
    }).catch(function(ex) {
      return reject(ex);
    });
  });
};
function pickFn(fn, variant) {
  if (variant === void 0)
    variant = "simple";
  return typeof fn === "object" ? fn[variant] : fn;
}
function testAux(modifiers, fn, rule) {
  if (modifiers.length) {
    var modifier = modifiers.shift();
    var nextFn = testAux(modifiers, fn, rule);
    return modifier.perform(nextFn, rule);
  } else {
    return pickFn(fn);
  }
}
function testAsyncAux(modifiers, fn, rule) {
  if (modifiers.length) {
    var modifier = modifiers.shift();
    var nextFn = testAsyncAux(modifiers, fn, rule);
    return modifier.performAsync(nextFn, rule);
  } else {
    return function(value) {
      return Promise.resolve(pickFn(fn, "async")(value));
    };
  }
}
var Modifier = function Modifier2(name, perform, performAsync) {
  this.name = name;
  this.perform = perform;
  this.performAsync = performAsync;
};
var ValidationError = function(Error2) {
  function ValidationError2(rule, value, cause, target) {
    var remaining = [], len = arguments.length - 4;
    while (len-- > 0)
      remaining[len] = arguments[len + 4];
    Error2.call(this, remaining);
    if (Error2.captureStackTrace) {
      Error2.captureStackTrace(this, ValidationError2);
    }
    this.rule = rule;
    this.value = value;
    this.cause = cause;
    this.target = target;
  }
  if (Error2)
    ValidationError2.__proto__ = Error2;
  ValidationError2.prototype = Object.create(Error2 && Error2.prototype);
  ValidationError2.prototype.constructor = ValidationError2;
  return ValidationError2;
}(Error);
var Context = function Context2(chain, nextRuleModifiers) {
  if (chain === void 0)
    chain = [];
  if (nextRuleModifiers === void 0)
    nextRuleModifiers = [];
  this.chain = chain;
  this.nextRuleModifiers = nextRuleModifiers;
};
Context.prototype._applyRule = function _applyRule(ruleFn, name) {
  var this$1 = this;
  return function() {
    var args = [], len = arguments.length;
    while (len--)
      args[len] = arguments[len];
    this$1.chain.push(
      new Rule(name, ruleFn.apply(this$1, args), args, this$1.nextRuleModifiers)
    );
    this$1.nextRuleModifiers = [];
    return this$1;
  };
};
Context.prototype._applyModifier = function _applyModifier(modifier, name) {
  this.nextRuleModifiers.push(
    new Modifier(name, modifier.simple, modifier.async)
  );
  return this;
};
Context.prototype._clone = function _clone() {
  return new Context(this.chain.slice(), this.nextRuleModifiers.slice());
};
Context.prototype.test = function test(value) {
  return this.chain.every(function(rule) {
    return rule._test(value);
  });
};
Context.prototype.testAll = function testAll(value) {
  var err = [];
  this.chain.forEach(function(rule) {
    try {
      rule._check(value);
    } catch (ex) {
      err.push(new ValidationError(rule, value, ex));
    }
  });
  return err;
};
Context.prototype.check = function check(value) {
  this.chain.forEach(function(rule) {
    try {
      rule._check(value);
    } catch (ex) {
      throw new ValidationError(rule, value, ex);
    }
  });
};
Context.prototype.testAsync = function testAsync(value) {
  var this$1 = this;
  return new Promise(function(resolve, reject) {
    executeAsyncRules(value, this$1.chain.slice(), resolve, reject);
  });
};
function executeAsyncRules(value, rules, resolve, reject) {
  if (rules.length) {
    var rule = rules.shift();
    rule._testAsync(value).then(
      function() {
        executeAsyncRules(value, rules, resolve, reject);
      },
      function(cause) {
        reject(new ValidationError(rule, value, cause));
      }
    );
  } else {
    resolve(value);
  }
}
var consideredEmpty = function(value, considerTrimmedEmptyString) {
  if (considerTrimmedEmptyString && typeof value === "string" && value.trim().length === 0) {
    return true;
  }
  return value === void 0 || value === null;
};
function optional(validation, considerTrimmedEmptyString) {
  if (considerTrimmedEmptyString === void 0)
    considerTrimmedEmptyString = false;
  return {
    simple: function(value) {
      return consideredEmpty(value, considerTrimmedEmptyString) || validation.check(value) === void 0;
    },
    async: function(value) {
      return consideredEmpty(value, considerTrimmedEmptyString) || validation.testAsync(value);
    }
  };
}
function v8n() {
  return typeof Proxy !== "undefined" ? proxyContext(new Context()) : proxylessContext(new Context());
}
var customRules = {};
v8n.extend = function(newRules) {
  Object.assign(customRules, newRules);
};
v8n.clearCustomRules = function() {
  customRules = {};
};
function proxyContext(context) {
  return new Proxy(context, {
    get: function get(obj, prop) {
      if (prop in obj) {
        return obj[prop];
      }
      var newContext = proxyContext(context._clone());
      if (prop in availableModifiers) {
        return newContext._applyModifier(availableModifiers[prop], prop);
      }
      if (prop in customRules) {
        return newContext._applyRule(customRules[prop], prop);
      }
      if (prop in availableRules) {
        return newContext._applyRule(availableRules[prop], prop);
      }
    }
  });
}
function proxylessContext(context) {
  var addRuleSet = function(ruleSet, targetContext) {
    Object.keys(ruleSet).forEach(function(prop) {
      targetContext[prop] = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var newContext = proxylessContext(targetContext._clone());
        var contextWithRuleApplied = newContext._applyRule(
          ruleSet[prop],
          prop
        ).apply(void 0, args);
        return contextWithRuleApplied;
      };
    });
    return targetContext;
  };
  var contextWithAvailableRules = addRuleSet(availableRules, context);
  var contextWithAllRules = addRuleSet(
    customRules,
    contextWithAvailableRules
  );
  Object.keys(availableModifiers).forEach(function(prop) {
    Object.defineProperty(contextWithAllRules, prop, {
      get: function() {
        var newContext = proxylessContext(contextWithAllRules._clone());
        return newContext._applyModifier(availableModifiers[prop], prop);
      }
    });
  });
  return contextWithAllRules;
}
var availableModifiers = {
  not: {
    simple: function(fn) {
      return function(value) {
        return !fn(value);
      };
    },
    async: function(fn) {
      return function(value) {
        return Promise.resolve(fn(value)).then(function(result) {
          return !result;
        }).catch(function() {
          return true;
        });
      };
    }
  },
  some: {
    simple: function(fn) {
      return function(value) {
        return split(value).some(function(item) {
          try {
            return fn(item);
          } catch (ex) {
            return false;
          }
        });
      };
    },
    async: function(fn) {
      return function(value) {
        return Promise.all(
          split(value).map(function(item) {
            try {
              return fn(item).catch(function() {
                return false;
              });
            } catch (ex) {
              return false;
            }
          })
        ).then(function(result) {
          return result.some(Boolean);
        });
      };
    }
  },
  every: {
    simple: function(fn) {
      return function(value) {
        return value !== false && split(value).every(fn);
      };
    },
    async: function(fn) {
      return function(value) {
        return Promise.all(split(value).map(fn)).then(function(result) {
          return result.every(Boolean);
        });
      };
    }
  },
  strict: {
    simple: function(fn, rule) {
      return function(value) {
        if (isSchemaRule(rule) && value && typeof value === "object") {
          return Object.keys(rule.args[0]).length === Object.keys(value).length && fn(value);
        }
        return fn(value);
      };
    },
    async: function(fn, rule) {
      return function(value) {
        return Promise.resolve(fn(value)).then(function(result) {
          if (isSchemaRule(rule) && value && typeof value === "object") {
            return Object.keys(rule.args[0]).length === Object.keys(value).length && result;
          }
          return result;
        }).catch(function() {
          return false;
        });
      };
    }
  }
};
function isSchemaRule(rule) {
  return rule && rule.name === "schema" && rule.args.length > 0 && typeof rule.args[0] === "object";
}
function split(value) {
  if (typeof value === "string") {
    return value.split("");
  }
  return value;
}
var availableRules = {
  // Value
  equal: function(expected) {
    return function(value) {
      return value == expected;
    };
  },
  exact: function(expected) {
    return function(value) {
      return value === expected;
    };
  },
  // Types
  number: function(allowInfinite) {
    if (allowInfinite === void 0)
      allowInfinite = true;
    return function(value) {
      return typeof value === "number" && (allowInfinite || isFinite(value));
    };
  },
  integer: function() {
    return function(value) {
      var isInteger = Number.isInteger || isIntegerPolyfill;
      return isInteger(value);
    };
  },
  numeric: function() {
    return function(value) {
      return !isNaN(parseFloat(value)) && isFinite(value);
    };
  },
  string: function() {
    return testType("string");
  },
  boolean: function() {
    return testType("boolean");
  },
  undefined: function() {
    return testType("undefined");
  },
  null: function() {
    return testType("null");
  },
  array: function() {
    return testType("array");
  },
  object: function() {
    return testType("object");
  },
  instanceOf: function(instance) {
    return function(value) {
      return value instanceof instance;
    };
  },
  // Pattern
  pattern: function(expected) {
    return function(value) {
      return expected.test(value);
    };
  },
  lowercase: function() {
    return function(value) {
      return typeof value === "boolean" || value === value.toLowerCase() && value.trim() !== "";
    };
  },
  uppercase: function() {
    return function(value) {
      return value === value.toUpperCase() && value.trim() !== "";
    };
  },
  vowel: function() {
    return function(value) {
      return /^[aeiou]+$/i.test(value);
    };
  },
  consonant: function() {
    return function(value) {
      return /^(?=[^aeiou])([a-z]+)$/i.test(value);
    };
  },
  // Value at
  first: function(expected) {
    return function(value) {
      return value[0] == expected;
    };
  },
  last: function(expected) {
    return function(value) {
      return value[value.length - 1] == expected;
    };
  },
  // Length
  empty: function() {
    return function(value) {
      return value.length === 0;
    };
  },
  length: function(min, max) {
    return function(value) {
      return value.length >= min && value.length <= (max || min);
    };
  },
  minLength: function(min) {
    return function(value) {
      return value.length >= min;
    };
  },
  maxLength: function(max) {
    return function(value) {
      return value.length <= max;
    };
  },
  // Range
  negative: function() {
    return function(value) {
      return value < 0;
    };
  },
  positive: function() {
    return function(value) {
      return value >= 0;
    };
  },
  between: function(a5, b5) {
    return function(value) {
      return value >= a5 && value <= b5;
    };
  },
  range: function(a5, b5) {
    return function(value) {
      return value >= a5 && value <= b5;
    };
  },
  lessThan: function(n6) {
    return function(value) {
      return value < n6;
    };
  },
  lessThanOrEqual: function(n6) {
    return function(value) {
      return value <= n6;
    };
  },
  greaterThan: function(n6) {
    return function(value) {
      return value > n6;
    };
  },
  greaterThanOrEqual: function(n6) {
    return function(value) {
      return value >= n6;
    };
  },
  // Divisible
  even: function() {
    return function(value) {
      return value % 2 === 0;
    };
  },
  odd: function() {
    return function(value) {
      return value % 2 !== 0;
    };
  },
  includes: function(expected) {
    return function(value) {
      return ~value.indexOf(expected);
    };
  },
  schema: function(schema3) {
    return testSchema(schema3);
  },
  // branching
  passesAnyOf: function() {
    var validations = [], len = arguments.length;
    while (len--)
      validations[len] = arguments[len];
    return function(value) {
      return validations.some(function(validation) {
        return validation.test(value);
      });
    };
  },
  optional
};
function testType(expected) {
  return function(value) {
    return Array.isArray(value) && expected === "array" || value === null && expected === "null" || typeof value === expected;
  };
}
function isIntegerPolyfill(value) {
  return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
}
function testSchema(schema3) {
  return {
    simple: function(value) {
      var causes = [];
      Object.keys(schema3).forEach(function(key) {
        var nestedValidation = schema3[key];
        try {
          nestedValidation.check((value || {})[key]);
        } catch (ex) {
          ex.target = key;
          causes.push(ex);
        }
      });
      if (causes.length > 0) {
        throw causes;
      }
      return true;
    },
    async: function(value) {
      var causes = [];
      var nested = Object.keys(schema3).map(function(key) {
        var nestedValidation = schema3[key];
        return nestedValidation.testAsync((value || {})[key]).catch(function(ex) {
          ex.target = key;
          causes.push(ex);
        });
      });
      return Promise.all(nested).then(function() {
        if (causes.length > 0) {
          throw causes;
        }
        return true;
      });
    }
  };
}
var v8n_esm_default = v8n;

// node_modules/@stitches/react/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var e2 = "colors";
var t2 = "sizes";
var r3 = "space";
var n2 = { gap: r3, gridGap: r3, columnGap: r3, gridColumnGap: r3, rowGap: r3, gridRowGap: r3, inset: r3, insetBlock: r3, insetBlockEnd: r3, insetBlockStart: r3, insetInline: r3, insetInlineEnd: r3, insetInlineStart: r3, margin: r3, marginTop: r3, marginRight: r3, marginBottom: r3, marginLeft: r3, marginBlock: r3, marginBlockEnd: r3, marginBlockStart: r3, marginInline: r3, marginInlineEnd: r3, marginInlineStart: r3, padding: r3, paddingTop: r3, paddingRight: r3, paddingBottom: r3, paddingLeft: r3, paddingBlock: r3, paddingBlockEnd: r3, paddingBlockStart: r3, paddingInline: r3, paddingInlineEnd: r3, paddingInlineStart: r3, top: r3, right: r3, bottom: r3, left: r3, scrollMargin: r3, scrollMarginTop: r3, scrollMarginRight: r3, scrollMarginBottom: r3, scrollMarginLeft: r3, scrollMarginX: r3, scrollMarginY: r3, scrollMarginBlock: r3, scrollMarginBlockEnd: r3, scrollMarginBlockStart: r3, scrollMarginInline: r3, scrollMarginInlineEnd: r3, scrollMarginInlineStart: r3, scrollPadding: r3, scrollPaddingTop: r3, scrollPaddingRight: r3, scrollPaddingBottom: r3, scrollPaddingLeft: r3, scrollPaddingX: r3, scrollPaddingY: r3, scrollPaddingBlock: r3, scrollPaddingBlockEnd: r3, scrollPaddingBlockStart: r3, scrollPaddingInline: r3, scrollPaddingInlineEnd: r3, scrollPaddingInlineStart: r3, fontSize: "fontSizes", background: e2, backgroundColor: e2, backgroundImage: e2, borderImage: e2, border: e2, borderBlock: e2, borderBlockEnd: e2, borderBlockStart: e2, borderBottom: e2, borderBottomColor: e2, borderColor: e2, borderInline: e2, borderInlineEnd: e2, borderInlineStart: e2, borderLeft: e2, borderLeftColor: e2, borderRight: e2, borderRightColor: e2, borderTop: e2, borderTopColor: e2, caretColor: e2, color: e2, columnRuleColor: e2, fill: e2, outline: e2, outlineColor: e2, stroke: e2, textDecorationColor: e2, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: t2, minBlockSize: t2, maxBlockSize: t2, inlineSize: t2, minInlineSize: t2, maxInlineSize: t2, width: t2, minWidth: t2, maxWidth: t2, height: t2, minHeight: t2, maxHeight: t2, flexBasis: t2, gridTemplateColumns: t2, gridTemplateRows: t2, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" };
var i = (e12, t12) => "function" == typeof t12 ? { "()": Function.prototype.toString.call(t12) } : t12;
var o4 = () => {
  const e12 = /* @__PURE__ */ Object.create(null);
  return (t12, r14, ...n6) => {
    const o9 = ((e13) => JSON.stringify(e13, i))(t12);
    return o9 in e12 ? e12[o9] : e12[o9] = r14(t12, ...n6);
  };
};
var l2 = Symbol.for("sxs.internal");
var s = (e12, t12) => Object.defineProperties(e12, Object.getOwnPropertyDescriptors(t12));
var a = (e12) => {
  for (const t12 in e12)
    return true;
  return false;
};
var { hasOwnProperty: c } = Object.prototype;
var d = (e12) => e12.includes("-") ? e12 : e12.replace(/[A-Z]/g, (e13) => "-" + e13.toLowerCase());
var g = /\s+(?![^()]*\))/;
var p = (e12) => (t12) => e12(..."string" == typeof t12 ? String(t12).split(g) : [t12]);
var u = { appearance: (e12) => ({ WebkitAppearance: e12, appearance: e12 }), backfaceVisibility: (e12) => ({ WebkitBackfaceVisibility: e12, backfaceVisibility: e12 }), backdropFilter: (e12) => ({ WebkitBackdropFilter: e12, backdropFilter: e12 }), backgroundClip: (e12) => ({ WebkitBackgroundClip: e12, backgroundClip: e12 }), boxDecorationBreak: (e12) => ({ WebkitBoxDecorationBreak: e12, boxDecorationBreak: e12 }), clipPath: (e12) => ({ WebkitClipPath: e12, clipPath: e12 }), content: (e12) => ({ content: e12.includes('"') || e12.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e12) ? e12 : `"${e12}"` }), hyphens: (e12) => ({ WebkitHyphens: e12, hyphens: e12 }), maskImage: (e12) => ({ WebkitMaskImage: e12, maskImage: e12 }), maskSize: (e12) => ({ WebkitMaskSize: e12, maskSize: e12 }), tabSize: (e12) => ({ MozTabSize: e12, tabSize: e12 }), textSizeAdjust: (e12) => ({ WebkitTextSizeAdjust: e12, textSizeAdjust: e12 }), userSelect: (e12) => ({ WebkitUserSelect: e12, userSelect: e12 }), marginBlock: p((e12, t12) => ({ marginBlockStart: e12, marginBlockEnd: t12 || e12 })), marginInline: p((e12, t12) => ({ marginInlineStart: e12, marginInlineEnd: t12 || e12 })), maxSize: p((e12, t12) => ({ maxBlockSize: e12, maxInlineSize: t12 || e12 })), minSize: p((e12, t12) => ({ minBlockSize: e12, minInlineSize: t12 || e12 })), paddingBlock: p((e12, t12) => ({ paddingBlockStart: e12, paddingBlockEnd: t12 || e12 })), paddingInline: p((e12, t12) => ({ paddingInlineStart: e12, paddingInlineEnd: t12 || e12 })) };
var h = /([\d.]+)([^]*)/;
var f = (e12, t12) => e12.length ? e12.reduce((e13, r14) => (e13.push(...t12.map((e14) => e14.includes("&") ? e14.replace(/&/g, /[ +>|~]/.test(r14) && /&.*&/.test(e14) ? `:is(${r14})` : r14) : r14 + " " + e14)), e13), []) : t12;
var m = (e12, t12) => e12 in b && "string" == typeof t12 ? t12.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (t13, r14, n6, i6) => r14 + ("stretch" === n6 ? `-moz-available${i6};${d(e12)}:${r14}-webkit-fill-available` : `-moz-fit-content${i6};${d(e12)}:${r14}fit-content`) + i6) : String(t12);
var b = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 };
var S = (e12) => e12 ? e12 + "-" : "";
var k = (e12, t12, r14) => e12.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (e13, n6, i6, o9, l6) => "$" == o9 == !!i6 ? e13 : (n6 || "--" == o9 ? "calc(" : "") + "var(--" + ("$" === o9 ? S(t12) + (l6.includes("$") ? "" : S(r14)) + l6.replace(/\$/g, "-") : l6) + ")" + (n6 || "--" == o9 ? "*" + (n6 || "") + (i6 || "1") + ")" : ""));
var y = /\s*,\s*(?![^()]*\))/;
var B = Object.prototype.toString;
var $ = (e12, t12, r14, n6, i6) => {
  let o9, l6, s6;
  const a5 = (e13, t13, r15) => {
    let c6, g5;
    const p5 = (e14) => {
      for (c6 in e14) {
        const R3 = 64 === c6.charCodeAt(0), z2 = R3 && Array.isArray(e14[c6]) ? e14[c6] : [e14[c6]];
        for (g5 of z2) {
          const e15 = /[A-Z]/.test($4 = c6) ? $4 : $4.replace(/-[^]/g, (e16) => e16[1].toUpperCase()), z3 = "object" == typeof g5 && g5 && g5.toString === B && (!n6.utils[e15] || !t13.length);
          if (e15 in n6.utils && !z3) {
            const t14 = n6.utils[e15];
            if (t14 !== l6) {
              l6 = t14, p5(t14(g5)), l6 = null;
              continue;
            }
          } else if (e15 in u) {
            const t14 = u[e15];
            if (t14 !== s6) {
              s6 = t14, p5(t14(g5)), s6 = null;
              continue;
            }
          }
          if (R3 && (b5 = c6.slice(1) in n6.media ? "@media " + n6.media[c6.slice(1)] : c6, c6 = b5.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (e16, t14, r16, n7, i7, o10) => {
            const l7 = h.test(t14), s7 = 0.0625 * (l7 ? -1 : 1), [a6, c7] = l7 ? [n7, t14] : [t14, n7];
            return "(" + ("=" === r16[0] ? "" : ">" === r16[0] === l7 ? "max-" : "min-") + a6 + ":" + ("=" !== r16[0] && 1 === r16.length ? c7.replace(h, (e17, t15, n8) => Number(t15) + s7 * (">" === r16 ? 1 : -1) + n8) : c7) + (i7 ? ") and (" + (">" === i7[0] ? "min-" : "max-") + a6 + ":" + (1 === i7.length ? o10.replace(h, (e17, t15, r17) => Number(t15) + s7 * (">" === i7 ? -1 : 1) + r17) : o10) : "") + ")";
          })), z3) {
            const e16 = R3 ? r15.concat(c6) : [...r15], n7 = R3 ? [...t13] : f(t13, c6.split(y));
            void 0 !== o9 && i6(x(...o9)), o9 = void 0, a5(g5, n7, e16);
          } else
            void 0 === o9 && (o9 = [[], t13, r15]), c6 = R3 || 36 !== c6.charCodeAt(0) ? c6 : `--${S(n6.prefix)}${c6.slice(1).replace(/\$/g, "-")}`, g5 = z3 ? g5 : "number" == typeof g5 ? g5 && e15 in I ? String(g5) + "px" : String(g5) : k(m(e15, null == g5 ? "" : g5), n6.prefix, n6.themeMap[e15]), o9[0].push(`${R3 ? `${c6} ` : `${d(c6)}:`}${g5}`);
        }
      }
      var b5, $4;
    };
    p5(e13), void 0 !== o9 && i6(x(...o9)), o9 = void 0;
  };
  a5(e12, t12, r14);
};
var x = (e12, t12, r14) => `${r14.map((e13) => `${e13}{`).join("")}${t12.length ? `${t12.join(",")}{` : ""}${e12.join(";")}${t12.length ? "}" : ""}${Array(r14.length ? r14.length + 1 : 0).join("}")}`;
var I = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 };
var R = (e12) => String.fromCharCode(e12 + (e12 > 25 ? 39 : 97));
var z = (e12) => ((e13) => {
  let t12, r14 = "";
  for (t12 = Math.abs(e13); t12 > 52; t12 = t12 / 52 | 0)
    r14 = R(t12 % 52) + r14;
  return R(t12 % 52) + r14;
})(((e13, t12) => {
  let r14 = t12.length;
  for (; r14; )
    e13 = 33 * e13 ^ t12.charCodeAt(--r14);
  return e13;
})(5381, JSON.stringify(e12)) >>> 0);
var W = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"];
var j = (e12) => {
  if (e12.href && !e12.href.startsWith(location.origin))
    return false;
  try {
    return !!e12.cssRules;
  } catch (e13) {
    return false;
  }
};
var E = (e12) => {
  let t12;
  const r14 = () => {
    const { cssRules: e13 } = t12.sheet;
    return [].map.call(e13, (r15, n7) => {
      const { cssText: i6 } = r15;
      let o9 = "";
      if (i6.startsWith("--sxs"))
        return "";
      if (e13[n7 - 1] && (o9 = e13[n7 - 1].cssText).startsWith("--sxs")) {
        if (!r15.cssRules.length)
          return "";
        for (const e14 in t12.rules)
          if (t12.rules[e14].group === r15)
            return `--sxs{--sxs:${[...t12.rules[e14].cache].join(" ")}}${i6}`;
        return r15.cssRules.length ? `${o9}${i6}` : "";
      }
      return i6;
    }).join("");
  }, n6 = () => {
    if (t12) {
      const { rules: e13, sheet: r15 } = t12;
      if (!r15.deleteRule) {
        for (; 3 === Object(Object(r15.cssRules)[0]).type; )
          r15.cssRules.splice(0, 1);
        r15.cssRules = [];
      }
      for (const t13 in e13)
        delete e13[t13];
    }
    const i6 = Object(e12).styleSheets || [];
    for (const e13 of i6)
      if (j(e13)) {
        for (let i7 = 0, o10 = e13.cssRules; o10[i7]; ++i7) {
          const l7 = Object(o10[i7]);
          if (1 !== l7.type)
            continue;
          const s6 = Object(o10[i7 + 1]);
          if (4 !== s6.type)
            continue;
          ++i7;
          const { cssText: a5 } = l7;
          if (!a5.startsWith("--sxs"))
            continue;
          const c6 = a5.slice(14, -3).trim().split(/\s+/), d5 = W[c6[0]];
          d5 && (t12 || (t12 = { sheet: e13, reset: n6, rules: {}, toString: r14 }), t12.rules[d5] = { group: s6, index: i7, cache: new Set(c6) });
        }
        if (t12)
          break;
      }
    if (!t12) {
      const i7 = (e13, t13) => ({ type: t13, cssRules: [], insertRule(e14, t14) {
        this.cssRules.splice(t14, 0, i7(e14, { import: 3, undefined: 1 }[(e14.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return "@media{}" === e13 ? `@media{${[].map.call(this.cssRules, (e14) => e14.cssText).join("")}}` : e13;
      } });
      t12 = { sheet: e12 ? (e12.head || e12).appendChild(document.createElement("style")).sheet : i7("", "text/css"), rules: {}, reset: n6, toString: r14 };
    }
    const { sheet: o9, rules: l6 } = t12;
    for (let e13 = W.length - 1; e13 >= 0; --e13) {
      const t13 = W[e13];
      if (!l6[t13]) {
        const r15 = W[e13 + 1], n7 = l6[r15] ? l6[r15].index : o9.cssRules.length;
        o9.insertRule("@media{}", n7), o9.insertRule(`--sxs{--sxs:${e13}}`, n7), l6[t13] = { group: o9.cssRules[n7 + 1], index: n7, cache: /* @__PURE__ */ new Set([e13]) };
      }
      v(l6[t13]);
    }
  };
  return n6(), t12;
};
var v = (e12) => {
  const t12 = e12.group;
  let r14 = t12.cssRules.length;
  e12.apply = (e13) => {
    try {
      t12.insertRule(e13, r14), ++r14;
    } catch (e14) {
    }
  };
};
var T = Symbol();
var w = o4();
var M = (e12, t12) => w(e12, () => (...r14) => {
  let n6 = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const t13 of r14)
    if (null != t13)
      if (t13[l2]) {
        null == n6.type && (n6.type = t13[l2].type);
        for (const e13 of t13[l2].composers)
          n6.composers.add(e13);
      } else
        t13.constructor !== Object || t13.$$typeof ? null == n6.type && (n6.type = t13) : n6.composers.add(C(t13, e12));
  return null == n6.type && (n6.type = "span"), n6.composers.size || n6.composers.add(["PJLV", {}, [], [], {}, []]), P(e12, n6, t12);
});
var C = ({ variants: e12, compoundVariants: t12, defaultVariants: r14, ...n6 }, i6) => {
  const o9 = `${S(i6.prefix)}c-${z(n6)}`, l6 = [], s6 = [], d5 = /* @__PURE__ */ Object.create(null), g5 = [];
  for (const e13 in r14)
    d5[e13] = String(r14[e13]);
  if ("object" == typeof e12 && e12)
    for (const t13 in e12) {
      p5 = d5, u5 = t13, c.call(p5, u5) || (d5[t13] = "undefined");
      const r15 = e12[t13];
      for (const e13 in r15) {
        const n7 = { [t13]: String(e13) };
        "undefined" === String(e13) && g5.push(t13);
        const i7 = r15[e13], o10 = [n7, i7, !a(i7)];
        l6.push(o10);
      }
    }
  var p5, u5;
  if ("object" == typeof t12 && t12)
    for (const e13 of t12) {
      let { css: t13, ...r15 } = e13;
      t13 = "object" == typeof t13 && t13 || {};
      for (const e14 in r15)
        r15[e14] = String(r15[e14]);
      const n7 = [r15, t13, !a(t13)];
      s6.push(n7);
    }
  return [o9, n6, l6, s6, d5, g5];
};
var P = (e12, t12, r14) => {
  const [n6, i6, o9, a5] = L(t12.composers), c6 = "function" == typeof t12.type || t12.type.$$typeof ? ((e13) => {
    function t13() {
      for (let r15 = 0; r15 < t13[T].length; r15++) {
        const [n7, i7] = t13[T][r15];
        e13.rules[n7].apply(i7);
      }
      return t13[T] = [], null;
    }
    return t13[T] = [], t13.rules = {}, W.forEach((e14) => t13.rules[e14] = { apply: (r15) => t13[T].push([e14, r15]) }), t13;
  })(r14) : null, d5 = (c6 || r14).rules, g5 = `.${n6}${i6.length > 1 ? `:where(.${i6.slice(1).join(".")})` : ""}`, p5 = (l6) => {
    l6 = "object" == typeof l6 && l6 || A;
    const { css: s6, ...p6 } = l6, u5 = {};
    for (const e13 in o9)
      if (delete p6[e13], e13 in l6) {
        let t13 = l6[e13];
        "object" == typeof t13 && t13 ? u5[e13] = { "@initial": o9[e13], ...t13 } : (t13 = String(t13), u5[e13] = "undefined" !== t13 || a5.has(e13) ? t13 : o9[e13]);
      } else
        u5[e13] = o9[e13];
    const h5 = /* @__PURE__ */ new Set([...i6]);
    for (const [n7, i7, o10, l7] of t12.composers) {
      r14.rules.styled.cache.has(n7) || (r14.rules.styled.cache.add(n7), $(i7, [`.${n7}`], [], e12, (e13) => {
        d5.styled.apply(e13);
      }));
      const t13 = O(o10, u5, e12.media), s7 = O(l7, u5, e12.media, true);
      for (const i8 of t13)
        if (void 0 !== i8)
          for (const [t14, o11, l8] of i8) {
            const i9 = `${n7}-${z(o11)}-${t14}`;
            h5.add(i9);
            const s8 = (l8 ? r14.rules.resonevar : r14.rules.onevar).cache, a6 = l8 ? d5.resonevar : d5.onevar;
            s8.has(i9) || (s8.add(i9), $(o11, [`.${i9}`], [], e12, (e13) => {
              a6.apply(e13);
            }));
          }
      for (const t14 of s7)
        if (void 0 !== t14)
          for (const [i8, o11] of t14) {
            const t15 = `${n7}-${z(o11)}-${i8}`;
            h5.add(t15), r14.rules.allvar.cache.has(t15) || (r14.rules.allvar.cache.add(t15), $(o11, [`.${t15}`], [], e12, (e13) => {
              d5.allvar.apply(e13);
            }));
          }
    }
    if ("object" == typeof s6 && s6) {
      const t13 = `${n6}-i${z(s6)}-css`;
      h5.add(t13), r14.rules.inline.cache.has(t13) || (r14.rules.inline.cache.add(t13), $(s6, [`.${t13}`], [], e12, (e13) => {
        d5.inline.apply(e13);
      }));
    }
    for (const e13 of String(l6.className || "").trim().split(/\s+/))
      e13 && h5.add(e13);
    const f5 = p6.className = [...h5].join(" ");
    return { type: t12.type, className: f5, selector: g5, props: p6, toString: () => f5, deferredInjector: c6 };
  };
  return s(p5, { className: n6, selector: g5, [l2]: t12, toString: () => (r14.rules.styled.cache.has(n6) || p5(), n6) });
};
var L = (e12) => {
  let t12 = "";
  const r14 = [], n6 = {}, i6 = [];
  for (const [o9, , , , l6, s6] of e12) {
    "" === t12 && (t12 = o9), r14.push(o9), i6.push(...s6);
    for (const e13 in l6) {
      const t13 = l6[e13];
      (void 0 === n6[e13] || "undefined" !== t13 || s6.includes(t13)) && (n6[e13] = t13);
    }
  }
  return [t12, r14, n6, new Set(i6)];
};
var O = (e12, t12, r14, n6) => {
  const i6 = [];
  e:
    for (let [o9, l6, s6] of e12) {
      if (s6)
        continue;
      let e13, a5 = 0, c6 = false;
      for (e13 in o9) {
        const n7 = o9[e13];
        let i7 = t12[e13];
        if (i7 !== n7) {
          if ("object" != typeof i7 || !i7)
            continue e;
          {
            let e14, t13, o10 = 0;
            for (const l7 in i7) {
              if (n7 === String(i7[l7])) {
                if ("@initial" !== l7) {
                  const e15 = l7.slice(1);
                  (t13 = t13 || []).push(e15 in r14 ? r14[e15] : l7.replace(/^@media ?/, "")), c6 = true;
                }
                a5 += o10, e14 = true;
              }
              ++o10;
            }
            if (t13 && t13.length && (l6 = { ["@media " + t13.join(", ")]: l6 }), !e14)
              continue e;
          }
        }
      }
      (i6[a5] = i6[a5] || []).push([n6 ? "cv" : `${e13}-${o9[e13]}`, l6, c6]);
    }
  return i6;
};
var A = {};
var N = o4();
var D = (e12, t12) => N(e12, () => (...r14) => {
  const n6 = () => {
    for (let n7 of r14) {
      n7 = "object" == typeof n7 && n7 || {};
      let r15 = z(n7);
      if (!t12.rules.global.cache.has(r15)) {
        if (t12.rules.global.cache.add(r15), "@import" in n7) {
          let e13 = [].indexOf.call(t12.sheet.cssRules, t12.rules.themed.group) - 1;
          for (let r16 of [].concat(n7["@import"]))
            r16 = r16.includes('"') || r16.includes("'") ? r16 : `"${r16}"`, t12.sheet.insertRule(`@import ${r16};`, e13++);
          delete n7["@import"];
        }
        $(n7, [], [], e12, (e13) => {
          t12.rules.global.apply(e13);
        });
      }
    }
    return "";
  };
  return s(n6, { toString: n6 });
});
var H = o4();
var V = (e12, t12) => H(e12, () => (r14) => {
  const n6 = `${S(e12.prefix)}k-${z(r14)}`, i6 = () => {
    if (!t12.rules.global.cache.has(n6)) {
      t12.rules.global.cache.add(n6);
      const i7 = [];
      $(r14, [], [], e12, (e13) => i7.push(e13));
      const o9 = `@keyframes ${n6}{${i7.join("")}}`;
      t12.rules.global.apply(o9);
    }
    return n6;
  };
  return s(i6, { get name() {
    return i6();
  }, toString: i6 });
});
var G = class {
  constructor(e12, t12, r14, n6) {
    this.token = null == e12 ? "" : String(e12), this.value = null == t12 ? "" : String(t12), this.scale = null == r14 ? "" : String(r14), this.prefix = null == n6 ? "" : String(n6);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + S(this.prefix) + S(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
};
var F = o4();
var J = (e12, t12) => F(e12, () => (r14, n6) => {
  n6 = "object" == typeof r14 && r14 || Object(n6);
  const i6 = `.${r14 = (r14 = "string" == typeof r14 ? r14 : "") || `${S(e12.prefix)}t-${z(n6)}`}`, o9 = {}, l6 = [];
  for (const t13 in n6) {
    o9[t13] = {};
    for (const r15 in n6[t13]) {
      const i7 = `--${S(e12.prefix)}${t13}-${r15}`, s7 = k(String(n6[t13][r15]), e12.prefix, t13);
      o9[t13][r15] = new G(r15, s7, t13, e12.prefix), l6.push(`${i7}:${s7}`);
    }
  }
  const s6 = () => {
    if (l6.length && !t12.rules.themed.cache.has(r14)) {
      t12.rules.themed.cache.add(r14);
      const i7 = `${n6 === e12.theme ? ":root," : ""}.${r14}{${l6.join(";")}}`;
      t12.rules.themed.apply(i7);
    }
    return r14;
  };
  return { ...o9, get className() {
    return s6();
  }, selector: i6, toString: s6 };
});
var U = o4();
var Y = o4();
var q = (e12) => {
  const t12 = ((e13) => {
    let t13 = false;
    const r14 = U(e13, (e14) => {
      t13 = true;
      const r15 = "prefix" in (e14 = "object" == typeof e14 && e14 || {}) ? String(e14.prefix) : "", i6 = "object" == typeof e14.media && e14.media || {}, o9 = "object" == typeof e14.root ? e14.root || null : globalThis.document || null, l6 = "object" == typeof e14.theme && e14.theme || {}, s6 = { prefix: r15, media: i6, theme: l6, themeMap: "object" == typeof e14.themeMap && e14.themeMap || { ...n2 }, utils: "object" == typeof e14.utils && e14.utils || {} }, a5 = E(o9), c6 = { css: M(s6, a5), globalCss: D(s6, a5), keyframes: V(s6, a5), createTheme: J(s6, a5), reset() {
        a5.reset(), c6.theme.toString();
      }, theme: {}, sheet: a5, config: s6, prefix: r15, getCssText: a5.toString, toString: a5.toString };
      return String(c6.theme = c6.createTheme(l6)), c6;
    });
    return t13 || r14.reset(), r14;
  })(e12);
  return t12.styled = (({ config: e13, sheet: t13 }) => Y(e13, () => {
    const r14 = M(e13, t13);
    return (...e14) => {
      const t14 = r14(...e14), n6 = t14[l2].type, i6 = import_react.default.forwardRef((e15, r15) => {
        const i7 = e15 && e15.as || n6, { props: o9, deferredInjector: l6 } = t14(e15);
        return delete o9.as, o9.ref = r15, l6 ? import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement(i7, o9), import_react.default.createElement(l6, null)) : import_react.default.createElement(i7, o9);
      });
      return i6.className = t14.className, i6.displayName = `Styled.${n6.displayName || n6.name || n6}`, i6.selector = t14.selector, i6.toString = () => t14.selector, i6[l2] = t14[l2], i6;
    };
  }))(t12), t12;
};

// node_modules/@radix-ui/react-id/dist/index.module.js
var t3 = __toESM(require_react());
var r4 = t3["useId".toString()] || (() => {
});
var i2 = 0;
function useId(n6) {
  const [o9, s6] = t3.useState(r4());
  return useLayoutEffect2(() => {
    n6 || s6((e12) => null != e12 ? e12 : String(i2++));
  }, [n6]), n6 || (o9 ? `radix-${o9}` : "");
}

// node_modules/@radix-ui/react-primitive/dist/index.module.js
var r5 = __toESM(require_react());
var Primitive2 = ["a", "button", "div", "h2", "h3", "img", "li", "nav", "p", "span", "svg", "ul"].reduce((t12, s6) => ({ ...t12, [s6]: r5.forwardRef((t13, n6) => {
  const { asChild: a5, ...m5 } = t13, d5 = a5 ? Slot : s6;
  return r5.useEffect(() => {
    window[Symbol.for("radix-ui")] = true;
  }, []), t13.as && console.error(o5), r5.createElement(d5, _extends({}, m5, { ref: n6 }));
}) }), {});
var o5 = "Warning: The `as` prop has been removed in favour of `asChild`. For details, see https://radix-ui.com/docs/primitives/overview/styling#changing-the-rendered-element";

// node_modules/@radix-ui/react-visually-hidden/dist/index.module.js
var r6 = __toESM(require_react());
var VisuallyHidden = r6.forwardRef((i6, o9) => r6.createElement(Primitive2.span, _extends({}, i6, { ref: o9, style: { ...i6.style, position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal" } })));
var Root2 = VisuallyHidden;

// node_modules/@radix-ui/react-tooltip/node_modules/@radix-ui/react-portal/dist/index.module.js
var import_react_dom2 = __toESM(require_react_dom());
var r7 = __toESM(require_react());
var Portal2 = r7.forwardRef((a5, i6) => {
  var n6, d5;
  const { containerRef: s6, style: u5, ...c6 } = a5, m5 = null !== (n6 = null == s6 ? void 0 : s6.current) && void 0 !== n6 ? n6 : null === globalThis || void 0 === globalThis || null === (d5 = globalThis.document) || void 0 === d5 ? void 0 : d5.body, [, f5] = r7.useState({});
  return useLayoutEffect2(() => {
    f5({});
  }, []), m5 ? import_react_dom2.default.createPortal(r7.createElement(Primitive2.div, _extends({ "data-radix-portal": "" }, c6, { ref: i6, style: m5 === document.body ? { position: "absolute", top: 0, left: 0, zIndex: 2147483647, ...u5 } : void 0 })), m5) : null;
});
var UnstablePortal2 = r7.forwardRef((t12, a5) => {
  var i6;
  const { container: n6 = null === globalThis || void 0 === globalThis || null === (i6 = globalThis.document) || void 0 === i6 ? void 0 : i6.body, ...d5 } = t12;
  return n6 ? import_react_dom2.default.createPortal(r7.createElement(Primitive2.div, _extends({}, d5, { ref: a5 })), n6) : null;
});

// node_modules/@radix-ui/react-arrow/dist/index.module.js
var r8 = __toESM(require_react());
var Arrow = r8.forwardRef((o9, i6) => {
  const { children: n6, width: s6 = 10, height: m5 = 5, ...p5 } = o9;
  return r8.createElement(Primitive2.svg, _extends({}, p5, { ref: i6, width: s6, height: m5, viewBox: "0 0 30 10", preserveAspectRatio: "none" }), o9.asChild ? n6 : r8.createElement("polygon", { points: "0,0 30,0 15,10" }));
});
var Root3 = Arrow;

// node_modules/@radix-ui/react-use-size/dist/index.module.js
var e4 = __toESM(require_react());
function useSize(r14) {
  const [i6, t12] = e4.useState(void 0);
  return e4.useEffect(() => {
    if (r14) {
      const e12 = new ResizeObserver((e13) => {
        if (!Array.isArray(e13))
          return;
        if (!e13.length)
          return;
        const i7 = e13[0];
        let o9, n6;
        if ("borderBoxSize" in i7) {
          const e14 = i7.borderBoxSize, r15 = Array.isArray(e14) ? e14[0] : e14;
          o9 = r15.inlineSize, n6 = r15.blockSize;
        } else {
          const e14 = r14.getBoundingClientRect();
          o9 = e14.width, n6 = e14.height;
        }
        t12({ width: o9, height: n6 });
      });
      return e12.observe(r14, { box: "border-box" }), () => {
        t12(void 0), e12.unobserve(r14);
      };
    }
  }, [r14]), i6;
}

// node_modules/@radix-ui/rect/dist/index.module.js
function observeElementRect(n6, o9) {
  const i6 = e5.get(n6);
  return void 0 === i6 ? (e5.set(n6, { rect: {}, callbacks: [o9] }), 1 === e5.size && (t4 = requestAnimationFrame(c2))) : (i6.callbacks.push(o9), o9(n6.getBoundingClientRect())), () => {
    const c6 = e5.get(n6);
    if (void 0 === c6)
      return;
    const i7 = c6.callbacks.indexOf(o9);
    i7 > -1 && c6.callbacks.splice(i7, 1), 0 === c6.callbacks.length && (e5.delete(n6), 0 === e5.size && cancelAnimationFrame(t4));
  };
}
var t4;
var e5 = /* @__PURE__ */ new Map();
function c2() {
  const n6 = [];
  e5.forEach((t12, e12) => {
    const c6 = e12.getBoundingClientRect();
    var o9, i6;
    o9 = t12.rect, i6 = c6, (o9.width !== i6.width || o9.height !== i6.height || o9.top !== i6.top || o9.right !== i6.right || o9.bottom !== i6.bottom || o9.left !== i6.left) && (t12.rect = c6, n6.push(t12));
  }), n6.forEach((t12) => {
    t12.callbacks.forEach((e12) => e12(t12.rect));
  }), t4 = requestAnimationFrame(c2);
}

// node_modules/@radix-ui/react-use-rect/dist/index.module.js
var r9 = __toESM(require_react());
function useRect(e12) {
  const [o9, c6] = r9.useState();
  return r9.useEffect(() => {
    if (e12) {
      const r14 = observeElementRect(e12, c6);
      return () => {
        c6(void 0), r14();
      };
    }
  }, [e12]), o9;
}

// node_modules/@radix-ui/react-context/dist/index.module.js
var e6 = __toESM(require_react());
function createContextScope(n6, o9 = []) {
  let r14 = [];
  const c6 = () => {
    const t12 = r14.map((t13) => e6.createContext(t13));
    return function(o10) {
      const r15 = (null == o10 ? void 0 : o10[n6]) || t12;
      return e6.useMemo(() => ({ [`__scope${n6}`]: { ...o10, [n6]: r15 } }), [o10, r15]);
    };
  };
  return c6.scopeName = n6, [function(t12, o10) {
    const c7 = e6.createContext(o10), u5 = r14.length;
    function s6(t13) {
      const { scope: o11, children: r15, ...s7 } = t13, i6 = (null == o11 ? void 0 : o11[n6][u5]) || c7, a5 = e6.useMemo(() => s7, Object.values(s7));
      return e6.createElement(i6.Provider, { value: a5 }, r15);
    }
    return r14 = [...r14, o10], s6.displayName = t12 + "Provider", [s6, function(r15, s7) {
      const i6 = (null == s7 ? void 0 : s7[n6][u5]) || c7, a5 = e6.useContext(i6);
      if (a5)
        return a5;
      if (void 0 !== o10)
        return o10;
      throw new Error(`\`${r15}\` must be used within \`${t12}\``);
    }];
  }, t5(c6, ...o9)];
}
function t5(...t12) {
  const n6 = t12[0];
  if (1 === t12.length)
    return n6;
  const o9 = () => {
    const o10 = t12.map((e12) => ({ useScope: e12(), scopeName: e12.scopeName }));
    return function(t13) {
      const r14 = o10.reduce((e12, { useScope: n7, scopeName: o11 }) => ({ ...e12, ...n7(t13)[`__scope${o11}`] }), {});
      return e6.useMemo(() => ({ [`__scope${n6.scopeName}`]: r14 }), [r14]);
    };
  };
  return o9.scopeName = n6.scopeName, o9;
}

// node_modules/@radix-ui/popper/dist/index.module.js
function getPlacementData({ anchorRect: p5, popperSize: c6, arrowSize: f5, arrowOffset: l6 = 0, side: d5, sideOffset: h5 = 0, align: x4, alignOffset: g5 = 0, shouldAvoidCollisions: u5 = true, collisionBoundariesRect: w4, collisionTolerance: m5 = 0 }) {
  if (!p5 || !c6 || !w4)
    return { popperStyles: o6, arrowStyles: n3 };
  const y5 = function(e12, r14, o9 = 0, n6 = 0, i6) {
    const p6 = i6 ? i6.height : 0, a5 = t6(r14, e12, "x"), s6 = t6(r14, e12, "y"), c7 = s6.before - o9 - p6, f6 = s6.after + o9 + p6, l7 = a5.before - o9 - p6, d6 = a5.after + o9 + p6;
    return { top: { start: { x: a5.start + n6, y: c7 }, center: { x: a5.center, y: c7 }, end: { x: a5.end - n6, y: c7 } }, right: { start: { x: d6, y: s6.start + n6 }, center: { x: d6, y: s6.center }, end: { x: d6, y: s6.end - n6 } }, bottom: { start: { x: a5.start + n6, y: f6 }, center: { x: a5.center, y: f6 }, end: { x: a5.end - n6, y: f6 } }, left: { start: { x: l7, y: s6.start + n6 }, center: { x: l7, y: s6.center }, end: { x: l7, y: s6.end - n6 } } };
  }(c6, p5, h5, g5, f5), b5 = y5[d5][x4];
  if (false === u5) {
    const t12 = e7(b5);
    let o9 = n3;
    f5 && (o9 = i3({ popperSize: c6, arrowSize: f5, arrowOffset: l6, side: d5, align: x4 }));
    return { popperStyles: { ...t12, "--radix-popper-transform-origin": r10(c6, d5, x4, l6, f5) }, arrowStyles: o9, placedSide: d5, placedAlign: x4 };
  }
  const S4 = DOMRect.fromRect({ ...c6, ...b5 }), $4 = (O2 = w4, z2 = m5, DOMRect.fromRect({ width: O2.width - 2 * z2, height: O2.height - 2 * z2, x: O2.left + z2, y: O2.top + z2 }));
  var O2, z2;
  const R3 = s2(S4, $4), M3 = y5[a2(d5)][x4], D2 = function(t12, e12, r14) {
    const o9 = a2(t12);
    return e12[t12] && !r14[o9] ? o9 : t12;
  }(d5, R3, s2(DOMRect.fromRect({ ...c6, ...M3 }), $4)), A2 = function(t12, e12, r14, o9, n6) {
    const i6 = "top" === r14 || "bottom" === r14, p6 = i6 ? "left" : "top", a5 = i6 ? "right" : "bottom", s6 = i6 ? "width" : "height", c7 = e12[s6] > t12[s6];
    if (("start" === o9 || "center" === o9) && (n6[p6] && c7 || n6[a5] && !c7))
      return "end";
    if (("end" === o9 || "center" === o9) && (n6[a5] && c7 || n6[p6] && !c7))
      return "start";
    return o9;
  }(c6, p5, d5, x4, R3), I4 = e7(y5[D2][A2]);
  let C2 = n3;
  f5 && (C2 = i3({ popperSize: c6, arrowSize: f5, arrowOffset: l6, side: D2, align: A2 }));
  return { popperStyles: { ...I4, "--radix-popper-transform-origin": r10(c6, D2, A2, l6, f5) }, arrowStyles: C2, placedSide: D2, placedAlign: A2 };
}
function t6(t12, e12, r14) {
  const o9 = t12["x" === r14 ? "left" : "top"], n6 = "x" === r14 ? "width" : "height", i6 = t12[n6], p5 = e12[n6];
  return { before: o9 - p5, start: o9, center: o9 + (i6 - p5) / 2, end: o9 + i6 - p5, after: o9 + i6 };
}
function e7(t12) {
  return { position: "absolute", top: 0, left: 0, minWidth: "max-content", willChange: "transform", transform: `translate3d(${Math.round(t12.x + window.scrollX)}px, ${Math.round(t12.y + window.scrollY)}px, 0)` };
}
function r10(t12, e12, r14, o9, n6) {
  const i6 = "top" === e12 || "bottom" === e12, p5 = n6 ? n6.width : 0, a5 = n6 ? n6.height : 0, s6 = p5 / 2 + o9;
  let c6 = "", f5 = "";
  return i6 ? (c6 = { start: `${s6}px`, center: "center", end: t12.width - s6 + "px" }[r14], f5 = "top" === e12 ? `${t12.height + a5}px` : -a5 + "px") : (c6 = "left" === e12 ? `${t12.width + a5}px` : -a5 + "px", f5 = { start: `${s6}px`, center: "center", end: t12.height - s6 + "px" }[r14]), `${c6} ${f5}`;
}
var o6 = { position: "fixed", top: 0, left: 0, opacity: 0, transform: "translate3d(0, -200%, 0)" };
var n3 = { position: "absolute", opacity: 0 };
function i3({ popperSize: t12, arrowSize: e12, arrowOffset: r14, side: o9, align: n6 }) {
  const i6 = (t12.width - e12.width) / 2, a5 = (t12.height - e12.width) / 2, s6 = { top: 0, right: 90, bottom: 180, left: -90 }[o9], c6 = Math.max(e12.width, e12.height), f5 = { width: `${c6}px`, height: `${c6}px`, transform: `rotate(${s6}deg)`, willChange: "transform", position: "absolute", [o9]: "100%", direction: p2(o9, n6) };
  return "top" !== o9 && "bottom" !== o9 || ("start" === n6 && (f5.left = `${r14}px`), "center" === n6 && (f5.left = `${i6}px`), "end" === n6 && (f5.right = `${r14}px`)), "left" !== o9 && "right" !== o9 || ("start" === n6 && (f5.top = `${r14}px`), "center" === n6 && (f5.top = `${a5}px`), "end" === n6 && (f5.bottom = `${r14}px`)), f5;
}
function p2(t12, e12) {
  return ("top" !== t12 && "right" !== t12 || "end" !== e12) && ("bottom" !== t12 && "left" !== t12 || "end" === e12) ? "ltr" : "rtl";
}
function a2(t12) {
  return { top: "bottom", right: "left", bottom: "top", left: "right" }[t12];
}
function s2(t12, e12) {
  return { top: t12.top < e12.top, right: t12.right > e12.right, bottom: t12.bottom > e12.bottom, left: t12.left < e12.left };
}

// node_modules/@radix-ui/react-popper/dist/index.module.js
var s3 = __toESM(require_react());
var [c3, l3] = createContextScope("Popper");
var [f2, d2] = c3("Popper");
var Popper = (e12) => {
  const { __scopePopper: o9, children: r14 } = e12, [t12, n6] = s3.useState(null);
  return s3.createElement(f2, { scope: o9, anchor: t12, onAnchorChange: n6 }, r14);
};
var PopperAnchor = s3.forwardRef((e12, r14) => {
  const { __scopePopper: t12, virtualRef: n6, ...p5 } = e12, c6 = d2("PopperAnchor", t12), l6 = s3.useRef(null), f5 = useComposedRefs(r14, l6);
  return s3.useEffect(() => {
    c6.onAnchorChange((null == n6 ? void 0 : n6.current) || l6.current);
  }), n6 ? null : s3.createElement(Primitive2.div, _extends({}, p5, { ref: f5 }));
});
var [u2, m2] = c3("PopperContent");
var PopperContent = s3.forwardRef((e12, n6) => {
  const { __scopePopper: c6, side: l6 = "bottom", sideOffset: f5, align: m5 = "center", alignOffset: w4, collisionTolerance: h5, avoidCollisions: x4 = true, ...v5 } = e12, P2 = d2("PopperContent", c6), [A2, g5] = s3.useState(), E3 = useRect(P2.anchor), [y5, C2] = s3.useState(null), S4 = useSize(y5), [R3, O2] = s3.useState(null), _3 = useSize(R3), b5 = useComposedRefs(n6, (e13) => C2(e13)), z2 = function() {
    const [e13, o9] = s3.useState(void 0);
    return s3.useEffect(() => {
      let e14;
      function r14() {
        o9({ width: window.innerWidth, height: window.innerHeight });
      }
      function t12() {
        window.clearTimeout(e14), e14 = window.setTimeout(r14, 100);
      }
      return r14(), window.addEventListener("resize", t12), () => window.removeEventListener("resize", t12);
    }, []), e13;
  }(), T4 = z2 ? DOMRect.fromRect({ ...z2, x: 0, y: 0 }) : void 0, { popperStyles: k5, arrowStyles: L3, placedSide: B2, placedAlign: D2 } = getPlacementData({ anchorRect: E3, popperSize: S4, arrowSize: _3, arrowOffset: A2, side: l6, sideOffset: f5, align: m5, alignOffset: w4, shouldAvoidCollisions: x4, collisionBoundariesRect: T4, collisionTolerance: h5 }), H3 = void 0 !== B2;
  return s3.createElement("div", { style: k5, "data-radix-popper-content-wrapper": "" }, s3.createElement(u2, { scope: c6, arrowStyles: L3, onArrowChange: O2, onArrowOffsetChange: g5 }, s3.createElement(Primitive2.div, _extends({ "data-side": B2, "data-align": D2 }, v5, { style: { ...v5.style, animation: H3 ? void 0 : "none" }, ref: b5 }))));
});
var PopperArrow = s3.forwardRef(function(o9, r14) {
  const { __scopePopper: t12, offset: n6, ...i6 } = o9, p5 = m2("PopperArrow", t12), { onArrowOffsetChange: c6 } = p5;
  return s3.useEffect(() => c6(n6), [c6, n6]), s3.createElement("span", { style: { ...p5.arrowStyles, pointerEvents: "none" } }, s3.createElement("span", { ref: p5.onArrowChange, style: { display: "inline-block", verticalAlign: "top", pointerEvents: "auto" } }, s3.createElement(Root3, _extends({}, i6, { ref: r14, style: { ...i6.style, display: "block" } }))));
});
var Root4 = Popper;
var Anchor = PopperAnchor;
var Content = PopperContent;
var Arrow2 = PopperArrow;

// node_modules/@radix-ui/react-presence/dist/index.module.js
var t7 = __toESM(require_react());
var Presence = (u5) => {
  const { present: o9, children: i6 } = u5, s6 = function(n6) {
    const [u6, o10] = t7.useState(), i7 = t7.useRef({}), s7 = t7.useRef(n6), c7 = t7.useRef("none"), a6 = n6 ? "mounted" : "unmounted", [d5, m5] = function(e12, n7) {
      return t7.useReducer((e13, t12) => {
        const r14 = n7[e13][t12];
        return null != r14 ? r14 : e13;
      }, e12);
    }(a6, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
    return t7.useEffect(() => {
      const e12 = r11(i7.current);
      c7.current = "mounted" === d5 ? e12 : "none";
    }, [d5]), useLayoutEffect2(() => {
      const e12 = i7.current, t12 = s7.current;
      if (t12 !== n6) {
        const u7 = c7.current, o11 = r11(e12);
        if (n6)
          m5("MOUNT");
        else if ("none" === o11 || "none" === (null == e12 ? void 0 : e12.display))
          m5("UNMOUNT");
        else {
          const e13 = u7 !== o11;
          m5(t12 && e13 ? "ANIMATION_OUT" : "UNMOUNT");
        }
        s7.current = n6;
      }
    }, [n6, m5]), useLayoutEffect2(() => {
      if (u6) {
        const e12 = (e13) => {
          const n8 = r11(i7.current).includes(e13.animationName);
          e13.target === u6 && n8 && m5("ANIMATION_END");
        }, n7 = (e13) => {
          e13.target === u6 && (c7.current = r11(i7.current));
        };
        return u6.addEventListener("animationstart", n7), u6.addEventListener("animationcancel", e12), u6.addEventListener("animationend", e12), () => {
          u6.removeEventListener("animationstart", n7), u6.removeEventListener("animationcancel", e12), u6.removeEventListener("animationend", e12);
        };
      }
    }, [u6, m5]), { isPresent: ["mounted", "unmountSuspended"].includes(d5), ref: t7.useCallback((e12) => {
      e12 && (i7.current = getComputedStyle(e12)), o10(e12);
    }, []) };
  }(o9), c6 = "function" == typeof i6 ? i6({ present: s6.isPresent }) : t7.Children.only(i6), a5 = useComposedRefs(s6.ref, c6.ref);
  return "function" == typeof i6 || s6.isPresent ? t7.cloneElement(c6, { ref: a5 }) : null;
};
function r11(e12) {
  return (null == e12 ? void 0 : e12.animationName) || "none";
}
Presence.displayName = "Presence";

// node_modules/@radix-ui/react-use-previous/dist/index.module.js
var e8 = __toESM(require_react());
function usePrevious(r14) {
  const t12 = e8.useRef(r14);
  return e8.useEffect(() => {
    t12.current = r14;
  }, [r14]), t12.current;
}

// node_modules/@radix-ui/react-use-callback-ref/dist/index.module.js
var e9 = __toESM(require_react());
function useCallbackRef(r14) {
  const t12 = e9.useRef(r14);
  return e9.useEffect(() => {
    t12.current = r14;
  }), e9.useMemo(() => (...e12) => {
    var r15;
    return null === (r15 = t12.current) || void 0 === r15 ? void 0 : r15.call(t12, ...e12);
  }, []);
}

// node_modules/@radix-ui/react-use-escape-keydown/dist/index.module.js
var t8 = __toESM(require_react());
function useEscapeKeydown(n6) {
  const o9 = useCallbackRef(n6);
  t8.useEffect(() => {
    const e12 = (e13) => {
      "Escape" === e13.key && o9(e13);
    };
    return document.addEventListener("keydown", e12), () => document.removeEventListener("keydown", e12);
  }, [o9]);
}

// node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js
var t9 = __toESM(require_react());
function useControllableState({ prop: o9, defaultProp: r14, onChange: n6 = () => {
} }) {
  const [a5, u5] = function({ defaultProp: o10, onChange: r15 }) {
    const n7 = t9.useState(o10), [a6] = n7, u6 = t9.useRef(a6), c7 = useCallbackRef(r15);
    return t9.useEffect(() => {
      u6.current !== a6 && (c7(a6), u6.current = a6);
    }, [a6, u6, c7]), n7;
  }({ defaultProp: r14, onChange: n6 }), c6 = void 0 !== o9, f5 = c6 ? o9 : a5, l6 = useCallbackRef(n6);
  return [f5, t9.useCallback((e12) => {
    if (c6) {
      const t12 = e12, r15 = "function" == typeof e12 ? t12(o9) : e12;
      r15 !== o9 && l6(r15);
    } else
      u5(e12);
  }, [c6, o9, u5, l6])];
}

// node_modules/@radix-ui/primitive/dist/index.module.js
function composeEventHandlers(e12, n6, { checkForDefaultPrevented: t12 = true } = {}) {
  return function(r14) {
    if (null == e12 || e12(r14), false === t12 || !r14.defaultPrevented)
      return null == n6 ? void 0 : n6(r14);
  };
}

// node_modules/@radix-ui/react-tooltip/dist/index.module.js
var T2 = __toESM(require_react());
var [w2, x2] = createContextScope("Tooltip", [l3]);
var g2 = l3();
var E2 = 700;
var [v2, b2] = w2("TooltipProvider", { isOpenDelayed: true, delayDuration: E2, onOpen: () => {
}, onClose: () => {
} });
var [y2, _] = w2("Tooltip");
var Tooltip = (o9) => {
  const { __scopeTooltip: t12, children: r14, open: i6, defaultOpen: a5 = false, onOpenChange: l6, delayDuration: c6 } = o9, s6 = b2("Tooltip", t12), u5 = g2(t12), [d5, m5] = T2.useState(null), f5 = useId(), C2 = T2.useRef(0), w4 = null != c6 ? c6 : s6.delayDuration, x4 = T2.useRef(false), { onOpen: E3, onClose: v5 } = s6, [_3 = false, h5] = useControllableState({ prop: i6, defaultProp: a5, onChange: (e12) => {
    e12 && (document.dispatchEvent(new CustomEvent("tooltip.open")), E3()), null == l6 || l6(e12);
  } }), k5 = T2.useMemo(() => _3 ? x4.current ? "delayed-open" : "instant-open" : "closed", [_3]), D2 = T2.useCallback(() => {
    window.clearTimeout(C2.current), x4.current = false, h5(true);
  }, [h5]), O2 = T2.useCallback(() => {
    window.clearTimeout(C2.current), C2.current = window.setTimeout(() => {
      x4.current = true, h5(true);
    }, w4);
  }, [w4, h5]);
  return T2.useEffect(() => () => window.clearTimeout(C2.current), []), T2.createElement(Root4, u5, T2.createElement(y2, { scope: t12, contentId: f5, open: _3, stateAttribute: k5, trigger: d5, onTriggerChange: m5, onTriggerEnter: T2.useCallback(() => {
    s6.isOpenDelayed ? O2() : D2();
  }, [s6.isOpenDelayed, O2, D2]), onOpen: T2.useCallback(D2, [D2]), onClose: T2.useCallback(() => {
    window.clearTimeout(C2.current), h5(false), v5();
  }, [h5, v5]) }, r14));
};
var TooltipTrigger = T2.forwardRef((e12, o9) => {
  const { __scopeTooltip: t12, ...r14 } = e12, i6 = _("TooltipTrigger", t12), l6 = g2(t12), c6 = useComposedRefs(o9, i6.onTriggerChange), s6 = T2.useRef(false), u5 = T2.useCallback(() => s6.current = false, []);
  return T2.useEffect(() => () => document.removeEventListener("mouseup", u5), [u5]), T2.createElement(Anchor, _extends({ asChild: true }, l6), T2.createElement(Primitive2.button, _extends({ "aria-describedby": i6.open ? i6.contentId : void 0, "data-state": i6.stateAttribute }, r14, { ref: c6, onMouseEnter: composeEventHandlers(e12.onMouseEnter, i6.onTriggerEnter), onMouseLeave: composeEventHandlers(e12.onMouseLeave, i6.onClose), onMouseDown: composeEventHandlers(e12.onMouseDown, () => {
    i6.onClose(), s6.current = true, document.addEventListener("mouseup", u5, { once: true });
  }), onFocus: composeEventHandlers(e12.onFocus, () => {
    s6.current || i6.onOpen();
  }), onBlur: composeEventHandlers(e12.onBlur, i6.onClose), onClick: composeEventHandlers(e12.onClick, i6.onClose) })));
});
var TooltipContent = T2.forwardRef((e12, o9) => {
  const { forceMount: t12, ...r14 } = e12, n6 = _("TooltipContent", e12.__scopeTooltip);
  return T2.createElement(Presence, { present: t12 || n6.open }, T2.createElement(h2, _extends({ ref: o9 }, r14)));
});
var h2 = T2.forwardRef((e12, i6) => {
  const { __scopeTooltip: a5, children: l6, "aria-label": c6, portalled: s6 = true, ...p5 } = e12, d5 = _("TooltipContent", a5), m5 = g2(a5), f5 = s6 ? Portal2 : T2.Fragment, { onClose: w4 } = d5;
  return useEscapeKeydown(() => w4()), T2.useEffect(() => (document.addEventListener("tooltip.open", w4), () => document.removeEventListener("tooltip.open", w4)), [w4]), T2.createElement(f5, null, T2.createElement(k2, { __scopeTooltip: a5 }), T2.createElement(Content, _extends({ "data-state": d5.stateAttribute }, m5, p5, { ref: i6, style: { ...p5.style, "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)" } }), T2.createElement(Slottable, null, l6), T2.createElement(Root2, { id: d5.contentId, role: "tooltip" }, c6 || l6)));
});
var TooltipArrow = T2.forwardRef((e12, o9) => {
  const { __scopeTooltip: t12, ...r14 } = e12, i6 = g2(t12);
  return T2.createElement(Arrow2, _extends({}, i6, r14, { ref: o9 }));
});
function k2(e12) {
  const { __scopeTooltip: o9 } = e12, t12 = _("CheckTriggerMoved", o9), r14 = useRect(t12.trigger), n6 = null == r14 ? void 0 : r14.left, i6 = usePrevious(n6), a5 = null == r14 ? void 0 : r14.top, l6 = usePrevious(a5), u5 = t12.onClose;
  return T2.useEffect(() => {
    (void 0 !== i6 && i6 !== n6 || void 0 !== l6 && l6 !== a5) && u5();
  }, [u5, i6, l6, n6, a5]), null;
}
var Root5 = Tooltip;
var Trigger = TooltipTrigger;
var Content2 = TooltipContent;
var Arrow3 = TooltipArrow;

// node_modules/leva/dist/vector-plugin-6f82aee9.esm.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i6;
  for (i6 = 0; i6 < sourceKeys.length; i6++) {
    key = sourceKeys[i6];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i6;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i6 = 0; i6 < sourceSymbolKeys.length; i6++) {
      key = sourceSymbolKeys[i6];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
var LevaErrors;
(function(LevaErrors2) {
  LevaErrors2[LevaErrors2["UNSUPPORTED_INPUT"] = 0] = "UNSUPPORTED_INPUT";
  LevaErrors2[LevaErrors2["NO_COMPONENT_FOR_TYPE"] = 1] = "NO_COMPONENT_FOR_TYPE";
  LevaErrors2[LevaErrors2["UNKNOWN_INPUT"] = 2] = "UNKNOWN_INPUT";
  LevaErrors2[LevaErrors2["DUPLICATE_KEYS"] = 3] = "DUPLICATE_KEYS";
  LevaErrors2[LevaErrors2["ALREADY_REGISTERED_TYPE"] = 4] = "ALREADY_REGISTERED_TYPE";
  LevaErrors2[LevaErrors2["CLIPBOARD_ERROR"] = 5] = "CLIPBOARD_ERROR";
  LevaErrors2[LevaErrors2["THEME_ERROR"] = 6] = "THEME_ERROR";
  LevaErrors2[LevaErrors2["PATH_DOESNT_EXIST"] = 7] = "PATH_DOESNT_EXIST";
  LevaErrors2[LevaErrors2["INPUT_TYPE_OVERRIDE"] = 8] = "INPUT_TYPE_OVERRIDE";
  LevaErrors2[LevaErrors2["EMPTY_KEY"] = 9] = "EMPTY_KEY";
})(LevaErrors || (LevaErrors = {}));
var ErrorList = {
  [LevaErrors.UNSUPPORTED_INPUT]: (type, path) => [`An input with type \`${type}\` input was found at path \`${path}\` but it's not supported yet.`],
  [LevaErrors.NO_COMPONENT_FOR_TYPE]: (type, path) => [`Type \`${type}\` found at path \`${path}\` can't be displayed in panel because no component supports it yet.`],
  [LevaErrors.UNKNOWN_INPUT]: (path, value) => [`input at path \`${path}\` is not recognized.`, value],
  [LevaErrors.DUPLICATE_KEYS]: (key, path, prevPath) => [`Key \`${key}\` of path \`${path}\` already exists at path \`${prevPath}\`. Even nested keys need to be unique. Rename one of the keys.`],
  [LevaErrors.ALREADY_REGISTERED_TYPE]: (type) => [`Type ${type} has already been registered. You can't register a component with the same type.`],
  [LevaErrors.CLIPBOARD_ERROR]: (value) => [`Error copying the value`, value],
  [LevaErrors.THEME_ERROR]: (category, key) => [`Error accessing the theme \`${category}.${key}\` value.`],
  [LevaErrors.PATH_DOESNT_EXIST]: (path) => [`Error getting the value at path \`${path}\`. There is probably an error in your \`render\` function.`],
  [LevaErrors.PATH_DOESNT_EXIST]: (path) => [`Error accessing the value at path \`${path}\``],
  [LevaErrors.INPUT_TYPE_OVERRIDE]: (path, type, wrongType) => [`Input at path \`${path}\` already exists with type: \`${type}\`. Its type cannot be overridden with type \`${wrongType}\`.`],
  [LevaErrors.EMPTY_KEY]: () => ["Keys can not be empty, if you want to hide a label use whitespace."]
};
function _log(fn, errorType, ...args) {
  const [message, ...rest2] = ErrorList[errorType](...args);
  console[fn]("LEVA: " + message, ...rest2);
}
var warn = _log.bind(null, "warn");
var log = _log.bind(null, "log");
var _excluded$a = ["value"];
var _excluded2$4 = ["schema"];
var _excluded3$1 = ["value"];
var Schemas = [];
var Plugins = {};
function getValueType(_ref) {
  let {
    value
  } = _ref, settings = _objectWithoutProperties(_ref, _excluded$a);
  for (let checker of Schemas) {
    const type = checker(value, settings);
    if (type)
      return type;
  }
  return void 0;
}
function register(type, _ref2) {
  let {
    schema: schema3
  } = _ref2, plugin2 = _objectWithoutProperties(_ref2, _excluded2$4);
  if (type in Plugins) {
    warn(LevaErrors.ALREADY_REGISTERED_TYPE, type);
    return;
  }
  Schemas.push((value, settings) => schema3(value, settings) && type);
  Plugins[type] = plugin2;
}
function createInternalPlugin(plugin2) {
  return plugin2;
}
function normalize$3(type, input, path, data) {
  const {
    normalize: _normalize
  } = Plugins[type];
  if (_normalize)
    return _normalize(input, path, data);
  if (typeof input !== "object" || !("value" in input))
    return {
      value: input
    };
  const {
    value
  } = input, settings = _objectWithoutProperties(input, _excluded3$1);
  return {
    value,
    settings
  };
}
function sanitize$4(type, value, settings, prevValue, path, store) {
  const {
    sanitize: sanitize3
  } = Plugins[type];
  if (sanitize3)
    return sanitize3(value, settings, prevValue, path, store);
  return value;
}
function format$2(type, value, settings) {
  const {
    format: format3
  } = Plugins[type];
  if (format3)
    return format3(value, settings);
  return value;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i6 = 1; i6 < arguments.length; i6++) {
    var source = null != arguments[i6] ? arguments[i6] : {};
    i6 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var clamp = (x4, min, max) => x4 > max ? max : x4 < min ? min : x4;
var parseNumber = (v5) => {
  if (v5 === "" || typeof v5 === "number")
    return v5;
  try {
    const _v = evaluate(v5);
    if (!isNaN(_v))
      return _v;
  } catch (_unused) {
  }
  return parseFloat(v5);
};
var log10 = Math.log(10);
function getStep(number3) {
  let n6 = Math.abs(+String(number3).replace(".", ""));
  if (n6 === 0)
    return 0.01;
  while (n6 !== 0 && n6 % 10 === 0)
    n6 /= 10;
  const significantDigits = Math.floor(Math.log(n6) / log10) + 1;
  const numberLog = Math.floor(Math.log10(Math.abs(number3)));
  const step = Math.pow(10, numberLog - significantDigits);
  return Math.max(step, 1e-3);
}
var range = (v5, min, max) => {
  if (max === min)
    return 0;
  const _v = clamp(v5, min, max);
  return (_v - min) / (max - min);
};
var invertedRange = (p5, min, max) => p5 * (max - min) + min;
var getUid = () => "_" + Math.random().toString(36).substr(2, 9);
var parens = /\(([0-9+\-*/^ .]+)\)/;
var exp = /(\d+(?:\.\d+)?) ?\^ ?(\d+(?:\.\d+)?)/;
var mul = /(\d+(?:\.\d+)?) ?\* ?(\d+(?:\.\d+)?)/;
var div = /(\d+(?:\.\d+)?) ?\/ ?(\d+(?:\.\d+)?)/;
var add = /(\d+(?:\.\d+)?) ?\+ ?(\d+(?:\.\d+)?)/;
var sub = /(\d+(?:\.\d+)?) ?- ?(\d+(?:\.\d+)?)/;
function evaluate(expr) {
  if (isNaN(Number(expr))) {
    if (parens.test(expr)) {
      const newExpr = expr.replace(parens, (match, subExpr) => String(evaluate(subExpr)));
      return evaluate(newExpr);
    } else if (exp.test(expr)) {
      const newExpr = expr.replace(exp, (match, base, pow) => String(Math.pow(Number(base), Number(pow))));
      return evaluate(newExpr);
    } else if (mul.test(expr)) {
      const newExpr = expr.replace(mul, (match, a5, b5) => String(Number(a5) * Number(b5)));
      return evaluate(newExpr);
    } else if (div.test(expr)) {
      const newExpr = expr.replace(div, (match, a5, b5) => {
        if (b5 != 0)
          return String(Number(a5) / Number(b5));
        else
          throw new Error("Division by zero");
      });
      return evaluate(newExpr);
    } else if (add.test(expr)) {
      const newExpr = expr.replace(add, (match, a5, b5) => String(Number(a5) + Number(b5)));
      return evaluate(newExpr);
    } else if (sub.test(expr)) {
      const newExpr = expr.replace(sub, (match, a5, b5) => String(Number(a5) - Number(b5)));
      return evaluate(newExpr);
    } else {
      return Number(expr);
    }
  }
  return Number(expr);
}
function pick(object, keys) {
  return keys.reduce((obj, key) => {
    if (!!object && object.hasOwnProperty(key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
}
function omit(object, keys) {
  const obj = _objectSpread2({}, object);
  keys.forEach((k5) => k5 in object && delete obj[k5]);
  return obj;
}
function mapArrayToKeys(value, keys) {
  return value.reduce((acc, v5, i6) => Object.assign(acc, {
    [keys[i6]]: v5
  }), {});
}
function isObject(variable) {
  return Object.prototype.toString.call(variable) === "[object Object]";
}
var isEmptyObject = (obj) => isObject(obj) && Object.keys(obj).length === 0;
var SpecialInputs;
(function(SpecialInputs2) {
  SpecialInputs2["BUTTON"] = "BUTTON";
  SpecialInputs2["BUTTON_GROUP"] = "BUTTON_GROUP";
  SpecialInputs2["MONITOR"] = "MONITOR";
  SpecialInputs2["FOLDER"] = "FOLDER";
})(SpecialInputs || (SpecialInputs = {}));
var LevaInputs;
(function(LevaInputs2) {
  LevaInputs2["SELECT"] = "SELECT";
  LevaInputs2["IMAGE"] = "IMAGE";
  LevaInputs2["NUMBER"] = "NUMBER";
  LevaInputs2["COLOR"] = "COLOR";
  LevaInputs2["STRING"] = "STRING";
  LevaInputs2["BOOLEAN"] = "BOOLEAN";
  LevaInputs2["INTERVAL"] = "INTERVAL";
  LevaInputs2["VECTOR3D"] = "VECTOR3D";
  LevaInputs2["VECTOR2D"] = "VECTOR2D";
})(LevaInputs || (LevaInputs = {}));
var _excluded$9 = ["type", "__customInput"];
var _excluded2$3 = ["render", "label", "optional", "order", "disabled", "hint", "onChange", "onEditStart", "onEditEnd", "transient"];
var _excluded3 = ["type"];
function parseOptions(_input, key, mergedOptions = {}, customType) {
  var _commonOptions$option, _commonOptions$disabl;
  if (typeof _input !== "object" || Array.isArray(_input)) {
    return {
      type: customType,
      input: _input,
      options: _objectSpread2({
        key,
        label: key,
        optional: false,
        disabled: false,
        order: 0
      }, mergedOptions)
    };
  }
  if ("__customInput" in _input) {
    const {
      type: _type,
      __customInput
    } = _input, options = _objectWithoutProperties(_input, _excluded$9);
    return parseOptions(__customInput, key, options, _type);
  }
  const {
    render: render2,
    label,
    optional: optional2,
    order = 0,
    disabled,
    hint,
    onChange,
    onEditStart,
    onEditEnd,
    transient
  } = _input, inputWithType = _objectWithoutProperties(_input, _excluded2$3);
  const commonOptions = _objectSpread2({
    render: render2,
    key,
    label: label !== null && label !== void 0 ? label : key,
    hint,
    transient: transient !== null && transient !== void 0 ? transient : !!onChange,
    onEditStart,
    onEditEnd,
    disabled,
    optional: optional2,
    order
  }, mergedOptions);
  let {
    type
  } = inputWithType, input = _objectWithoutProperties(inputWithType, _excluded3);
  type = customType !== null && customType !== void 0 ? customType : type;
  if (type in SpecialInputs) {
    return {
      type,
      input,
      options: commonOptions
    };
  }
  let computedInput;
  if (customType && isObject(input) && "value" in input)
    computedInput = input.value;
  else
    computedInput = isEmptyObject(input) ? void 0 : input;
  return {
    type,
    input: computedInput,
    options: _objectSpread2(_objectSpread2({}, commonOptions), {}, {
      onChange,
      optional: (_commonOptions$option = commonOptions.optional) !== null && _commonOptions$option !== void 0 ? _commonOptions$option : false,
      disabled: (_commonOptions$disabl = commonOptions.disabled) !== null && _commonOptions$disabl !== void 0 ? _commonOptions$disabl : false
    })
  };
}
function normalizeInput(_input, key, path, data) {
  const parsedInputAndOptions = parseOptions(_input, key);
  const {
    type,
    input: parsedInput,
    options
  } = parsedInputAndOptions;
  if (type) {
    if (type in SpecialInputs)
      return parsedInputAndOptions;
    return {
      type,
      input: normalize$3(type, parsedInput, path, data),
      options
    };
  }
  let inputType = getValueType(parsedInput);
  if (inputType)
    return {
      type: inputType,
      input: normalize$3(inputType, parsedInput, path, data),
      options
    };
  inputType = getValueType({
    value: parsedInput
  });
  if (inputType)
    return {
      type: inputType,
      input: normalize$3(inputType, {
        value: parsedInput
      }, path, data),
      options
    };
  return false;
}
function updateInput(input, newValue, path, store, fromPanel) {
  const {
    value,
    type,
    settings
  } = input;
  input.value = sanitizeValue({
    type,
    value,
    settings
  }, newValue, path, store);
  input.fromPanel = fromPanel;
}
var ValueError = function ValueError2(message, value, error) {
  this.type = "LEVA_ERROR";
  this.message = "LEVA: " + message;
  this.previousValue = value;
  this.error = error;
};
function sanitizeValue({
  type,
  value,
  settings
}, newValue, path, store) {
  const _newValue = type !== "SELECT" && typeof newValue === "function" ? newValue(value) : newValue;
  let sanitizedNewValue;
  try {
    sanitizedNewValue = sanitize$4(type, _newValue, settings, value, path, store);
  } catch (e12) {
    throw new ValueError(`The value \`${newValue}\` did not result in a correct value.`, value, e12);
  }
  if (dequal(sanitizedNewValue, value)) {
    return value;
  }
  return sanitizedNewValue;
}
var debounce = (callback, wait, immediate = false) => {
  let timeout = 0;
  return function() {
    const args = arguments;
    const callNow = immediate && !timeout;
    const next = () => callback.apply(this, args);
    window.clearTimeout(timeout);
    timeout = window.setTimeout(next, wait);
    if (callNow)
      next();
  };
};
var multiplyStep = (event) => event.shiftKey ? 5 : event.altKey ? 1 / 5 : 1;
function render(element, container) {
  const error = console.error;
  console.error = () => {
  };
  import_react_dom3.default.render(element, container);
  console.error = error;
}
var _excluded$8 = ["value"];
var _excluded2$2 = ["min", "max"];
var schema$3 = (v5) => {
  if (typeof v5 === "number")
    return true;
  if (typeof v5 === "string") {
    const _v = parseFloat(v5);
    if (isNaN(_v))
      return false;
    const suffix = v5.substring(("" + _v).length).trim();
    return suffix.length < 4;
  }
  return false;
};
var sanitize$3 = (v5, {
  min: _min = -Infinity,
  max: _max = Infinity,
  suffix
}) => {
  const _v = parseFloat(v5);
  if (v5 === "" || isNaN(_v))
    throw Error("Invalid number");
  const f5 = clamp(_v, _min, _max);
  return suffix ? f5 + suffix : f5;
};
var format$1 = (v5, {
  pad: _pad = 0,
  suffix
}) => {
  const f5 = parseFloat(v5).toFixed(_pad);
  return suffix ? f5 + suffix : f5;
};
var normalize$2 = (_ref) => {
  let {
    value
  } = _ref, settings = _objectWithoutProperties(_ref, _excluded$8);
  const {
    min = -Infinity,
    max = Infinity
  } = settings, _settings = _objectWithoutProperties(settings, _excluded2$2);
  let _value = parseFloat(value);
  const suffix = typeof value === "string" ? value.substring(("" + _value).length) : void 0;
  _value = clamp(_value, min, max);
  let step = settings.step;
  if (!step) {
    if (Number.isFinite(min)) {
      if (Number.isFinite(max))
        step = +(Math.abs(max - min) / 100).toPrecision(1);
      else
        step = +(Math.abs(_value - min) / 100).toPrecision(1);
    } else if (Number.isFinite(max))
      step = +(Math.abs(max - _value) / 100).toPrecision(1);
  }
  const padStep = step ? getStep(step) * 10 : getStep(_value);
  step = step || padStep / 10;
  const pad = Math.round(clamp(Math.log10(1 / padStep), 0, 2));
  return {
    value: suffix ? _value + suffix : _value,
    settings: _objectSpread2({
      initialValue: _value,
      step,
      pad,
      min,
      max,
      suffix
    }, _settings)
  };
};
var sanitizeStep$1 = (v5, {
  step,
  initialValue
}) => {
  const steps = Math.round((v5 - initialValue) / step);
  return initialValue + steps * step;
};
var props$3 = Object.freeze({
  __proto__: null,
  schema: schema$3,
  sanitize: sanitize$3,
  format: format$1,
  normalize: normalize$2,
  sanitizeStep: sanitizeStep$1
});
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i6 = 1; i6 < arguments.length; i6++) {
      var source = arguments[i6];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
var InputContext = (0, import_react2.createContext)({});
function useInputContext() {
  return (0, import_react2.useContext)(InputContext);
}
var ThemeContext = (0, import_react2.createContext)(null);
var StoreContext = (0, import_react2.createContext)(null);
var PanelSettingsContext = (0, import_react2.createContext)(null);
function useStoreContext() {
  return (0, import_react2.useContext)(StoreContext);
}
function usePanelSettingsContext() {
  return (0, import_react2.useContext)(PanelSettingsContext);
}
var getDefaultTheme = () => ({
  colors: {
    elevation1: "#292d39",
    elevation2: "#181c20",
    elevation3: "#373c4b",
    accent1: "#0066dc",
    accent2: "#007bff",
    accent3: "#3c93ff",
    highlight1: "#535760",
    highlight2: "#8c92a4",
    highlight3: "#fefefe",
    vivid1: "#ffcc00",
    folderWidgetColor: "$highlight2",
    folderTextColor: "$highlight3",
    toolTipBackground: "$highlight3",
    toolTipText: "$elevation2"
  },
  radii: {
    xs: "2px",
    sm: "3px",
    lg: "10px"
  },
  space: {
    xs: "3px",
    sm: "6px",
    md: "10px",
    rowGap: "7px",
    colGap: "7px"
  },
  fonts: {
    mono: `ui-monospace, SFMono-Regular, Menlo, 'Roboto Mono', monospace`,
    sans: `system-ui, sans-serif`
  },
  fontSizes: {
    root: "11px",
    toolTip: "$root"
  },
  sizes: {
    rootWidth: "280px",
    controlWidth: "160px",
    numberInputMinWidth: "38px",
    scrubberWidth: "8px",
    scrubberHeight: "16px",
    rowHeight: "24px",
    folderTitleHeight: "20px",
    checkboxSize: "16px",
    joystickWidth: "100px",
    joystickHeight: "100px",
    colorPickerWidth: "$controlWidth",
    colorPickerHeight: "100px",
    imagePreviewWidth: "$controlWidth",
    imagePreviewHeight: "100px",
    monitorHeight: "60px",
    titleBarHeight: "39px"
  },
  shadows: {
    level1: "0 0 9px 0 #00000088",
    level2: "0 4px 14px #00000033"
  },
  borderWidths: {
    root: "0px",
    input: "1px",
    focus: "1px",
    hover: "1px",
    active: "1px",
    folder: "1px"
  },
  fontWeights: {
    label: "normal",
    folder: "normal",
    button: "normal"
  }
});
function createStateClass(value, options) {
  const [borderColor, bgColor] = value.split(" ");
  const css2 = {};
  if (borderColor !== "none") {
    css2.boxShadow = `${options.inset ? "inset " : ""}0 0 0 $borderWidths${[options.key]} $colors${borderColor !== "default" && borderColor || options.borderColor}`;
  }
  if (bgColor) {
    css2.backgroundColor = bgColor;
  }
  return css2;
}
var utils = {
  $inputStyle: () => (value) => createStateClass(value, {
    key: "$input",
    borderColor: "$highlight1",
    inset: true
  }),
  $focusStyle: () => (value) => createStateClass(value, {
    key: "$focus",
    borderColor: "$accent2"
  }),
  $hoverStyle: () => (value) => createStateClass(value, {
    key: "$hover",
    borderColor: "$accent1",
    inset: true
  }),
  $activeStyle: () => (value) => createStateClass(value, {
    key: "$active",
    borderColor: "$accent1",
    inset: true
  })
};
var {
  styled,
  css,
  createTheme,
  globalCss,
  keyframes
} = q({
  prefix: "leva",
  theme: getDefaultTheme(),
  utils: _objectSpread2(_objectSpread2({}, utils), {}, {
    $flex: () => ({
      display: "flex",
      alignItems: "center"
    }),
    $flexCenter: () => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }),
    $reset: () => ({
      outline: "none",
      fontSize: "inherit",
      fontWeight: "inherit",
      color: "inherit",
      fontFamily: "inherit",
      border: "none",
      backgroundColor: "transparent",
      appearance: "none"
    }),
    $draggable: () => ({
      touchAction: "none",
      WebkitUserDrag: "none",
      userSelect: "none"
    }),
    $focus: (value) => ({
      "&:focus": utils.$focusStyle()(value)
    }),
    $focusWithin: (value) => ({
      "&:focus-within": utils.$focusStyle()(value)
    }),
    $hover: (value) => ({
      "&:hover": utils.$hoverStyle()(value)
    }),
    $active: (value) => ({
      "&:active": utils.$activeStyle()(value)
    })
  })
});
var globalStyles = globalCss({
  ".leva__panel__dragged": {
    WebkitUserDrag: "none",
    userSelect: "none",
    input: {
      userSelect: "none"
    },
    "*": {
      cursor: "ew-resize !important"
    }
  }
});
function mergeTheme(newTheme) {
  const defaultTheme = getDefaultTheme();
  if (!newTheme)
    return {
      theme: defaultTheme,
      className: ""
    };
  Object.keys(newTheme).forEach((key) => {
    Object.assign(defaultTheme[key], newTheme[key]);
  });
  const customTheme = createTheme(defaultTheme);
  return {
    theme: defaultTheme,
    className: customTheme.className
  };
}
function useTh(category, key) {
  const {
    theme
  } = (0, import_react2.useContext)(ThemeContext);
  if (!(category in theme) || !(key in theme[category])) {
    warn(LevaErrors.THEME_ERROR, category, key);
    return "";
  }
  let _key = key;
  while (true) {
    let value = theme[category][_key];
    if (typeof value === "string" && value.charAt(0) === "$")
      _key = value.substr(1);
    else
      return value;
  }
}
var StyledInput = styled("input", {
  $reset: "",
  padding: "0 $sm",
  width: 0,
  minWidth: 0,
  flex: 1,
  height: "100%",
  variants: {
    levaType: {
      number: {
        textAlign: "right"
      }
    },
    as: {
      textarea: {
        padding: "$sm"
      }
    }
  }
});
var InnerLabel = styled("div", {
  $draggable: "",
  height: "100%",
  $flexCenter: "",
  position: "relative",
  padding: "0 $xs",
  fontSize: "0.8em",
  opacity: 0.8,
  cursor: "default",
  touchAction: "none",
  [`& + ${StyledInput}`]: {
    paddingLeft: 0
  }
});
var InnerNumberLabel = styled(InnerLabel, {
  cursor: "ew-resize",
  marginRight: "-$xs",
  textTransform: "uppercase",
  opacity: 0.3,
  "&:hover": {
    opacity: 1
  },
  variants: {
    dragging: {
      true: {
        backgroundColor: "$accent2",
        opacity: 1
      }
    }
  }
});
var InputContainer = styled("div", {
  $flex: "",
  position: "relative",
  borderRadius: "$sm",
  overflow: "hidden",
  color: "inherit",
  height: "$rowHeight",
  backgroundColor: "$elevation3",
  $inputStyle: "$elevation1",
  $hover: "",
  $focusWithin: "",
  variants: {
    textArea: {
      true: {
        height: "auto"
      }
    }
  }
});
var _excluded$7 = ["innerLabel", "value", "onUpdate", "onChange", "onKeyDown", "type", "id", "inputType", "rows"];
var _excluded2$1 = ["onUpdate"];
function ValueInput(_ref) {
  let {
    innerLabel,
    value,
    onUpdate,
    onChange,
    onKeyDown,
    type,
    id,
    inputType = "text",
    rows = 0
  } = _ref, props3 = _objectWithoutProperties(_ref, _excluded$7);
  const {
    id: _id,
    emitOnEditStart,
    emitOnEditEnd,
    disabled
  } = useInputContext();
  const inputId = id || _id;
  const inputRef = (0, import_react2.useRef)(null);
  const isTextArea = rows > 0;
  const asType = isTextArea ? "textarea" : "input";
  const update = (0, import_react2.useCallback)((fn) => (event) => {
    const _value = event.currentTarget.value;
    fn(_value);
  }, []);
  import_react2.default.useEffect(() => {
    const ref = inputRef.current;
    const _onUpdate = update((value2) => {
      onUpdate(value2);
      emitOnEditEnd();
    });
    ref === null || ref === void 0 ? void 0 : ref.addEventListener("blur", _onUpdate);
    return () => ref === null || ref === void 0 ? void 0 : ref.removeEventListener("blur", _onUpdate);
  }, [update, onUpdate, emitOnEditEnd]);
  const onKeyPress = (0, import_react2.useCallback)((event) => {
    if (event.key === "Enter") {
      update(onUpdate)(event);
    }
  }, [update, onUpdate]);
  const inputProps = Object.assign({
    as: asType
  }, isTextArea ? {
    rows
  } : {}, props3);
  return import_react2.default.createElement(InputContainer, {
    textArea: isTextArea
  }, innerLabel && typeof innerLabel === "string" ? import_react2.default.createElement(InnerLabel, null, innerLabel) : innerLabel, import_react2.default.createElement(StyledInput, _extends2({
    levaType: type,
    ref: inputRef,
    id: inputId,
    type: inputType,
    autoComplete: "off",
    spellCheck: "false",
    value,
    onChange: update(onChange),
    onFocus: () => emitOnEditStart(),
    onKeyPress,
    onKeyDown,
    disabled
  }, inputProps)));
}
function NumberInput(_ref2) {
  let {
    onUpdate
  } = _ref2, props3 = _objectWithoutProperties(_ref2, _excluded2$1);
  const _onUpdate = (0, import_react2.useCallback)((v5) => onUpdate(parseNumber(v5)), [onUpdate]);
  const onKeyDown = (0, import_react2.useCallback)((event) => {
    const dir = event.key === "ArrowUp" ? 1 : event.key === "ArrowDown" ? -1 : 0;
    if (dir) {
      event.preventDefault();
      const step = event.altKey ? 0.1 : event.shiftKey ? 10 : 1;
      onUpdate((v5) => parseFloat(v5) + dir * step);
    }
  }, [onUpdate]);
  return import_react2.default.createElement(ValueInput, _extends2({}, props3, {
    onUpdate: _onUpdate,
    onKeyDown,
    type: "number"
  }));
}
var StyledFolder = styled("div", {});
var StyledWrapper = styled("div", {
  position: "relative",
  background: "$elevation2",
  transition: "height 300ms ease",
  variants: {
    fill: {
      true: {},
      false: {}
    },
    flat: {
      false: {},
      true: {}
    },
    isRoot: {
      true: {},
      false: {
        paddingLeft: "$md",
        "&::after": {
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          width: "$borderWidths$folder",
          height: "100%",
          backgroundColor: "$folderWidgetColor",
          opacity: 0.4,
          transform: "translateX(-50%)"
        }
      }
    }
  },
  compoundVariants: [{
    isRoot: true,
    fill: false,
    css: {
      overflowY: "auto",
      maxHeight: "calc(100vh - 20px - $$titleBarHeight)"
    }
  }, {
    isRoot: true,
    flat: false,
    css: {
      borderRadius: "$lg"
    }
  }]
});
var StyledTitle = styled("div", {
  $flex: "",
  color: "$folderTextColor",
  userSelect: "none",
  cursor: "pointer",
  height: "$folderTitleHeight",
  fontWeight: "$folder",
  "> svg": {
    marginLeft: -4,
    marginRight: 4,
    cursor: "pointer",
    fill: "$folderWidgetColor",
    opacity: 0.6
  },
  "&:hover > svg": {
    fill: "$folderWidgetColor"
  },
  [`&:hover + ${StyledWrapper}::after`]: {
    opacity: 0.6
  },
  [`${StyledFolder}:hover > & + ${StyledWrapper}::after`]: {
    opacity: 0.6
  },
  [`${StyledFolder}:hover > & > svg`]: {
    opacity: 1
  }
});
var StyledContent = styled("div", {
  position: "relative",
  display: "grid",
  gridTemplateColumns: "100%",
  rowGap: "$rowGap",
  transition: "opacity 250ms ease",
  variants: {
    toggled: {
      true: {
        opacity: 1,
        transitionDelay: "250ms"
      },
      false: {
        opacity: 0,
        transitionDelay: "0ms",
        pointerEvents: "none"
      }
    },
    isRoot: {
      true: {
        "& > div": {
          paddingLeft: "$md",
          paddingRight: "$md"
        },
        "& > div:first-of-type": {
          paddingTop: "$sm"
        },
        "& > div:last-of-type": {
          paddingBottom: "$sm"
        },
        [`> ${StyledFolder}:not(:first-of-type)`]: {
          paddingTop: "$sm",
          marginTop: "$md",
          borderTop: "$borderWidths$folder solid $colors$elevation1"
        }
      }
    }
  }
});
var StyledRow = styled("div", {
  position: "relative",
  zIndex: 100,
  display: "grid",
  rowGap: "$rowGap",
  gridTemplateRows: "minmax($sizes$rowHeight, max-content)",
  alignItems: "center",
  color: "$highlight2",
  [`${StyledContent} > &`]: {
    "&:first-of-type": {
      marginTop: "$rowGap"
    },
    "&:last-of-type": {
      marginBottom: "$rowGap"
    }
  },
  variants: {
    disabled: {
      true: {
        pointerEvents: "none"
      },
      false: {
        "&:hover,&:focus-within": {
          color: "$highlight3"
        }
      }
    }
  }
});
var StyledInputRow = styled(StyledRow, {
  gridTemplateColumns: "auto $sizes$controlWidth",
  columnGap: "$colGap"
});
var CopyLabelContainer = styled("div", {
  $flex: "",
  height: "100%",
  position: "relative",
  overflow: "hidden",
  "& > div": {
    marginLeft: "$colGap",
    padding: "0 $xs",
    opacity: 0.4
  },
  "& > div:hover": {
    opacity: 0.8
  },
  "& > div > svg": {
    display: "none",
    cursor: "pointer",
    width: 13,
    minWidth: 13,
    height: 13,
    backgroundColor: "$elevation2"
  },
  "&:hover > div > svg": {
    display: "block"
  },
  variants: {
    align: {
      top: {
        height: "100%",
        alignItems: "flex-start",
        paddingTop: "$sm"
      }
    }
  }
});
var StyledOptionalToggle = styled("input", {
  $reset: "",
  height: 0,
  width: 0,
  opacity: 0,
  margin: 0,
  "& + label": {
    position: "relative",
    $flexCenter: "",
    height: "100%",
    userSelect: "none",
    cursor: "pointer",
    paddingLeft: 2,
    paddingRight: "$sm",
    pointerEvents: "auto"
  },
  "& + label:after": {
    content: '""',
    width: 6,
    height: 6,
    backgroundColor: "$elevation3",
    borderRadius: "50%",
    $activeStyle: ""
  },
  "&:focus + label:after": {
    $focusStyle: ""
  },
  "& + label:active:after": {
    backgroundColor: "$accent1",
    $focusStyle: ""
  },
  "&:checked + label:after": {
    backgroundColor: "$accent1"
  }
});
var StyledLabel = styled("label", {
  fontWeight: "$label",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  "& > svg": {
    display: "block"
  }
});
var StyledInputWrapper$1 = styled("div", {
  opacity: 1,
  variants: {
    disabled: {
      true: {
        opacity: 0.6,
        pointerEvents: "none",
        [`& ${StyledLabel}`]: {
          pointerEvents: "auto"
        }
      }
    }
  }
});
var Overlay = styled("div", {
  position: "fixed",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  zIndex: 1e3,
  userSelect: "none"
});
var StyledToolTipContent = styled("div", {
  background: "$toolTipBackground",
  fontFamily: "$sans",
  fontSize: "$toolTip",
  padding: "$xs $sm",
  color: "$toolTipText",
  borderRadius: "$xs",
  boxShadow: "$level2",
  maxWidth: 260
});
var ToolTipArrow = styled(Arrow3, {
  fill: "$toolTipBackground"
});
function Portal3({
  children
}) {
  const {
    className
  } = (0, import_react2.useContext)(ThemeContext);
  return import_react2.default.createElement(Root, {
    className
  }, children);
}
var _excluded$6 = ["align"];
function OptionalToggle() {
  const {
    id,
    disable,
    disabled
  } = useInputContext();
  return import_react2.default.createElement(import_react2.default.Fragment, null, import_react2.default.createElement(StyledOptionalToggle, {
    id: id + "__disable",
    type: "checkbox",
    checked: !disabled,
    onChange: () => disable(!disabled)
  }), import_react2.default.createElement("label", {
    htmlFor: id + "__disable"
  }));
}
function RawLabel(props3) {
  const {
    id,
    optional: optional2,
    hint
  } = useInputContext();
  const htmlFor = props3.htmlFor || (id ? {
    htmlFor: id
  } : null);
  const title = !hint && typeof props3.children === "string" ? {
    title: props3.children
  } : null;
  return import_react2.default.createElement(import_react2.default.Fragment, null, optional2 && import_react2.default.createElement(OptionalToggle, null), hint !== void 0 ? import_react2.default.createElement(Root5, null, import_react2.default.createElement(Trigger, {
    asChild: true
  }, import_react2.default.createElement(StyledLabel, _extends2({}, htmlFor, props3))), import_react2.default.createElement(Content2, {
    side: "top",
    sideOffset: 2
  }, import_react2.default.createElement(StyledToolTipContent, null, hint, import_react2.default.createElement(ToolTipArrow, null)))) : import_react2.default.createElement(StyledLabel, _extends2({}, htmlFor, title, props3)));
}
function Label(_ref) {
  let {
    align
  } = _ref, props3 = _objectWithoutProperties(_ref, _excluded$6);
  const {
    value,
    label,
    key,
    disabled
  } = useInputContext();
  const {
    hideCopyButton
  } = usePanelSettingsContext();
  const copyEnabled = !hideCopyButton && key !== void 0;
  const [copied, setCopied] = (0, import_react2.useState)(false);
  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify({
        [key]: value !== null && value !== void 0 ? value : ""
      }));
      setCopied(true);
    } catch (_unused) {
      warn(LevaErrors.CLIPBOARD_ERROR, {
        [key]: value
      });
    }
  };
  return import_react2.default.createElement(CopyLabelContainer, {
    align,
    onPointerLeave: () => setCopied(false)
  }, import_react2.default.createElement(RawLabel, props3), copyEnabled && !disabled && import_react2.default.createElement("div", {
    title: `Click to copy ${typeof label === "string" ? label : key} value`
  }, !copied ? import_react2.default.createElement("svg", {
    onClick: handleClick,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, import_react2.default.createElement("path", {
    d: "M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
  }), import_react2.default.createElement("path", {
    d: "M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"
  })) : import_react2.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, import_react2.default.createElement("path", {
    d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
  }), import_react2.default.createElement("path", {
    fillRule: "evenodd",
    d: "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }))));
}
var _excluded$5 = ["toggled"];
var Svg = styled("svg", {
  fill: "currentColor",
  transition: "transform 350ms ease, fill 250ms ease"
});
function Chevron(_ref) {
  let {
    toggled
  } = _ref, props3 = _objectWithoutProperties(_ref, _excluded$5);
  return import_react2.default.createElement(Svg, _extends2({
    width: "9",
    height: "5",
    viewBox: "0 0 9 5",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      transform: `rotate(${toggled ? 0 : -90}deg)`
    }
  }, props3), import_react2.default.createElement("path", {
    d: "M3.8 4.4c.4.3 1 .3 1.4 0L8 1.7A1 1 0 007.4 0H1.6a1 1 0 00-.7 1.7l3 2.7z"
  }));
}
var _excluded$4 = ["input"];
function Row(_ref) {
  let {
    input
  } = _ref, props3 = _objectWithoutProperties(_ref, _excluded$4);
  if (input)
    return import_react2.default.createElement(StyledInputRow, props3);
  return import_react2.default.createElement(StyledRow, props3);
}
function useInputSetters({
  value,
  type,
  settings,
  setValue
}) {
  const [displayValue, setDisplayValue] = (0, import_react2.useState)(format$2(type, value, settings));
  const previousValueRef = (0, import_react2.useRef)(value);
  const settingsRef = (0, import_react2.useRef)(settings);
  settingsRef.current = settings;
  const setFormat = (0, import_react2.useCallback)((v5) => setDisplayValue(format$2(type, v5, settingsRef.current)), [type]);
  const onUpdate = (0, import_react2.useCallback)((updatedValue) => {
    try {
      setValue(updatedValue);
    } catch (error) {
      const {
        type: type2,
        previousValue
      } = error;
      if (type2 !== "LEVA_ERROR")
        throw error;
      setFormat(previousValue);
    }
  }, [setFormat, setValue]);
  (0, import_react2.useEffect)(() => {
    if (!dequal(value, previousValueRef.current)) {
      setFormat(value);
    }
    previousValueRef.current = value;
  }, [value, setFormat]);
  return {
    displayValue,
    onChange: setDisplayValue,
    onUpdate
  };
}
function useDrag2(handler, config) {
  const {
    emitOnEditStart,
    emitOnEditEnd
  } = useInputContext();
  return useDrag((state) => {
    if (state.first) {
      document.body.classList.add("leva__panel__dragged");
      emitOnEditStart === null || emitOnEditStart === void 0 ? void 0 : emitOnEditStart();
    }
    const result = handler(state);
    if (state.last) {
      document.body.classList.remove("leva__panel__dragged");
      emitOnEditEnd === null || emitOnEditEnd === void 0 ? void 0 : emitOnEditEnd();
    }
    return result;
  }, config);
}
function useCanvas2d(fn) {
  const canvas = (0, import_react2.useRef)(null);
  const ctx = (0, import_react2.useRef)(null);
  const hasFired = (0, import_react2.useRef)(false);
  (0, import_react2.useEffect)(() => {
    const handleCanvas = debounce(() => {
      canvas.current.width = canvas.current.offsetWidth * window.devicePixelRatio;
      canvas.current.height = canvas.current.offsetHeight * window.devicePixelRatio;
      fn(canvas.current, ctx.current);
    }, 250);
    window.addEventListener("resize", handleCanvas);
    if (!hasFired.current) {
      handleCanvas();
      hasFired.current = true;
    }
    return () => window.removeEventListener("resize", handleCanvas);
  }, [fn]);
  (0, import_react2.useEffect)(() => {
    ctx.current = canvas.current.getContext("2d");
  }, []);
  return [canvas, ctx];
}
function useTransform() {
  const ref = (0, import_react2.useRef)(null);
  const local = (0, import_react2.useRef)({
    x: 0,
    y: 0
  });
  const set = (0, import_react2.useCallback)((point) => {
    Object.assign(local.current, point);
    if (ref.current)
      ref.current.style.transform = `translate3d(${local.current.x}px, ${local.current.y}px, 0)`;
  }, []);
  return [ref, set];
}
var _excluded$3 = ["__refCount"];
var getInputAtPath = (data, path) => {
  if (!data[path])
    return null;
  const _data$path = data[path], input = _objectWithoutProperties(_data$path, _excluded$3);
  return input;
};
function useInput(path) {
  const store = useStoreContext();
  const [state, setState] = (0, import_react2.useState)(getInputAtPath(store.getData(), path));
  const set = (0, import_react2.useCallback)((value) => store.setValueAtPath(path, value, true), [path, store]);
  const setSettings = (0, import_react2.useCallback)((settings) => store.setSettingsAtPath(path, settings), [path, store]);
  const disable = (0, import_react2.useCallback)((flag) => store.disableInputAtPath(path, flag), [path, store]);
  const emitOnEditStart = (0, import_react2.useCallback)(() => store.emitOnEditStart(path), [path, store]);
  const emitOnEditEnd = (0, import_react2.useCallback)(() => store.emitOnEditEnd(path), [path, store]);
  (0, import_react2.useEffect)(() => {
    setState(getInputAtPath(store.getData(), path));
    const unsub = store.useStore.subscribe((s6) => getInputAtPath(s6.data, path), setState, {
      equalityFn: shallow
    });
    return () => unsub();
  }, [store, path]);
  return [state, {
    set,
    setSettings,
    disable,
    storeId: store.storeId,
    emitOnEditStart,
    emitOnEditEnd
  }];
}
var RangeGrid = styled("div", {
  variants: {
    hasRange: {
      true: {
        position: "relative",
        display: "grid",
        gridTemplateColumns: "auto $sizes$numberInputMinWidth",
        columnGap: "$colGap",
        alignItems: "center"
      }
    }
  }
});
var Range = styled("div", {
  position: "relative",
  width: "100%",
  height: 2,
  borderRadius: "$xs",
  backgroundColor: "$elevation1"
});
var Scrubber = styled("div", {
  position: "absolute",
  width: "$scrubberWidth",
  height: "$scrubberHeight",
  borderRadius: "$xs",
  boxShadow: "0 0 0 2px $colors$elevation2",
  backgroundColor: "$accent2",
  cursor: "pointer",
  $active: "none $accent1",
  $hover: "none $accent3",
  variants: {
    position: {
      left: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        transform: "translateX(calc(-0.5 * ($sizes$scrubberWidth + 4px)))"
      },
      right: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        transform: "translateX(calc(0.5 * ($sizes$scrubberWidth + 4px)))"
      }
    }
  }
});
var RangeWrapper = styled("div", {
  position: "relative",
  $flex: "",
  height: "100%",
  cursor: "pointer",
  touchAction: "none"
});
var Indicator = styled("div", {
  position: "absolute",
  height: "100%",
  backgroundColor: "$accent2"
});
function RangeSlider({
  value,
  min,
  max,
  onDrag,
  step,
  initialValue
}) {
  const ref = (0, import_react2.useRef)(null);
  const scrubberRef = (0, import_react2.useRef)(null);
  const rangeWidth = (0, import_react2.useRef)(0);
  const scrubberWidth = useTh("sizes", "scrubberWidth");
  const bind = useDrag2(({
    event,
    first,
    xy: [x4],
    movement: [mx],
    memo
  }) => {
    if (first) {
      const {
        width,
        left
      } = ref.current.getBoundingClientRect();
      rangeWidth.current = width - parseFloat(scrubberWidth);
      const targetIsScrub = (event === null || event === void 0 ? void 0 : event.target) === scrubberRef.current;
      memo = targetIsScrub ? value : invertedRange((x4 - left) / width, min, max);
    }
    const newValue = memo + invertedRange(mx / rangeWidth.current, 0, max - min);
    onDrag(sanitizeStep$1(newValue, {
      step,
      initialValue
    }));
    return memo;
  });
  const pos = range(value, min, max);
  return import_react2.default.createElement(RangeWrapper, _extends2({
    ref
  }, bind()), import_react2.default.createElement(Range, null, import_react2.default.createElement(Indicator, {
    style: {
      left: 0,
      right: `${(1 - pos) * 100}%`
    }
  })), import_react2.default.createElement(Scrubber, {
    ref: scrubberRef,
    style: {
      left: `calc(${pos} * (100% - ${scrubberWidth}))`
    }
  }));
}
var DraggableLabel = import_react2.default.memo(({
  label,
  onUpdate,
  step,
  innerLabelTrim
}) => {
  const [dragging, setDragging] = (0, import_react2.useState)(false);
  const bind = useDrag2(({
    active,
    delta: [dx],
    event,
    memo: _memo = 0
  }) => {
    setDragging(active);
    _memo += dx / 2;
    if (Math.abs(_memo) >= 1) {
      onUpdate((v5) => parseFloat(v5) + Math.floor(_memo) * step * multiplyStep(event));
      _memo = 0;
    }
    return _memo;
  });
  return import_react2.default.createElement(InnerNumberLabel, _extends2({
    dragging,
    title: label.length > 1 ? label : ""
  }, bind()), label.slice(0, innerLabelTrim));
});
function Number$1({
  label,
  id,
  displayValue,
  onUpdate,
  onChange,
  settings,
  innerLabelTrim = 1
}) {
  const InnerLabel2 = innerLabelTrim > 0 && import_react2.default.createElement(DraggableLabel, {
    label,
    step: settings.step,
    onUpdate,
    innerLabelTrim
  });
  return import_react2.default.createElement(NumberInput, {
    id,
    value: String(displayValue),
    onUpdate,
    onChange,
    innerLabel: InnerLabel2
  });
}
function NumberComponent() {
  const props3 = useInputContext();
  const {
    label,
    value,
    onUpdate,
    settings,
    id
  } = props3;
  const {
    min,
    max
  } = settings;
  const hasRange = max !== Infinity && min !== -Infinity;
  return import_react2.default.createElement(Row, {
    input: true
  }, import_react2.default.createElement(Label, null, label), import_react2.default.createElement(RangeGrid, {
    hasRange
  }, hasRange && import_react2.default.createElement(RangeSlider, _extends2({
    value: parseFloat(value),
    onDrag: onUpdate
  }, settings)), import_react2.default.createElement(Number$1, _extends2({}, props3, {
    id,
    label: "value",
    innerLabelTrim: hasRange ? 0 : 1
  }))));
}
var {
  sanitizeStep
} = props$3;
var rest = _objectWithoutProperties(props$3, ["sanitizeStep"]);
var number = createInternalPlugin(_objectSpread2({
  component: NumberComponent
}, rest));
var schema$2 = (_o, s6) => v8n_esm_default().schema({
  options: v8n_esm_default().passesAnyOf(v8n_esm_default().object(), v8n_esm_default().array())
}).test(s6);
var sanitize$2 = (value, {
  values
}) => {
  if (values.indexOf(value) < 0)
    throw Error(`Selected value doesn't match Select options`);
  return value;
};
var format = (value, {
  values
}) => {
  return values.indexOf(value);
};
var normalize$1 = (input) => {
  let {
    value,
    options
  } = input;
  let keys;
  let values;
  if (Array.isArray(options)) {
    values = options;
    keys = options.map((o9) => String(o9));
  } else {
    values = Object.values(options);
    keys = Object.keys(options);
  }
  if (!("value" in input))
    value = values[0];
  else if (!values.includes(value)) {
    keys.unshift(String(value));
    values.unshift(value);
  }
  if (!Object.values(options).includes(value))
    options[String(value)] = value;
  return {
    value,
    settings: {
      keys,
      values
    }
  };
};
var props$2 = Object.freeze({
  __proto__: null,
  schema: schema$2,
  sanitize: sanitize$2,
  format,
  normalize: normalize$1
});
var SelectContainer = styled("div", {
  $flexCenter: "",
  position: "relative",
  "> svg": {
    pointerEvents: "none",
    position: "absolute",
    right: "$md"
  }
});
var NativeSelect = styled("select", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  opacity: 0
});
var PresentationalSelect = styled("div", {
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "$rowHeight",
  backgroundColor: "$elevation3",
  borderRadius: "$sm",
  padding: "0 $sm",
  cursor: "pointer",
  [`${NativeSelect}:focus + &`]: {
    $focusStyle: ""
  },
  [`${NativeSelect}:hover + &`]: {
    $hoverStyle: ""
  }
});
function Select({
  displayValue,
  value,
  onUpdate,
  id,
  settings,
  disabled
}) {
  const {
    keys,
    values
  } = settings;
  const lastDisplayedValue = (0, import_react2.useRef)();
  if (value === values[displayValue]) {
    lastDisplayedValue.current = keys[displayValue];
  }
  return import_react2.default.createElement(SelectContainer, null, import_react2.default.createElement(NativeSelect, {
    id,
    value: displayValue,
    onChange: (e12) => onUpdate(values[Number(e12.currentTarget.value)]),
    disabled
  }, keys.map((key, index) => import_react2.default.createElement("option", {
    key,
    value: index
  }, key))), import_react2.default.createElement(PresentationalSelect, null, lastDisplayedValue.current), import_react2.default.createElement(Chevron, {
    toggled: true
  }));
}
function SelectComponent() {
  const {
    label,
    value,
    displayValue,
    onUpdate,
    id,
    disabled,
    settings
  } = useInputContext();
  return import_react2.default.createElement(Row, {
    input: true
  }, import_react2.default.createElement(Label, null, label), import_react2.default.createElement(Select, {
    id,
    value,
    displayValue,
    onUpdate,
    settings,
    disabled
  }));
}
var select = createInternalPlugin(_objectSpread2({
  component: SelectComponent
}, props$2));
var schema$1 = (o9) => v8n_esm_default().string().test(o9);
var sanitize$1 = (v5) => {
  if (typeof v5 !== "string")
    throw Error(`Invalid string`);
  return v5;
};
var normalize = ({
  value,
  editable: _editable = true,
  rows: _rows = false
}) => {
  return {
    value,
    settings: {
      editable: _editable,
      rows: typeof _rows === "number" ? _rows : _rows ? 5 : 0
    }
  };
};
var props$1 = Object.freeze({
  __proto__: null,
  schema: schema$1,
  sanitize: sanitize$1,
  normalize
});
var _excluded$2 = ["displayValue", "onUpdate", "onChange", "editable"];
var NonEditableString = styled("div", {
  whiteSpace: "pre-wrap"
});
function String$1(_ref) {
  let {
    displayValue,
    onUpdate,
    onChange,
    editable = true
  } = _ref, props3 = _objectWithoutProperties(_ref, _excluded$2);
  if (editable)
    return import_react2.default.createElement(ValueInput, _extends2({
      value: displayValue,
      onUpdate,
      onChange
    }, props3));
  return import_react2.default.createElement(NonEditableString, null, displayValue);
}
function StringComponent() {
  const {
    label,
    settings,
    displayValue,
    onUpdate,
    onChange
  } = useInputContext();
  return import_react2.default.createElement(Row, {
    input: true
  }, import_react2.default.createElement(Label, null, label), import_react2.default.createElement(String$1, _extends2({
    displayValue,
    onUpdate,
    onChange
  }, settings)));
}
var string = createInternalPlugin(_objectSpread2({
  component: StringComponent
}, props$1));
var schema = (o9) => v8n_esm_default().boolean().test(o9);
var sanitize = (v5) => {
  if (typeof v5 !== "boolean")
    throw Error("Invalid boolean");
  return v5;
};
var props = Object.freeze({
  __proto__: null,
  schema,
  sanitize
});
var StyledInputWrapper = styled("div", {
  position: "relative",
  $flex: "",
  height: "$rowHeight",
  input: {
    $reset: "",
    height: 0,
    width: 0,
    opacity: 0,
    margin: 0
  },
  label: {
    position: "relative",
    $flexCenter: "",
    userSelect: "none",
    cursor: "pointer",
    height: "$checkboxSize",
    width: "$checkboxSize",
    backgroundColor: "$elevation3",
    borderRadius: "$sm",
    $hover: ""
  },
  "input:focus + label": {
    $focusStyle: ""
  },
  "input:focus:checked + label, input:checked + label:hover": {
    $hoverStyle: "$accent3"
  },
  "input + label:active": {
    backgroundColor: "$accent1"
  },
  "input:checked + label:active": {
    backgroundColor: "$accent1"
  },
  "label > svg": {
    display: "none",
    width: "90%",
    height: "90%",
    stroke: "$highlight3"
  },
  "input:checked + label": {
    backgroundColor: "$accent2"
  },
  "input:checked + label > svg": {
    display: "block"
  }
});
function Boolean2({
  value,
  onUpdate,
  id,
  disabled
}) {
  return import_react2.default.createElement(StyledInputWrapper, null, import_react2.default.createElement("input", {
    id,
    type: "checkbox",
    checked: value,
    onChange: (e12) => onUpdate(e12.currentTarget.checked),
    disabled
  }), import_react2.default.createElement("label", {
    htmlFor: id
  }, import_react2.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, import_react2.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 13l4 4L19 7"
  }))));
}
function BooleanComponent() {
  const {
    label,
    value,
    onUpdate,
    disabled,
    id
  } = useInputContext();
  return import_react2.default.createElement(Row, {
    input: true
  }, import_react2.default.createElement(Label, null, label), import_react2.default.createElement(Boolean2, {
    value,
    onUpdate,
    id,
    disabled
  }));
}
var boolean = createInternalPlugin(_objectSpread2({
  component: BooleanComponent
}, props));
var _excluded$1 = ["locked"];
function Coordinate({
  value,
  id,
  valueKey,
  settings,
  onUpdate,
  innerLabelTrim
}) {
  const valueRef = (0, import_react2.useRef)(value[valueKey]);
  valueRef.current = value[valueKey];
  const setValue = (0, import_react2.useCallback)((newValue) => onUpdate({
    [valueKey]: sanitizeValue({
      type: "NUMBER",
      value: valueRef.current,
      settings
    }, newValue)
  }), [onUpdate, settings, valueKey]);
  const number3 = useInputSetters({
    type: "NUMBER",
    value: value[valueKey],
    settings,
    setValue
  });
  return import_react2.default.createElement(Number$1, {
    id,
    label: valueKey,
    value: value[valueKey],
    displayValue: number3.displayValue,
    onUpdate: number3.onUpdate,
    onChange: number3.onChange,
    settings,
    innerLabelTrim
  });
}
var Container = styled("div", {
  display: "grid",
  columnGap: "$colGap",
  gridAutoFlow: "column dense",
  alignItems: "center",
  variants: {
    withLock: {
      true: {
        gridTemplateColumns: "10px auto",
        "> svg": {
          cursor: "pointer"
        }
      }
    }
  }
});
function Lock(_ref) {
  let {
    locked
  } = _ref, props3 = _objectWithoutProperties(_ref, _excluded$1);
  return import_react2.default.createElement("svg", _extends2({
    width: "10",
    height: "10",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props3), locked ? import_react2.default.createElement("path", {
    d: "M5 4.63601C5 3.76031 5.24219 3.1054 5.64323 2.67357C6.03934 2.24705 6.64582 1.9783 7.5014 1.9783C8.35745 1.9783 8.96306 2.24652 9.35823 2.67208C9.75838 3.10299 10 3.75708 10 4.63325V5.99999H5V4.63601ZM4 5.99999V4.63601C4 3.58148 4.29339 2.65754 4.91049 1.99307C5.53252 1.32329 6.42675 0.978302 7.5014 0.978302C8.57583 0.978302 9.46952 1.32233 10.091 1.99162C10.7076 2.65557 11 3.57896 11 4.63325V5.99999H12C12.5523 5.99999 13 6.44771 13 6.99999V13C13 13.5523 12.5523 14 12 14H3C2.44772 14 2 13.5523 2 13V6.99999C2 6.44771 2.44772 5.99999 3 5.99999H4ZM3 6.99999H12V13H3V6.99999Z",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }) : import_react2.default.createElement("path", {
    d: "M9 3.63601C9 2.76044 9.24207 2.11211 9.64154 1.68623C10.0366 1.26502 10.6432 1 11.5014 1C12.4485 1 13.0839 1.30552 13.4722 1.80636C13.8031 2.23312 14 2.84313 14 3.63325H15C15 2.68242 14.7626 1.83856 14.2625 1.19361C13.6389 0.38943 12.6743 0 11.5014 0C10.4294 0 9.53523 0.337871 8.91218 1.0021C8.29351 1.66167 8 2.58135 8 3.63601V6H1C0.447715 6 0 6.44772 0 7V13C0 13.5523 0.447715 14 1 14H10C10.5523 14 11 13.5523 11 13V7C11 6.44772 10.5523 6 10 6H9V3.63601ZM1 7H10V13H1V7Z",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}
function Vector({
  value,
  onUpdate,
  settings,
  innerLabelTrim
}) {
  const {
    id,
    setSettings
  } = useInputContext();
  const {
    lock,
    locked
  } = settings;
  return import_react2.default.createElement(Container, {
    withLock: lock
  }, lock && import_react2.default.createElement(Lock, {
    locked,
    onClick: () => setSettings({
      locked: !locked
    })
  }), Object.keys(value).map((key, i6) => import_react2.default.createElement(Coordinate, {
    id: i6 === 0 ? id : `${id}.${key}`,
    key,
    valueKey: key,
    value,
    settings: settings[key],
    onUpdate,
    innerLabelTrim
  })));
}
var normalizeKeyedNumberSettings = (value, settings) => {
  const _settings = {};
  let maxStep = 0;
  let minPad = Infinity;
  Object.entries(value).forEach(([key, v5]) => {
    _settings[key] = normalize$2(_objectSpread2({
      value: v5
    }, settings[key])).settings;
    maxStep = Math.max(maxStep, _settings[key].step);
    minPad = Math.min(minPad, _settings[key].pad);
  });
  for (let key in _settings) {
    const {
      step,
      min,
      max
    } = settings[key] || {};
    if (!isFinite(step) && (!isFinite(min) || !isFinite(max))) {
      _settings[key].step = maxStep;
      _settings[key].pad = minPad;
    }
  }
  return _settings;
};
var _excluded = ["lock"];
var _excluded2 = ["value"];
function getVectorSchema(dimension) {
  const isVectorArray = v8n_esm_default().array().length(dimension).every.number();
  const isVectorObject = (o9) => {
    if (!o9 || typeof o9 !== "object")
      return false;
    const values = Object.values(o9);
    return values.length === dimension && values.every((v5) => isFinite(v5));
  };
  return (o9) => {
    return isVectorArray.test(o9) || isVectorObject(o9);
  };
}
function getVectorType(value) {
  return Array.isArray(value) ? "array" : "object";
}
function convert(value, format3, keys) {
  if (getVectorType(value) === format3)
    return value;
  return format3 === "array" ? Object.values(value) : mapArrayToKeys(value, keys);
}
var sanitizeVector = (value, settings, previousValue) => {
  const _value = convert(value, "object", settings.keys);
  for (let key in _value)
    _value[key] = sanitize$3(_value[key], settings[key]);
  const _valueKeys = Object.keys(_value);
  let newValue = {};
  if (_valueKeys.length === settings.keys.length)
    newValue = _value;
  else {
    const _previousValue = convert(previousValue, "object", settings.keys);
    if (_valueKeys.length === 1 && settings.locked) {
      const lockedKey = _valueKeys[0];
      const lockedCoordinate = _value[lockedKey];
      const previousLockedCoordinate = _previousValue[lockedKey];
      const ratio = previousLockedCoordinate !== 0 ? lockedCoordinate / previousLockedCoordinate : 1;
      for (let key in _previousValue) {
        if (key === lockedKey)
          newValue[lockedKey] = lockedCoordinate;
        else
          newValue[key] = _previousValue[key] * ratio;
      }
    } else {
      newValue = _objectSpread2(_objectSpread2({}, _previousValue), _value);
    }
  }
  return convert(newValue, settings.format, settings.keys);
};
var formatVector = (value, settings) => convert(value, "object", settings.keys);
var isNumberSettings = (o9) => !!o9 && ("step" in o9 || "min" in o9 || "max" in o9);
function normalizeVector(value, settings, defaultKeys = []) {
  const {
    lock = false
  } = settings, _settings = _objectWithoutProperties(settings, _excluded);
  const format3 = Array.isArray(value) ? "array" : "object";
  const keys = format3 === "object" ? Object.keys(value) : defaultKeys;
  const _value = convert(value, "object", keys);
  const mergedSettings = isNumberSettings(_settings) ? keys.reduce((acc, k5) => Object.assign(acc, {
    [k5]: _settings
  }), {}) : _settings;
  const numberSettings = normalizeKeyedNumberSettings(_value, mergedSettings);
  return {
    value: format3 === "array" ? value : _value,
    settings: _objectSpread2(_objectSpread2({}, numberSettings), {}, {
      format: format3,
      keys,
      lock,
      locked: false
    })
  };
}
function getVectorPlugin(defaultKeys) {
  return {
    schema: getVectorSchema(defaultKeys.length),
    normalize: (_ref) => {
      let {
        value
      } = _ref, settings = _objectWithoutProperties(_ref, _excluded2);
      return normalizeVector(value, settings, defaultKeys);
    },
    format: (value, settings) => formatVector(value, settings),
    sanitize: (value, settings, prevValue) => sanitizeVector(value, settings, prevValue)
  };
}

// node_modules/colord/index.mjs
var r12 = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) };
var t10 = function(r14) {
  return "string" == typeof r14 ? r14.length > 0 : "number" == typeof r14;
};
var n4 = function(r14, t12, n6) {
  return void 0 === t12 && (t12 = 0), void 0 === n6 && (n6 = Math.pow(10, t12)), Math.round(n6 * r14) / n6 + 0;
};
var e10 = function(r14, t12, n6) {
  return void 0 === t12 && (t12 = 0), void 0 === n6 && (n6 = 1), r14 > n6 ? n6 : r14 > t12 ? r14 : t12;
};
var u3 = function(r14) {
  return (r14 = isFinite(r14) ? r14 % 360 : 0) > 0 ? r14 : r14 + 360;
};
var a3 = function(r14) {
  return { r: e10(r14.r, 0, 255), g: e10(r14.g, 0, 255), b: e10(r14.b, 0, 255), a: e10(r14.a) };
};
var o7 = function(r14) {
  return { r: n4(r14.r), g: n4(r14.g), b: n4(r14.b), a: n4(r14.a, 3) };
};
var i4 = /^#([0-9a-f]{3,8})$/i;
var s4 = function(r14) {
  var t12 = r14.toString(16);
  return t12.length < 2 ? "0" + t12 : t12;
};
var h3 = function(r14) {
  var t12 = r14.r, n6 = r14.g, e12 = r14.b, u5 = r14.a, a5 = Math.max(t12, n6, e12), o9 = a5 - Math.min(t12, n6, e12), i6 = o9 ? a5 === t12 ? (n6 - e12) / o9 : a5 === n6 ? 2 + (e12 - t12) / o9 : 4 + (t12 - n6) / o9 : 0;
  return { h: 60 * (i6 < 0 ? i6 + 6 : i6), s: a5 ? o9 / a5 * 100 : 0, v: a5 / 255 * 100, a: u5 };
};
var b3 = function(r14) {
  var t12 = r14.h, n6 = r14.s, e12 = r14.v, u5 = r14.a;
  t12 = t12 / 360 * 6, n6 /= 100, e12 /= 100;
  var a5 = Math.floor(t12), o9 = e12 * (1 - n6), i6 = e12 * (1 - (t12 - a5) * n6), s6 = e12 * (1 - (1 - t12 + a5) * n6), h5 = a5 % 6;
  return { r: 255 * [e12, i6, o9, o9, s6, e12][h5], g: 255 * [s6, e12, e12, i6, o9, o9][h5], b: 255 * [o9, o9, s6, e12, e12, i6][h5], a: u5 };
};
var g3 = function(r14) {
  return { h: u3(r14.h), s: e10(r14.s, 0, 100), l: e10(r14.l, 0, 100), a: e10(r14.a) };
};
var d3 = function(r14) {
  return { h: n4(r14.h), s: n4(r14.s), l: n4(r14.l), a: n4(r14.a, 3) };
};
var f3 = function(r14) {
  return b3((n6 = (t12 = r14).s, { h: t12.h, s: (n6 *= ((e12 = t12.l) < 50 ? e12 : 100 - e12) / 100) > 0 ? 2 * n6 / (e12 + n6) * 100 : 0, v: e12 + n6, a: t12.a }));
  var t12, n6, e12;
};
var c4 = function(r14) {
  return { h: (t12 = h3(r14)).h, s: (u5 = (200 - (n6 = t12.s)) * (e12 = t12.v) / 100) > 0 && u5 < 200 ? n6 * e12 / 100 / (u5 <= 100 ? u5 : 200 - u5) * 100 : 0, l: u5 / 2, a: t12.a };
  var t12, n6, e12, u5;
};
var l4 = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var p3 = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var v3 = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var m3 = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var y3 = { string: [[function(r14) {
  var t12 = i4.exec(r14);
  return t12 ? (r14 = t12[1]).length <= 4 ? { r: parseInt(r14[0] + r14[0], 16), g: parseInt(r14[1] + r14[1], 16), b: parseInt(r14[2] + r14[2], 16), a: 4 === r14.length ? n4(parseInt(r14[3] + r14[3], 16) / 255, 2) : 1 } : 6 === r14.length || 8 === r14.length ? { r: parseInt(r14.substr(0, 2), 16), g: parseInt(r14.substr(2, 2), 16), b: parseInt(r14.substr(4, 2), 16), a: 8 === r14.length ? n4(parseInt(r14.substr(6, 2), 16) / 255, 2) : 1 } : null : null;
}, "hex"], [function(r14) {
  var t12 = v3.exec(r14) || m3.exec(r14);
  return t12 ? t12[2] !== t12[4] || t12[4] !== t12[6] ? null : a3({ r: Number(t12[1]) / (t12[2] ? 100 / 255 : 1), g: Number(t12[3]) / (t12[4] ? 100 / 255 : 1), b: Number(t12[5]) / (t12[6] ? 100 / 255 : 1), a: void 0 === t12[7] ? 1 : Number(t12[7]) / (t12[8] ? 100 : 1) }) : null;
}, "rgb"], [function(t12) {
  var n6 = l4.exec(t12) || p3.exec(t12);
  if (!n6)
    return null;
  var e12, u5, a5 = g3({ h: (e12 = n6[1], u5 = n6[2], void 0 === u5 && (u5 = "deg"), Number(e12) * (r12[u5] || 1)), s: Number(n6[3]), l: Number(n6[4]), a: void 0 === n6[5] ? 1 : Number(n6[5]) / (n6[6] ? 100 : 1) });
  return f3(a5);
}, "hsl"]], object: [[function(r14) {
  var n6 = r14.r, e12 = r14.g, u5 = r14.b, o9 = r14.a, i6 = void 0 === o9 ? 1 : o9;
  return t10(n6) && t10(e12) && t10(u5) ? a3({ r: Number(n6), g: Number(e12), b: Number(u5), a: Number(i6) }) : null;
}, "rgb"], [function(r14) {
  var n6 = r14.h, e12 = r14.s, u5 = r14.l, a5 = r14.a, o9 = void 0 === a5 ? 1 : a5;
  if (!t10(n6) || !t10(e12) || !t10(u5))
    return null;
  var i6 = g3({ h: Number(n6), s: Number(e12), l: Number(u5), a: Number(o9) });
  return f3(i6);
}, "hsl"], [function(r14) {
  var n6 = r14.h, a5 = r14.s, o9 = r14.v, i6 = r14.a, s6 = void 0 === i6 ? 1 : i6;
  if (!t10(n6) || !t10(a5) || !t10(o9))
    return null;
  var h5 = function(r15) {
    return { h: u3(r15.h), s: e10(r15.s, 0, 100), v: e10(r15.v, 0, 100), a: e10(r15.a) };
  }({ h: Number(n6), s: Number(a5), v: Number(o9), a: Number(s6) });
  return b3(h5);
}, "hsv"]] };
var N2 = function(r14, t12) {
  for (var n6 = 0; n6 < t12.length; n6++) {
    var e12 = t12[n6][0](r14);
    if (e12)
      return [e12, t12[n6][1]];
  }
  return [null, void 0];
};
var x3 = function(r14) {
  return "string" == typeof r14 ? N2(r14.trim(), y3.string) : "object" == typeof r14 && null !== r14 ? N2(r14, y3.object) : [null, void 0];
};
var I2 = function(r14) {
  return x3(r14)[1];
};
var M2 = function(r14, t12) {
  var n6 = c4(r14);
  return { h: n6.h, s: e10(n6.s + 100 * t12, 0, 100), l: n6.l, a: n6.a };
};
var H2 = function(r14) {
  return (299 * r14.r + 587 * r14.g + 114 * r14.b) / 1e3 / 255;
};
var $2 = function(r14, t12) {
  var n6 = c4(r14);
  return { h: n6.h, s: n6.s, l: e10(n6.l + 100 * t12, 0, 100), a: n6.a };
};
var j2 = function() {
  function r14(r15) {
    this.parsed = x3(r15)[0], this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 };
  }
  return r14.prototype.isValid = function() {
    return null !== this.parsed;
  }, r14.prototype.brightness = function() {
    return n4(H2(this.rgba), 2);
  }, r14.prototype.isDark = function() {
    return H2(this.rgba) < 0.5;
  }, r14.prototype.isLight = function() {
    return H2(this.rgba) >= 0.5;
  }, r14.prototype.toHex = function() {
    return r15 = o7(this.rgba), t12 = r15.r, e12 = r15.g, u5 = r15.b, i6 = (a5 = r15.a) < 1 ? s4(n4(255 * a5)) : "", "#" + s4(t12) + s4(e12) + s4(u5) + i6;
    var r15, t12, e12, u5, a5, i6;
  }, r14.prototype.toRgb = function() {
    return o7(this.rgba);
  }, r14.prototype.toRgbString = function() {
    return r15 = o7(this.rgba), t12 = r15.r, n6 = r15.g, e12 = r15.b, (u5 = r15.a) < 1 ? "rgba(" + t12 + ", " + n6 + ", " + e12 + ", " + u5 + ")" : "rgb(" + t12 + ", " + n6 + ", " + e12 + ")";
    var r15, t12, n6, e12, u5;
  }, r14.prototype.toHsl = function() {
    return d3(c4(this.rgba));
  }, r14.prototype.toHslString = function() {
    return r15 = d3(c4(this.rgba)), t12 = r15.h, n6 = r15.s, e12 = r15.l, (u5 = r15.a) < 1 ? "hsla(" + t12 + ", " + n6 + "%, " + e12 + "%, " + u5 + ")" : "hsl(" + t12 + ", " + n6 + "%, " + e12 + "%)";
    var r15, t12, n6, e12, u5;
  }, r14.prototype.toHsv = function() {
    return r15 = h3(this.rgba), { h: n4(r15.h), s: n4(r15.s), v: n4(r15.v), a: n4(r15.a, 3) };
    var r15;
  }, r14.prototype.invert = function() {
    return w3({ r: 255 - (r15 = this.rgba).r, g: 255 - r15.g, b: 255 - r15.b, a: r15.a });
    var r15;
  }, r14.prototype.saturate = function(r15) {
    return void 0 === r15 && (r15 = 0.1), w3(M2(this.rgba, r15));
  }, r14.prototype.desaturate = function(r15) {
    return void 0 === r15 && (r15 = 0.1), w3(M2(this.rgba, -r15));
  }, r14.prototype.grayscale = function() {
    return w3(M2(this.rgba, -1));
  }, r14.prototype.lighten = function(r15) {
    return void 0 === r15 && (r15 = 0.1), w3($2(this.rgba, r15));
  }, r14.prototype.darken = function(r15) {
    return void 0 === r15 && (r15 = 0.1), w3($2(this.rgba, -r15));
  }, r14.prototype.rotate = function(r15) {
    return void 0 === r15 && (r15 = 15), this.hue(this.hue() + r15);
  }, r14.prototype.alpha = function(r15) {
    return "number" == typeof r15 ? w3({ r: (t12 = this.rgba).r, g: t12.g, b: t12.b, a: r15 }) : n4(this.rgba.a, 3);
    var t12;
  }, r14.prototype.hue = function(r15) {
    var t12 = c4(this.rgba);
    return "number" == typeof r15 ? w3({ h: r15, s: t12.s, l: t12.l, a: t12.a }) : n4(t12.h);
  }, r14.prototype.isEqual = function(r15) {
    return this.toHex() === w3(r15).toHex();
  }, r14;
}();
var w3 = function(r14) {
  return r14 instanceof j2 ? r14 : new j2(r14);
};
var S2 = [];
var k3 = function(r14) {
  r14.forEach(function(r15) {
    S2.indexOf(r15) < 0 && (r15(j2, y3), S2.push(r15));
  });
};

// node_modules/colord/plugins/names.mjs
function names_default(e12, f5) {
  var a5 = { white: "#ffffff", bisque: "#ffe4c4", blue: "#0000ff", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", antiquewhite: "#faebd7", aqua: "#00ffff", azure: "#f0ffff", whitesmoke: "#f5f5f5", papayawhip: "#ffefd5", plum: "#dda0dd", blanchedalmond: "#ffebcd", black: "#000000", gold: "#ffd700", goldenrod: "#daa520", gainsboro: "#dcdcdc", cornsilk: "#fff8dc", cornflowerblue: "#6495ed", burlywood: "#deb887", aquamarine: "#7fffd4", beige: "#f5f5dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkkhaki: "#bdb76b", darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", peachpuff: "#ffdab9", darkmagenta: "#8b008b", darkred: "#8b0000", darkorchid: "#9932cc", darkorange: "#ff8c00", darkslateblue: "#483d8b", gray: "#808080", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", deeppink: "#ff1493", deepskyblue: "#00bfff", wheat: "#f5deb3", firebrick: "#b22222", floralwhite: "#fffaf0", ghostwhite: "#f8f8ff", darkviolet: "#9400d3", magenta: "#ff00ff", green: "#008000", dodgerblue: "#1e90ff", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", blueviolet: "#8a2be2", forestgreen: "#228b22", lawngreen: "#7cfc00", indianred: "#cd5c5c", indigo: "#4b0082", fuchsia: "#ff00ff", brown: "#a52a2a", maroon: "#800000", mediumblue: "#0000cd", lightcoral: "#f08080", darkturquoise: "#00ced1", lightcyan: "#e0ffff", ivory: "#fffff0", lightyellow: "#ffffe0", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", linen: "#faf0e6", mediumaquamarine: "#66cdaa", lemonchiffon: "#fffacd", lime: "#00ff00", khaki: "#f0e68c", mediumseagreen: "#3cb371", limegreen: "#32cd32", mediumspringgreen: "#00fa9a", lightskyblue: "#87cefa", lightblue: "#add8e6", midnightblue: "#191970", lightpink: "#ffb6c1", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", mintcream: "#f5fffa", lightslategray: "#778899", lightslategrey: "#778899", navajowhite: "#ffdead", navy: "#000080", mediumvioletred: "#c71585", powderblue: "#b0e0e6", palegoldenrod: "#eee8aa", oldlace: "#fdf5e6", paleturquoise: "#afeeee", mediumturquoise: "#48d1cc", mediumorchid: "#ba55d3", rebeccapurple: "#663399", lightsteelblue: "#b0c4de", mediumslateblue: "#7b68ee", thistle: "#d8bfd8", tan: "#d2b48c", orchid: "#da70d6", mediumpurple: "#9370db", purple: "#800080", pink: "#ffc0cb", skyblue: "#87ceeb", springgreen: "#00ff7f", palegreen: "#98fb98", red: "#ff0000", yellow: "#ffff00", slateblue: "#6a5acd", lavenderblush: "#fff0f5", peru: "#cd853f", palevioletred: "#db7093", violet: "#ee82ee", teal: "#008080", slategray: "#708090", slategrey: "#708090", aliceblue: "#f0f8ff", darkseagreen: "#8fbc8f", darkolivegreen: "#556b2f", greenyellow: "#adff2f", seagreen: "#2e8b57", seashell: "#fff5ee", tomato: "#ff6347", silver: "#c0c0c0", sienna: "#a0522d", lavender: "#e6e6fa", lightgreen: "#90ee90", orange: "#ffa500", orangered: "#ff4500", steelblue: "#4682b4", royalblue: "#4169e1", turquoise: "#40e0d0", yellowgreen: "#9acd32", salmon: "#fa8072", saddlebrown: "#8b4513", sandybrown: "#f4a460", rosybrown: "#bc8f8f", darksalmon: "#e9967a", lightgoldenrodyellow: "#fafad2", snow: "#fffafa", lightgrey: "#d3d3d3", lightgray: "#d3d3d3", dimgray: "#696969", dimgrey: "#696969", olivedrab: "#6b8e23", olive: "#808000" }, r14 = {};
  for (var d5 in a5)
    r14[a5[d5]] = d5;
  var l6 = {};
  e12.prototype.toName = function(f6) {
    if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b))
      return "transparent";
    var d6, i6, n6 = r14[this.toHex()];
    if (n6)
      return n6;
    if (null == f6 ? void 0 : f6.closest) {
      var o9 = this.toRgb(), t12 = 1 / 0, b5 = "black";
      if (!l6.length)
        for (var c6 in a5)
          l6[c6] = new e12(a5[c6]).toRgb();
      for (var g5 in a5) {
        var u5 = (d6 = o9, i6 = l6[g5], Math.pow(d6.r - i6.r, 2) + Math.pow(d6.g - i6.g, 2) + Math.pow(d6.b - i6.b, 2));
        u5 < t12 && (t12 = u5, b5 = g5);
      }
      return b5;
    }
  };
  f5.string.push([function(f6) {
    var r15 = f6.toLowerCase(), d6 = "transparent" === r15 ? "#0000" : a5[r15];
    return d6 ? new e12(d6).toRgb() : null;
  }, "name"]);
}

// node_modules/leva/dist/leva.esm.js
var import_react_dom4 = __toESM(require_react_dom());
var import_react7 = __toESM(require_react());

// node_modules/react-colorful/dist/index.mjs
var import_react5 = __toESM(require_react(), 1);
function u4() {
  return (u4 = Object.assign || function(e12) {
    for (var r14 = 1; r14 < arguments.length; r14++) {
      var t12 = arguments[r14];
      for (var n6 in t12)
        Object.prototype.hasOwnProperty.call(t12, n6) && (e12[n6] = t12[n6]);
    }
    return e12;
  }).apply(this, arguments);
}
function c5(e12, r14) {
  if (null == e12)
    return {};
  var t12, n6, o9 = {}, a5 = Object.keys(e12);
  for (n6 = 0; n6 < a5.length; n6++)
    r14.indexOf(t12 = a5[n6]) >= 0 || (o9[t12] = e12[t12]);
  return o9;
}
function i5(e12) {
  var t12 = (0, import_react5.useRef)(e12), n6 = (0, import_react5.useRef)(function(e13) {
    t12.current && t12.current(e13);
  });
  return t12.current = e12, n6.current;
}
var s5 = function(e12, r14, t12) {
  return void 0 === r14 && (r14 = 0), void 0 === t12 && (t12 = 1), e12 > t12 ? t12 : e12 < r14 ? r14 : e12;
};
var f4 = function(e12) {
  return "touches" in e12;
};
var v4 = function(e12) {
  return e12 && e12.ownerDocument.defaultView || self;
};
var d4 = function(e12, r14, t12) {
  var n6 = e12.getBoundingClientRect(), o9 = f4(r14) ? function(e13, r15) {
    for (var t13 = 0; t13 < e13.length; t13++)
      if (e13[t13].identifier === r15)
        return e13[t13];
    return e13[0];
  }(r14.touches, t12) : r14;
  return { left: s5((o9.pageX - (n6.left + v4(e12).pageXOffset)) / n6.width), top: s5((o9.pageY - (n6.top + v4(e12).pageYOffset)) / n6.height) };
};
var h4 = function(e12) {
  !f4(e12) && e12.preventDefault();
};
var m4 = import_react5.default.memo(function(o9) {
  var a5 = o9.onMove, l6 = o9.onKey, s6 = c5(o9, ["onMove", "onKey"]), m5 = (0, import_react5.useRef)(null), g5 = i5(a5), p5 = i5(l6), b5 = (0, import_react5.useRef)(null), _3 = (0, import_react5.useRef)(false), x4 = (0, import_react5.useMemo)(function() {
    var e12 = function(e13) {
      h4(e13), (f4(e13) ? e13.touches.length > 0 : e13.buttons > 0) && m5.current ? g5(d4(m5.current, e13, b5.current)) : t12(false);
    }, r14 = function() {
      return t12(false);
    };
    function t12(t13) {
      var n6 = _3.current, o10 = v4(m5.current), a6 = t13 ? o10.addEventListener : o10.removeEventListener;
      a6(n6 ? "touchmove" : "mousemove", e12), a6(n6 ? "touchend" : "mouseup", r14);
    }
    return [function(e13) {
      var r15 = e13.nativeEvent, n6 = m5.current;
      if (n6 && (h4(r15), !function(e14, r16) {
        return r16 && !f4(e14);
      }(r15, _3.current) && n6)) {
        if (f4(r15)) {
          _3.current = true;
          var o10 = r15.changedTouches || [];
          o10.length && (b5.current = o10[0].identifier);
        }
        n6.focus(), g5(d4(n6, r15, b5.current)), t12(true);
      }
    }, function(e13) {
      var r15 = e13.which || e13.keyCode;
      r15 < 37 || r15 > 40 || (e13.preventDefault(), p5({ left: 39 === r15 ? 0.05 : 37 === r15 ? -0.05 : 0, top: 40 === r15 ? 0.05 : 38 === r15 ? -0.05 : 0 }));
    }, t12];
  }, [p5, g5]), C2 = x4[0], E3 = x4[1], H3 = x4[2];
  return (0, import_react5.useEffect)(function() {
    return H3;
  }, [H3]), import_react5.default.createElement("div", u4({}, s6, { onTouchStart: C2, onMouseDown: C2, className: "react-colorful__interactive", ref: m5, onKeyDown: E3, tabIndex: 0, role: "slider" }));
});
var g4 = function(e12) {
  return e12.filter(Boolean).join(" ");
};
var p4 = function(r14) {
  var t12 = r14.color, n6 = r14.left, o9 = r14.top, a5 = void 0 === o9 ? 0.5 : o9, l6 = g4(["react-colorful__pointer", r14.className]);
  return import_react5.default.createElement("div", { className: l6, style: { top: 100 * a5 + "%", left: 100 * n6 + "%" } }, import_react5.default.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t12 } }));
};
var b4 = function(e12, r14, t12) {
  return void 0 === r14 && (r14 = 0), void 0 === t12 && (t12 = Math.pow(10, r14)), Math.round(t12 * e12) / t12;
};
var _2 = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) };
var y4 = function(e12) {
  var r14 = e12.s, t12 = e12.v, n6 = e12.a, o9 = (200 - r14) * t12 / 100;
  return { h: b4(e12.h), s: b4(o9 > 0 && o9 < 200 ? r14 * t12 / 100 / (o9 <= 100 ? o9 : 200 - o9) * 100 : 0), l: b4(o9 / 2), a: b4(n6, 2) };
};
var q2 = function(e12) {
  var r14 = y4(e12);
  return "hsl(" + r14.h + ", " + r14.s + "%, " + r14.l + "%)";
};
var k4 = function(e12) {
  var r14 = y4(e12);
  return "hsla(" + r14.h + ", " + r14.s + "%, " + r14.l + "%, " + r14.a + ")";
};
var I3 = function(e12) {
  var r14 = e12.h, t12 = e12.s, n6 = e12.v, o9 = e12.a;
  r14 = r14 / 360 * 6, t12 /= 100, n6 /= 100;
  var a5 = Math.floor(r14), l6 = n6 * (1 - t12), u5 = n6 * (1 - (r14 - a5) * t12), c6 = n6 * (1 - (1 - r14 + a5) * t12), i6 = a5 % 6;
  return { r: b4(255 * [n6, u5, l6, l6, c6, n6][i6]), g: b4(255 * [c6, n6, n6, u5, l6, l6][i6]), b: b4(255 * [l6, l6, c6, n6, n6, u5][i6]), a: b4(o9, 2) };
};
var L2 = function(e12) {
  var r14 = e12.r, t12 = e12.g, n6 = e12.b, o9 = e12.a, a5 = Math.max(r14, t12, n6), l6 = a5 - Math.min(r14, t12, n6), u5 = l6 ? a5 === r14 ? (t12 - n6) / l6 : a5 === t12 ? 2 + (n6 - r14) / l6 : 4 + (r14 - t12) / l6 : 0;
  return { h: b4(60 * (u5 < 0 ? u5 + 6 : u5)), s: b4(a5 ? l6 / a5 * 100 : 0), v: b4(a5 / 255 * 100), a: o9 };
};
var S3 = import_react5.default.memo(function(r14) {
  var t12 = r14.hue, n6 = r14.onChange, o9 = g4(["react-colorful__hue", r14.className]);
  return import_react5.default.createElement("div", { className: o9 }, import_react5.default.createElement(m4, { onMove: function(e12) {
    n6({ h: 360 * e12.left });
  }, onKey: function(e12) {
    n6({ h: s5(t12 + 360 * e12.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": b4(t12), "aria-valuemax": "360", "aria-valuemin": "0" }, import_react5.default.createElement(p4, { className: "react-colorful__hue-pointer", left: t12 / 360, color: q2({ h: t12, s: 100, v: 100, a: 1 }) })));
});
var T3 = import_react5.default.memo(function(r14) {
  var t12 = r14.hsva, n6 = r14.onChange, o9 = { backgroundColor: q2({ h: t12.h, s: 100, v: 100, a: 1 }) };
  return import_react5.default.createElement("div", { className: "react-colorful__saturation", style: o9 }, import_react5.default.createElement(m4, { onMove: function(e12) {
    n6({ s: 100 * e12.left, v: 100 - 100 * e12.top });
  }, onKey: function(e12) {
    n6({ s: s5(t12.s + 100 * e12.left, 0, 100), v: s5(t12.v - 100 * e12.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + b4(t12.s) + "%, Brightness " + b4(t12.v) + "%" }, import_react5.default.createElement(p4, { className: "react-colorful__saturation-pointer", top: 1 - t12.v / 100, left: t12.s / 100, color: q2(t12) })));
});
var F2 = function(e12, r14) {
  if (e12 === r14)
    return true;
  for (var t12 in e12)
    if (e12[t12] !== r14[t12])
      return false;
  return true;
};
function Y2(e12, t12, l6) {
  var u5 = i5(l6), c6 = (0, import_react5.useState)(function() {
    return e12.toHsva(t12);
  }), s6 = c6[0], f5 = c6[1], v5 = (0, import_react5.useRef)({ color: t12, hsva: s6 });
  (0, import_react5.useEffect)(function() {
    if (!e12.equal(t12, v5.current.color)) {
      var r14 = e12.toHsva(t12);
      v5.current = { hsva: r14, color: t12 }, f5(r14);
    }
  }, [t12, e12]), (0, import_react5.useEffect)(function() {
    var r14;
    F2(s6, v5.current.hsva) || e12.equal(r14 = e12.fromHsva(s6), v5.current.color) || (v5.current = { hsva: s6, color: r14 }, u5(r14));
  }, [s6, e12, u5]);
  var d5 = (0, import_react5.useCallback)(function(e13) {
    f5(function(r14) {
      return Object.assign({}, r14, e13);
    });
  }, []);
  return [s6, d5];
}
var R2;
var V2 = "undefined" != typeof window ? import_react5.useLayoutEffect : import_react5.useEffect;
var $3 = function() {
  return R2 || ("undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0);
};
var J2 = /* @__PURE__ */ new Map();
var Q = function(e12) {
  V2(function() {
    var r14 = e12.current ? e12.current.ownerDocument : document;
    if (void 0 !== r14 && !J2.has(r14)) {
      var t12 = r14.createElement("style");
      t12.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, J2.set(r14, t12);
      var n6 = $3();
      n6 && t12.setAttribute("nonce", n6), r14.head.appendChild(t12);
    }
  }, []);
};
var U2 = function(t12) {
  var n6 = t12.className, o9 = t12.colorModel, a5 = t12.color, l6 = void 0 === a5 ? o9.defaultColor : a5, i6 = t12.onChange, s6 = c5(t12, ["className", "colorModel", "color", "onChange"]), f5 = (0, import_react5.useRef)(null);
  Q(f5);
  var v5 = Y2(o9, l6, i6), d5 = v5[0], h5 = v5[1], m5 = g4(["react-colorful", n6]);
  return import_react5.default.createElement("div", u4({}, s6, { ref: f5, className: m5 }), import_react5.default.createElement(T3, { hsva: d5, onChange: h5 }), import_react5.default.createElement(S3, { hue: d5.h, onChange: h5, className: "react-colorful__last-control" }));
};
var ee = function(r14) {
  var t12 = r14.className, n6 = r14.hsva, o9 = r14.onChange, a5 = { backgroundImage: "linear-gradient(90deg, " + k4(Object.assign({}, n6, { a: 0 })) + ", " + k4(Object.assign({}, n6, { a: 1 })) + ")" }, l6 = g4(["react-colorful__alpha", t12]), u5 = b4(100 * n6.a);
  return import_react5.default.createElement("div", { className: l6 }, import_react5.default.createElement("div", { className: "react-colorful__alpha-gradient", style: a5 }), import_react5.default.createElement(m4, { onMove: function(e12) {
    o9({ a: e12.left });
  }, onKey: function(e12) {
    o9({ a: s5(n6.a + e12.left) });
  }, "aria-label": "Alpha", "aria-valuetext": u5 + "%", "aria-valuenow": u5, "aria-valuemin": "0", "aria-valuemax": "100" }, import_react5.default.createElement(p4, { className: "react-colorful__alpha-pointer", left: n6.a, color: k4(n6) })));
};
var re = function(t12) {
  var n6 = t12.className, o9 = t12.colorModel, a5 = t12.color, l6 = void 0 === a5 ? o9.defaultColor : a5, i6 = t12.onChange, s6 = c5(t12, ["className", "colorModel", "color", "onChange"]), f5 = (0, import_react5.useRef)(null);
  Q(f5);
  var v5 = Y2(o9, l6, i6), d5 = v5[0], h5 = v5[1], m5 = g4(["react-colorful", n6]);
  return import_react5.default.createElement("div", u4({}, s6, { ref: f5, className: m5 }), import_react5.default.createElement(T3, { hsva: d5, onChange: h5 }), import_react5.default.createElement(S3, { hue: d5.h, onChange: h5 }), import_react5.default.createElement(ee, { hsva: d5, onChange: h5, className: "react-colorful__last-control" }));
};
var xe = { defaultColor: { r: 0, g: 0, b: 0, a: 1 }, toHsva: L2, fromHsva: I3, equal: F2 };
var Ce = function(r14) {
  return import_react5.default.createElement(re, u4({}, r14, { colorModel: xe }));
};
var Me = { defaultColor: { r: 0, g: 0, b: 0 }, toHsva: function(e12) {
  return L2({ r: e12.r, g: e12.g, b: e12.b, a: 1 });
}, fromHsva: function(e12) {
  return { r: (r14 = I3(e12)).r, g: r14.g, b: r14.b };
  var r14;
}, equal: F2 };
var Ne = function(r14) {
  return import_react5.default.createElement(U2, u4({}, r14, { colorModel: Me }));
};

// node_modules/react-dropzone/dist/es/index.js
var import_react6 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/tslib/tslib.es6.js
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e12) {
        reject(e12);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e12) {
        reject(e12);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _3 = { label: 0, sent: function() {
    if (t12[0] & 1)
      throw t12[1];
    return t12[1];
  }, trys: [], ops: [] }, f5, y5, t12, g5;
  return g5 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g5[Symbol.iterator] = function() {
    return this;
  }), g5;
  function verb(n6) {
    return function(v5) {
      return step([n6, v5]);
    };
  }
  function step(op) {
    if (f5)
      throw new TypeError("Generator is already executing.");
    while (g5 && (g5 = 0, op[0] && (_3 = 0)), _3)
      try {
        if (f5 = 1, y5 && (t12 = op[0] & 2 ? y5["return"] : op[0] ? y5["throw"] || ((t12 = y5["return"]) && t12.call(y5), 0) : y5.next) && !(t12 = t12.call(y5, op[1])).done)
          return t12;
        if (y5 = 0, t12)
          op = [op[0] & 2, t12.value];
        switch (op[0]) {
          case 0:
          case 1:
            t12 = op;
            break;
          case 4:
            _3.label++;
            return { value: op[1], done: false };
          case 5:
            _3.label++;
            y5 = op[1];
            op = [0];
            continue;
          case 7:
            op = _3.ops.pop();
            _3.trys.pop();
            continue;
          default:
            if (!(t12 = _3.trys, t12 = t12.length > 0 && t12[t12.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _3 = 0;
              continue;
            }
            if (op[0] === 3 && (!t12 || op[1] > t12[0] && op[1] < t12[3])) {
              _3.label = op[1];
              break;
            }
            if (op[0] === 6 && _3.label < t12[1]) {
              _3.label = t12[1];
              t12 = op;
              break;
            }
            if (t12 && _3.label < t12[2]) {
              _3.label = t12[2];
              _3.ops.push(op);
              break;
            }
            if (t12[2])
              _3.ops.pop();
            _3.trys.pop();
            continue;
        }
        op = body.call(thisArg, _3);
      } catch (e12) {
        op = [6, e12];
        y5 = 0;
      } finally {
        f5 = t12 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __read(o9, n6) {
  var m5 = typeof Symbol === "function" && o9[Symbol.iterator];
  if (!m5)
    return o9;
  var i6 = m5.call(o9), r14, ar = [], e12;
  try {
    while ((n6 === void 0 || n6-- > 0) && !(r14 = i6.next()).done)
      ar.push(r14.value);
  } catch (error) {
    e12 = { error };
  } finally {
    try {
      if (r14 && !r14.done && (m5 = i6["return"]))
        m5.call(i6);
    } finally {
      if (e12)
        throw e12.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i6 = 0; i6 < arguments.length; i6++)
    ar = ar.concat(__read(arguments[i6]));
  return ar;
}

// node_modules/file-selector/dist/es5/file.js
var COMMON_MIME_TYPES = /* @__PURE__ */ new Map([
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
  ["aac", "audio/aac"],
  ["abw", "application/x-abiword"],
  ["arc", "application/x-freearc"],
  ["avif", "image/avif"],
  ["avi", "video/x-msvideo"],
  ["azw", "application/vnd.amazon.ebook"],
  ["bin", "application/octet-stream"],
  ["bmp", "image/bmp"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["cda", "application/x-cdf"],
  ["csh", "application/x-csh"],
  ["css", "text/css"],
  ["csv", "text/csv"],
  ["doc", "application/msword"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  ["eot", "application/vnd.ms-fontobject"],
  ["epub", "application/epub+zip"],
  ["gz", "application/gzip"],
  ["gif", "image/gif"],
  ["heic", "image/heic"],
  ["heif", "image/heif"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["ico", "image/vnd.microsoft.icon"],
  ["ics", "text/calendar"],
  ["jar", "application/java-archive"],
  ["jpeg", "image/jpeg"],
  ["jpg", "image/jpeg"],
  ["js", "text/javascript"],
  ["json", "application/json"],
  ["jsonld", "application/ld+json"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mjs", "text/javascript"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mpeg", "video/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["opus", "audio/opus"],
  ["otf", "font/otf"],
  ["png", "image/png"],
  ["pdf", "application/pdf"],
  ["php", "application/x-httpd-php"],
  ["ppt", "application/vnd.ms-powerpoint"],
  ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  ["rar", "application/vnd.rar"],
  ["rtf", "application/rtf"],
  ["sh", "application/x-sh"],
  ["svg", "image/svg+xml"],
  ["swf", "application/x-shockwave-flash"],
  ["tar", "application/x-tar"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["ts", "video/mp2t"],
  ["ttf", "font/ttf"],
  ["txt", "text/plain"],
  ["vsd", "application/vnd.visio"],
  ["wav", "audio/wav"],
  ["weba", "audio/webm"],
  ["webm", "video/webm"],
  ["webp", "image/webp"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["xhtml", "application/xhtml+xml"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xml", "application/xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["zip", "application/zip"],
  ["7z", "application/x-7z-compressed"],
  // Others
  ["mkv", "video/x-matroska"],
  ["mov", "video/quicktime"],
  ["msg", "application/vnd.ms-outlook"]
]);
function toFileWithPath(file, path) {
  var f5 = withMimeType(file);
  if (typeof f5.path !== "string") {
    var webkitRelativePath = file.webkitRelativePath;
    Object.defineProperty(f5, "path", {
      value: typeof path === "string" ? path : typeof webkitRelativePath === "string" && webkitRelativePath.length > 0 ? webkitRelativePath : file.name,
      writable: false,
      configurable: false,
      enumerable: true
    });
  }
  return f5;
}
function withMimeType(file) {
  var name = file.name;
  var hasExtension = name && name.lastIndexOf(".") !== -1;
  if (hasExtension && !file.type) {
    var ext = name.split(".").pop().toLowerCase();
    var type = COMMON_MIME_TYPES.get(ext);
    if (type) {
      Object.defineProperty(file, "type", {
        value: type,
        writable: false,
        configurable: false,
        enumerable: true
      });
    }
  }
  return file;
}

// node_modules/file-selector/dist/es5/file-selector.js
var FILES_TO_IGNORE = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function fromEvent(evt) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      if (isObject2(evt) && isDataTransfer(evt)) {
        return [2, getDataTransferFiles(evt.dataTransfer, evt.type)];
      } else if (isChangeEvt(evt)) {
        return [2, getInputFiles(evt)];
      } else if (Array.isArray(evt) && evt.every(function(item) {
        return "getFile" in item && typeof item.getFile === "function";
      })) {
        return [2, getFsHandleFiles(evt)];
      }
      return [2, []];
    });
  });
}
function isDataTransfer(value) {
  return isObject2(value.dataTransfer);
}
function isChangeEvt(value) {
  return isObject2(value) && isObject2(value.target);
}
function isObject2(v5) {
  return typeof v5 === "object" && v5 !== null;
}
function getInputFiles(evt) {
  return fromList(evt.target.files).map(function(file) {
    return toFileWithPath(file);
  });
}
function getFsHandleFiles(handles) {
  return __awaiter(this, void 0, void 0, function() {
    var files;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [4, Promise.all(handles.map(function(h5) {
            return h5.getFile();
          }))];
        case 1:
          files = _a.sent();
          return [2, files.map(function(file) {
            return toFileWithPath(file);
          })];
      }
    });
  });
}
function getDataTransferFiles(dt, type) {
  return __awaiter(this, void 0, void 0, function() {
    var items, files;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (dt === null) {
            return [2, []];
          }
          if (!dt.items)
            return [3, 2];
          items = fromList(dt.items).filter(function(item) {
            return item.kind === "file";
          });
          if (type !== "drop") {
            return [2, items];
          }
          return [4, Promise.all(items.map(toFilePromises))];
        case 1:
          files = _a.sent();
          return [2, noIgnoredFiles(flatten(files))];
        case 2:
          return [2, noIgnoredFiles(fromList(dt.files).map(function(file) {
            return toFileWithPath(file);
          }))];
      }
    });
  });
}
function noIgnoredFiles(files) {
  return files.filter(function(file) {
    return FILES_TO_IGNORE.indexOf(file.name) === -1;
  });
}
function fromList(items) {
  if (items === null) {
    return [];
  }
  var files = [];
  for (var i6 = 0; i6 < items.length; i6++) {
    var file = items[i6];
    files.push(file);
  }
  return files;
}
function toFilePromises(item) {
  if (typeof item.webkitGetAsEntry !== "function") {
    return fromDataTransferItem(item);
  }
  var entry = item.webkitGetAsEntry();
  if (entry && entry.isDirectory) {
    return fromDirEntry(entry);
  }
  return fromDataTransferItem(item);
}
function flatten(items) {
  return items.reduce(function(acc, files) {
    return __spread(acc, Array.isArray(files) ? flatten(files) : [files]);
  }, []);
}
function fromDataTransferItem(item) {
  var file = item.getAsFile();
  if (!file) {
    return Promise.reject(item + " is not a File");
  }
  var fwp = toFileWithPath(file);
  return Promise.resolve(fwp);
}
function fromEntry(entry) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      return [2, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
    });
  });
}
function fromDirEntry(entry) {
  var reader = entry.createReader();
  return new Promise(function(resolve, reject) {
    var entries = [];
    function readEntries() {
      var _this = this;
      reader.readEntries(function(batch) {
        return __awaiter(_this, void 0, void 0, function() {
          var files, err_1, items;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (!!batch.length)
                  return [3, 5];
                _a.label = 1;
              case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, Promise.all(entries)];
              case 2:
                files = _a.sent();
                resolve(files);
                return [3, 4];
              case 3:
                err_1 = _a.sent();
                reject(err_1);
                return [3, 4];
              case 4:
                return [3, 6];
              case 5:
                items = Promise.all(batch.map(fromEntry));
                entries.push(items);
                readEntries();
                _a.label = 6;
              case 6:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, function(err) {
        reject(err);
      });
    }
    readEntries();
  });
}
function fromFileEntry(entry) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      return [2, new Promise(function(resolve, reject) {
        entry.file(function(file) {
          var fwp = toFileWithPath(file, entry.fullPath);
          resolve(fwp);
        }, function(err) {
          reject(err);
        });
      })];
    });
  });
}

// node_modules/react-dropzone/dist/es/utils/index.js
var import_attr_accept = __toESM(require_es());
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i6 = 1; i6 < arguments.length; i6++) {
    var source = null != arguments[i6] ? arguments[i6] : {};
    i6 % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i6) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i6) || _unsupportedIterableToArray(arr, i6) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o9, minLen) {
  if (!o9)
    return;
  if (typeof o9 === "string")
    return _arrayLikeToArray(o9, minLen);
  var n6 = Object.prototype.toString.call(o9).slice(8, -1);
  if (n6 === "Object" && o9.constructor)
    n6 = o9.constructor.name;
  if (n6 === "Map" || n6 === "Set")
    return Array.from(o9);
  if (n6 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n6))
    return _arrayLikeToArray(o9, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i6 = 0, arr2 = new Array(len); i6 < len; i6++) {
    arr2[i6] = arr[i6];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i6) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i6 && _arr.length === i6)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
var FILE_INVALID_TYPE = "file-invalid-type";
var FILE_TOO_LARGE = "file-too-large";
var FILE_TOO_SMALL = "file-too-small";
var TOO_MANY_FILES = "too-many-files";
var getInvalidTypeRejectionErr = function getInvalidTypeRejectionErr2(accept) {
  accept = Array.isArray(accept) && accept.length === 1 ? accept[0] : accept;
  var messageSuffix = Array.isArray(accept) ? "one of ".concat(accept.join(", ")) : accept;
  return {
    code: FILE_INVALID_TYPE,
    message: "File type must be ".concat(messageSuffix)
  };
};
var getTooLargeRejectionErr = function getTooLargeRejectionErr2(maxSize) {
  return {
    code: FILE_TOO_LARGE,
    message: "File is larger than ".concat(maxSize, " ").concat(maxSize === 1 ? "byte" : "bytes")
  };
};
var getTooSmallRejectionErr = function getTooSmallRejectionErr2(minSize) {
  return {
    code: FILE_TOO_SMALL,
    message: "File is smaller than ".concat(minSize, " ").concat(minSize === 1 ? "byte" : "bytes")
  };
};
var TOO_MANY_FILES_REJECTION = {
  code: TOO_MANY_FILES,
  message: "Too many files"
};
function fileAccepted(file, accept) {
  var isAcceptable = file.type === "application/x-moz-file" || (0, import_attr_accept.default)(file, accept);
  return [isAcceptable, isAcceptable ? null : getInvalidTypeRejectionErr(accept)];
}
function fileMatchSize(file, minSize, maxSize) {
  if (isDefined(file.size)) {
    if (isDefined(minSize) && isDefined(maxSize)) {
      if (file.size > maxSize)
        return [false, getTooLargeRejectionErr(maxSize)];
      if (file.size < minSize)
        return [false, getTooSmallRejectionErr(minSize)];
    } else if (isDefined(minSize) && file.size < minSize)
      return [false, getTooSmallRejectionErr(minSize)];
    else if (isDefined(maxSize) && file.size > maxSize)
      return [false, getTooLargeRejectionErr(maxSize)];
  }
  return [true, null];
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function allFilesAccepted(_ref) {
  var files = _ref.files, accept = _ref.accept, minSize = _ref.minSize, maxSize = _ref.maxSize, multiple = _ref.multiple, maxFiles = _ref.maxFiles;
  if (!multiple && files.length > 1 || multiple && maxFiles >= 1 && files.length > maxFiles) {
    return false;
  }
  return files.every(function(file) {
    var _fileAccepted = fileAccepted(file, accept), _fileAccepted2 = _slicedToArray(_fileAccepted, 1), accepted = _fileAccepted2[0];
    var _fileMatchSize = fileMatchSize(file, minSize, maxSize), _fileMatchSize2 = _slicedToArray(_fileMatchSize, 1), sizeMatch = _fileMatchSize2[0];
    return accepted && sizeMatch;
  });
}
function isPropagationStopped(event) {
  if (typeof event.isPropagationStopped === "function") {
    return event.isPropagationStopped();
  } else if (typeof event.cancelBubble !== "undefined") {
    return event.cancelBubble;
  }
  return false;
}
function isEvtWithFiles(event) {
  if (!event.dataTransfer) {
    return !!event.target && !!event.target.files;
  }
  return Array.prototype.some.call(event.dataTransfer.types, function(type) {
    return type === "Files" || type === "application/x-moz-file";
  });
}
function onDocumentDragOver(event) {
  event.preventDefault();
}
function isIe(userAgent) {
  return userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident/") !== -1;
}
function isEdge(userAgent) {
  return userAgent.indexOf("Edge/") !== -1;
}
function isIeOrEdge() {
  var userAgent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return isIe(userAgent) || isEdge(userAgent);
}
function composeEventHandlers2() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function(event) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    return fns.some(function(fn) {
      if (!isPropagationStopped(event) && fn) {
        fn.apply(void 0, [event].concat(args));
      }
      return isPropagationStopped(event);
    });
  };
}
function canUseFileSystemAccessAPI() {
  return "showOpenFilePicker" in window;
}
function filePickerOptionsTypes(accept) {
  accept = typeof accept === "string" ? accept.split(",") : accept;
  return [{
    description: "everything",
    // TODO: Need to handle filtering more elegantly than this!
    accept: Array.isArray(accept) ? (
      // Accept just MIME types as per spec
      // NOTE: accept can be https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers
      accept.filter(function(item) {
        return item === "audio/*" || item === "video/*" || item === "image/*" || item === "text/*" || /\w+\/[-+.\w]+/g.test(item);
      }).reduce(function(a5, b5) {
        return _objectSpread(_objectSpread({}, a5), {}, _defineProperty2({}, b5, []));
      }, {})
    ) : {}
  }];
}
function isAbort(v5) {
  return v5 instanceof DOMException && (v5.name === "AbortError" || v5.code === v5.ABORT_ERR);
}
function isSecurityError(v5) {
  return v5 instanceof DOMException && (v5.name === "SecurityError" || v5.code === v5.SECURITY_ERR);
}

// node_modules/react-dropzone/dist/es/index.js
var _excluded4 = ["children"];
var _excluded22 = ["open"];
var _excluded32 = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"];
var _excluded42 = ["refKey", "onChange", "onClick"];
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray2(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray2(arr);
}
function _slicedToArray2(arr, i6) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i6) || _unsupportedIterableToArray2(arr, i6) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(o9, minLen) {
  if (!o9)
    return;
  if (typeof o9 === "string")
    return _arrayLikeToArray2(o9, minLen);
  var n6 = Object.prototype.toString.call(o9).slice(8, -1);
  if (n6 === "Object" && o9.constructor)
    n6 = o9.constructor.name;
  if (n6 === "Map" || n6 === "Set")
    return Array.from(o9);
  if (n6 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n6))
    return _arrayLikeToArray2(o9, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i6 = 0, arr2 = new Array(len); i6 < len; i6++) {
    arr2[i6] = arr[i6];
  }
  return arr2;
}
function _iterableToArrayLimit2(arr, i6) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i6 && _arr.length === i6)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr))
    return arr;
}
function ownKeys3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread3(target) {
  for (var i6 = 1; i6 < arguments.length; i6++) {
    var source = null != arguments[i6] ? arguments[i6] : {};
    i6 % 2 ? ownKeys3(Object(source), true).forEach(function(key) {
      _defineProperty3(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys3(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutProperties2(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose2(source, excluded);
  var key, i6;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i6 = 0; i6 < sourceSymbolKeys.length; i6++) {
      key = sourceSymbolKeys[i6];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i6;
  for (i6 = 0; i6 < sourceKeys.length; i6++) {
    key = sourceKeys[i6];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Dropzone = (0, import_react6.forwardRef)(function(_ref, ref) {
  var children = _ref.children, params = _objectWithoutProperties2(_ref, _excluded4);
  var _useDropzone = useDropzone(params), open = _useDropzone.open, props3 = _objectWithoutProperties2(_useDropzone, _excluded22);
  (0, import_react6.useImperativeHandle)(ref, function() {
    return {
      open
    };
  }, [open]);
  return import_react6.default.createElement(import_react6.Fragment, null, children(_objectSpread3(_objectSpread3({}, props3), {}, {
    open
  })));
});
Dropzone.displayName = "Dropzone";
var defaultProps = {
  disabled: false,
  getFilesFromEvent: fromEvent,
  maxSize: Infinity,
  minSize: 0,
  multiple: true,
  maxFiles: 0,
  preventDropOnDocument: true,
  noClick: false,
  noKeyboard: false,
  noDrag: false,
  noDragEventsBubbling: false,
  validator: null,
  useFsAccessApi: true
};
Dropzone.defaultProps = defaultProps;
Dropzone.propTypes = {
  /**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {File[]} params.draggedFiles Files in active drag
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
   */
  children: import_prop_types.default.func,
  /**
   * Set accepted file types.
   * See https://github.com/okonet/attr-accept for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all.
   * See: https://github.com/react-dropzone/react-dropzone/issues/276
   */
  accept: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.arrayOf(import_prop_types.default.string)]),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: import_prop_types.default.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: import_prop_types.default.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: import_prop_types.default.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: import_prop_types.default.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: import_prop_types.default.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: import_prop_types.default.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: import_prop_types.default.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: import_prop_types.default.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: import_prop_types.default.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: import_prop_types.default.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: import_prop_types.default.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: import_prop_types.default.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: import_prop_types.default.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: import_prop_types.default.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: import_prop_types.default.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: import_prop_types.default.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: import_prop_types.default.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  onDrop: import_prop_types.default.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: import_prop_types.default.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: import_prop_types.default.func,
  /**
   * Custom validation function
   * @param {File} file
   * @returns {FileError|FileError[]}
   */
  validator: import_prop_types.default.func
};
var initialState = {
  isFocused: false,
  isFileDialogActive: false,
  isDragActive: false,
  isDragAccept: false,
  isDragReject: false,
  draggedFiles: [],
  acceptedFiles: [],
  fileRejections: []
};
function useDropzone() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _defaultProps$options = _objectSpread3(_objectSpread3({}, defaultProps), options), accept = _defaultProps$options.accept, disabled = _defaultProps$options.disabled, getFilesFromEvent = _defaultProps$options.getFilesFromEvent, maxSize = _defaultProps$options.maxSize, minSize = _defaultProps$options.minSize, multiple = _defaultProps$options.multiple, maxFiles = _defaultProps$options.maxFiles, onDragEnter = _defaultProps$options.onDragEnter, onDragLeave = _defaultProps$options.onDragLeave, onDragOver = _defaultProps$options.onDragOver, onDrop = _defaultProps$options.onDrop, onDropAccepted = _defaultProps$options.onDropAccepted, onDropRejected = _defaultProps$options.onDropRejected, onFileDialogCancel = _defaultProps$options.onFileDialogCancel, onFileDialogOpen = _defaultProps$options.onFileDialogOpen, useFsAccessApi = _defaultProps$options.useFsAccessApi, preventDropOnDocument = _defaultProps$options.preventDropOnDocument, noClick = _defaultProps$options.noClick, noKeyboard = _defaultProps$options.noKeyboard, noDrag = _defaultProps$options.noDrag, noDragEventsBubbling = _defaultProps$options.noDragEventsBubbling, validator = _defaultProps$options.validator;
  var onFileDialogOpenCb = (0, import_react6.useMemo)(function() {
    return typeof onFileDialogOpen === "function" ? onFileDialogOpen : noop;
  }, [onFileDialogOpen]);
  var onFileDialogCancelCb = (0, import_react6.useMemo)(function() {
    return typeof onFileDialogCancel === "function" ? onFileDialogCancel : noop;
  }, [onFileDialogCancel]);
  var rootRef = (0, import_react6.useRef)(null);
  var inputRef = (0, import_react6.useRef)(null);
  var _useReducer = (0, import_react6.useReducer)(reducer, initialState), _useReducer2 = _slicedToArray2(_useReducer, 2), state = _useReducer2[0], dispatch = _useReducer2[1];
  var isFocused = state.isFocused, isFileDialogActive = state.isFileDialogActive, draggedFiles = state.draggedFiles;
  var fsAccessApiWorksRef = (0, import_react6.useRef)(typeof window !== "undefined" && window.isSecureContext && useFsAccessApi && canUseFileSystemAccessAPI());
  var onWindowFocus = function onWindowFocus2() {
    if (!fsAccessApiWorksRef.current && isFileDialogActive) {
      setTimeout(function() {
        if (inputRef.current) {
          var files = inputRef.current.files;
          if (!files.length) {
            dispatch({
              type: "closeDialog"
            });
            onFileDialogCancelCb();
          }
        }
      }, 300);
    }
  };
  (0, import_react6.useEffect)(function() {
    window.addEventListener("focus", onWindowFocus, false);
    return function() {
      window.removeEventListener("focus", onWindowFocus, false);
    };
  }, [inputRef, isFileDialogActive, onFileDialogCancelCb, fsAccessApiWorksRef]);
  var dragTargetsRef = (0, import_react6.useRef)([]);
  var onDocumentDrop = function onDocumentDrop2(event) {
    if (rootRef.current && rootRef.current.contains(event.target)) {
      return;
    }
    event.preventDefault();
    dragTargetsRef.current = [];
  };
  (0, import_react6.useEffect)(function() {
    if (preventDropOnDocument) {
      document.addEventListener("dragover", onDocumentDragOver, false);
      document.addEventListener("drop", onDocumentDrop, false);
    }
    return function() {
      if (preventDropOnDocument) {
        document.removeEventListener("dragover", onDocumentDragOver);
        document.removeEventListener("drop", onDocumentDrop);
      }
    };
  }, [rootRef, preventDropOnDocument]);
  var onDragEnterCb = (0, import_react6.useCallback)(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [].concat(_toConsumableArray(dragTargetsRef.current), [event.target]);
    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function(draggedFiles2) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }
        dispatch({
          draggedFiles: draggedFiles2,
          isDragActive: true,
          type: "setDraggedFiles"
        });
        if (onDragEnter) {
          onDragEnter(event);
        }
      });
    }
  }, [getFilesFromEvent, onDragEnter, noDragEventsBubbling]);
  var onDragOverCb = (0, import_react6.useCallback)(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    var hasFiles = isEvtWithFiles(event);
    if (hasFiles && event.dataTransfer) {
      try {
        event.dataTransfer.dropEffect = "copy";
      } catch (_unused) {
      }
    }
    if (hasFiles && onDragOver) {
      onDragOver(event);
    }
    return false;
  }, [onDragOver, noDragEventsBubbling]);
  var onDragLeaveCb = (0, import_react6.useCallback)(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    var targets = dragTargetsRef.current.filter(function(target) {
      return rootRef.current && rootRef.current.contains(target);
    });
    var targetIdx = targets.indexOf(event.target);
    if (targetIdx !== -1) {
      targets.splice(targetIdx, 1);
    }
    dragTargetsRef.current = targets;
    if (targets.length > 0) {
      return;
    }
    dispatch({
      isDragActive: false,
      type: "setDraggedFiles",
      draggedFiles: []
    });
    if (isEvtWithFiles(event) && onDragLeave) {
      onDragLeave(event);
    }
  }, [rootRef, onDragLeave, noDragEventsBubbling]);
  var setFiles = (0, import_react6.useCallback)(function(files, event) {
    var acceptedFiles = [];
    var fileRejections = [];
    files.forEach(function(file) {
      var _fileAccepted = fileAccepted(file, accept), _fileAccepted2 = _slicedToArray2(_fileAccepted, 2), accepted = _fileAccepted2[0], acceptError = _fileAccepted2[1];
      var _fileMatchSize = fileMatchSize(file, minSize, maxSize), _fileMatchSize2 = _slicedToArray2(_fileMatchSize, 2), sizeMatch = _fileMatchSize2[0], sizeError = _fileMatchSize2[1];
      var customErrors = validator ? validator(file) : null;
      if (accepted && sizeMatch && !customErrors) {
        acceptedFiles.push(file);
      } else {
        var errors = [acceptError, sizeError];
        if (customErrors) {
          errors = errors.concat(customErrors);
        }
        fileRejections.push({
          file,
          errors: errors.filter(function(e12) {
            return e12;
          })
        });
      }
    });
    if (!multiple && acceptedFiles.length > 1 || multiple && maxFiles >= 1 && acceptedFiles.length > maxFiles) {
      acceptedFiles.forEach(function(file) {
        fileRejections.push({
          file,
          errors: [TOO_MANY_FILES_REJECTION]
        });
      });
      acceptedFiles.splice(0);
    }
    dispatch({
      acceptedFiles,
      fileRejections,
      type: "setFiles"
    });
    if (onDrop) {
      onDrop(acceptedFiles, fileRejections, event);
    }
    if (fileRejections.length > 0 && onDropRejected) {
      onDropRejected(fileRejections, event);
    }
    if (acceptedFiles.length > 0 && onDropAccepted) {
      onDropAccepted(acceptedFiles, event);
    }
  }, [dispatch, multiple, accept, minSize, maxSize, maxFiles, onDrop, onDropAccepted, onDropRejected, validator]);
  var onDropCb = (0, import_react6.useCallback)(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [];
    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function(files) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }
        setFiles(files, event);
      });
    }
    dispatch({
      type: "reset"
    });
  }, [getFilesFromEvent, setFiles, noDragEventsBubbling]);
  var openFileDialog = (0, import_react6.useCallback)(function() {
    if (fsAccessApiWorksRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb();
      var opts = {
        multiple,
        types: filePickerOptionsTypes(accept)
      };
      window.showOpenFilePicker(opts).then(function(handles) {
        return getFilesFromEvent(handles);
      }).then(function(files) {
        setFiles(files, null);
        dispatch({
          type: "closeDialog"
        });
      }).catch(function(e12) {
        if (isAbort(e12)) {
          onFileDialogCancelCb(e12);
          dispatch({
            type: "closeDialog"
          });
        } else if (isSecurityError(e12)) {
          fsAccessApiWorksRef.current = false;
          if (inputRef.current) {
            inputRef.current.value = null;
            inputRef.current.click();
          }
        }
      });
      return;
    }
    if (inputRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb();
      inputRef.current.value = null;
      inputRef.current.click();
    }
  }, [dispatch, onFileDialogOpenCb, onFileDialogCancelCb, useFsAccessApi, setFiles, accept, multiple]);
  var onKeyDownCb = (0, import_react6.useCallback)(function(event) {
    if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
      return;
    }
    if (event.key === " " || event.key === "Enter" || event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      openFileDialog();
    }
  }, [rootRef, openFileDialog]);
  var onFocusCb = (0, import_react6.useCallback)(function() {
    dispatch({
      type: "focus"
    });
  }, []);
  var onBlurCb = (0, import_react6.useCallback)(function() {
    dispatch({
      type: "blur"
    });
  }, []);
  var onClickCb = (0, import_react6.useCallback)(function() {
    if (noClick) {
      return;
    }
    if (isIeOrEdge()) {
      setTimeout(openFileDialog, 0);
    } else {
      openFileDialog();
    }
  }, [noClick, openFileDialog]);
  var composeHandler = function composeHandler2(fn) {
    return disabled ? null : fn;
  };
  var composeKeyboardHandler = function composeKeyboardHandler2(fn) {
    return noKeyboard ? null : composeHandler(fn);
  };
  var composeDragHandler = function composeDragHandler2(fn) {
    return noDrag ? null : composeHandler(fn);
  };
  var stopPropagation = function stopPropagation2(event) {
    if (noDragEventsBubbling) {
      event.stopPropagation();
    }
  };
  var getRootProps = (0, import_react6.useMemo)(function() {
    return function() {
      var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref2$refKey = _ref2.refKey, refKey = _ref2$refKey === void 0 ? "ref" : _ref2$refKey, role = _ref2.role, onKeyDown = _ref2.onKeyDown, onFocus = _ref2.onFocus, onBlur = _ref2.onBlur, onClick = _ref2.onClick, onDragEnter2 = _ref2.onDragEnter, onDragOver2 = _ref2.onDragOver, onDragLeave2 = _ref2.onDragLeave, onDrop2 = _ref2.onDrop, rest2 = _objectWithoutProperties2(_ref2, _excluded32);
      return _objectSpread3(_objectSpread3(_defineProperty3({
        onKeyDown: composeKeyboardHandler(composeEventHandlers2(onKeyDown, onKeyDownCb)),
        onFocus: composeKeyboardHandler(composeEventHandlers2(onFocus, onFocusCb)),
        onBlur: composeKeyboardHandler(composeEventHandlers2(onBlur, onBlurCb)),
        onClick: composeHandler(composeEventHandlers2(onClick, onClickCb)),
        onDragEnter: composeDragHandler(composeEventHandlers2(onDragEnter2, onDragEnterCb)),
        onDragOver: composeDragHandler(composeEventHandlers2(onDragOver2, onDragOverCb)),
        onDragLeave: composeDragHandler(composeEventHandlers2(onDragLeave2, onDragLeaveCb)),
        onDrop: composeDragHandler(composeEventHandlers2(onDrop2, onDropCb)),
        role: typeof role === "string" && role !== "" ? role : "button"
      }, refKey, rootRef), !disabled && !noKeyboard ? {
        tabIndex: 0
      } : {}), rest2);
    };
  }, [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onClickCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, noKeyboard, noDrag, disabled]);
  var onInputElementClick = (0, import_react6.useCallback)(function(event) {
    event.stopPropagation();
  }, []);
  var getInputProps = (0, import_react6.useMemo)(function() {
    return function() {
      var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref3$refKey = _ref3.refKey, refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey, onChange = _ref3.onChange, onClick = _ref3.onClick, rest2 = _objectWithoutProperties2(_ref3, _excluded42);
      var inputProps = _defineProperty3({
        accept,
        multiple,
        type: "file",
        style: {
          display: "none"
        },
        onChange: composeHandler(composeEventHandlers2(onChange, onDropCb)),
        onClick: composeHandler(composeEventHandlers2(onClick, onInputElementClick)),
        tabIndex: -1
      }, refKey, inputRef);
      return _objectSpread3(_objectSpread3({}, inputProps), rest2);
    };
  }, [inputRef, accept, multiple, onDropCb, disabled]);
  var fileCount = draggedFiles.length;
  var isDragAccept = fileCount > 0 && allFilesAccepted({
    files: draggedFiles,
    accept,
    minSize,
    maxSize,
    multiple,
    maxFiles
  });
  var isDragReject = fileCount > 0 && !isDragAccept;
  return _objectSpread3(_objectSpread3({}, state), {}, {
    isDragAccept,
    isDragReject,
    isFocused: isFocused && !disabled,
    getRootProps,
    getInputProps,
    rootRef,
    inputRef,
    open: composeHandler(openFileDialog)
  });
}
function reducer(state, action) {
  switch (action.type) {
    case "focus":
      return _objectSpread3(_objectSpread3({}, state), {}, {
        isFocused: true
      });
    case "blur":
      return _objectSpread3(_objectSpread3({}, state), {}, {
        isFocused: false
      });
    case "openDialog":
      return _objectSpread3(_objectSpread3({}, initialState), {}, {
        isFileDialogActive: true
      });
    case "closeDialog":
      return _objectSpread3(_objectSpread3({}, state), {}, {
        isFileDialogActive: false
      });
    case "setDraggedFiles":
      var isDragActive = action.isDragActive, draggedFiles = action.draggedFiles;
      return _objectSpread3(_objectSpread3({}, state), {}, {
        draggedFiles,
        isDragActive
      });
    case "setFiles":
      return _objectSpread3(_objectSpread3({}, state), {}, {
        acceptedFiles: action.acceptedFiles,
        fileRejections: action.fileRejections
      });
    case "reset":
      return _objectSpread3({}, initialState);
    default:
      return state;
  }
}
function noop() {
}

// node_modules/leva/dist/leva.esm.js
var import_merge_value = __toESM(require_merge_value());
var join = (...args) => args.filter(Boolean).join(".");
function getKeyPath(path) {
  const dir = path.split(".");
  return [dir.pop(), dir.join(".") || void 0];
}
function getValuesForPaths(data, paths) {
  return Object.entries(pick(data, paths)).reduce(
    (acc, [, {
      value,
      disabled,
      key
    }]) => {
      acc[key] = disabled ? void 0 : value;
      return acc;
    },
    {}
  );
}
function useCompareMemoize(value, deep) {
  const ref = (0, import_react7.useRef)();
  const compare = deep ? dequal : shallow;
  if (!compare(value, ref.current)) {
    ref.current = value;
  }
  return ref.current;
}
function useDeepMemo(fn, deps) {
  return (0, import_react7.useMemo)(fn, useCompareMemoize(deps, true));
}
function useToggle(toggled) {
  const wrapperRef = (0, import_react7.useRef)(null);
  const contentRef = (0, import_react7.useRef)(null);
  const firstRender = (0, import_react7.useRef)(true);
  (0, import_react7.useLayoutEffect)(() => {
    if (!toggled) {
      wrapperRef.current.style.height = "0px";
      wrapperRef.current.style.overflow = "hidden";
    }
  }, []);
  (0, import_react7.useEffect)(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    let timeout;
    const ref = wrapperRef.current;
    const fixHeight = () => {
      if (toggled) {
        ref.style.removeProperty("height");
        ref.style.removeProperty("overflow");
        contentRef.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });
      }
    };
    ref.addEventListener("transitionend", fixHeight, {
      once: true
    });
    const {
      height
    } = contentRef.current.getBoundingClientRect();
    ref.style.height = height + "px";
    if (!toggled) {
      ref.style.overflow = "hidden";
      timeout = window.setTimeout(() => ref.style.height = "0px", 50);
    }
    return () => {
      ref.removeEventListener("transitionend", fixHeight);
      clearTimeout(timeout);
    };
  }, [toggled]);
  return {
    wrapperRef,
    contentRef
  };
}
var useVisiblePaths = (store) => {
  const [paths, setPaths] = (0, import_react7.useState)(store.getVisiblePaths());
  (0, import_react7.useEffect)(() => {
    setPaths(store.getVisiblePaths());
    const unsub = store.useStore.subscribe(store.getVisiblePaths, setPaths, {
      equalityFn: shallow
    });
    return () => unsub();
  }, [store]);
  return paths;
};
function useValuesForPath(store, paths, initialData) {
  const valuesForPath = store.useStore((s6) => {
    const data = _objectSpread2(_objectSpread2({}, initialData), s6.data);
    return getValuesForPaths(data, paths);
  }, shallow);
  return valuesForPath;
}
function usePopin(margin = 3) {
  const popinRef = (0, import_react7.useRef)(null);
  const wrapperRef = (0, import_react7.useRef)(null);
  const [shown, setShow] = (0, import_react7.useState)(false);
  const show = (0, import_react7.useCallback)(() => setShow(true), []);
  const hide = (0, import_react7.useCallback)(() => setShow(false), []);
  (0, import_react7.useLayoutEffect)(() => {
    if (shown) {
      const {
        bottom,
        top,
        left
      } = popinRef.current.getBoundingClientRect();
      const {
        height
      } = wrapperRef.current.getBoundingClientRect();
      const direction = bottom + height > window.innerHeight - 40 ? "up" : "down";
      wrapperRef.current.style.position = "fixed";
      wrapperRef.current.style.zIndex = "10000";
      wrapperRef.current.style.left = left + "px";
      if (direction === "down")
        wrapperRef.current.style.top = bottom + margin + "px";
      else
        wrapperRef.current.style.bottom = window.innerHeight - top + margin + "px";
    }
  }, [margin, shown]);
  return {
    popinRef,
    wrapperRef,
    shown,
    show,
    hide
  };
}
k3([names_default]);
var convertMap = {
  rgb: "toRgb",
  hsl: "toHsl",
  hsv: "toHsv",
  hex: "toHex"
};
v8n_esm_default.extend({
  color: () => (value) => w3(value).isValid()
});
var schema$22 = (o9) => v8n_esm_default().color().test(o9);
function convert2(color2, {
  format: format3,
  hasAlpha,
  isString
}) {
  const convertFn = convertMap[format3] + (isString && format3 !== "hex" ? "String" : "");
  const result = color2[convertFn]();
  return typeof result === "object" && !hasAlpha ? omit(result, ["a"]) : result;
}
var sanitize$22 = (v5, settings) => {
  const color2 = w3(v5);
  if (!color2.isValid())
    throw Error("Invalid color");
  return convert2(color2, settings);
};
var format$12 = (v5, settings) => {
  return convert2(w3(v5), _objectSpread2(_objectSpread2({}, settings), {}, {
    isString: true,
    format: "hex"
  }));
};
var normalize$32 = ({
  value
}) => {
  const _f = I2(value);
  const format3 = _f === "name" ? "hex" : _f;
  const hasAlpha = typeof value === "object" ? "a" in value : _f === "hex" && value.length === 8 || /^(rgba)|(hsla)|(hsva)/.test(value);
  const settings = {
    format: format3,
    hasAlpha,
    isString: typeof value === "string"
  };
  return {
    value: sanitize$22(value, settings),
    settings
  };
};
var props$22 = Object.freeze({
  __proto__: null,
  schema: schema$22,
  sanitize: sanitize$22,
  format: format$12,
  normalize: normalize$32
});
var ColorPreview = styled("div", {
  position: "relative",
  boxSizing: "border-box",
  borderRadius: "$sm",
  overflow: "hidden",
  cursor: "pointer",
  height: "$rowHeight",
  width: "$rowHeight",
  backgroundColor: "#fff",
  backgroundImage: `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,
  $inputStyle: "",
  $hover: "",
  zIndex: 1,
  variants: {
    active: {
      true: {
        $inputStyle: "$accent1"
      }
    }
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "currentColor",
    zIndex: 1
  }
});
var PickerContainer = styled("div", {
  position: "relative",
  display: "grid",
  gridTemplateColumns: "$sizes$rowHeight auto",
  columnGap: "$colGap",
  alignItems: "center"
});
var PickerWrapper = styled("div", {
  width: "$colorPickerWidth",
  height: "$colorPickerHeight",
  ".react-colorful": {
    width: "100%",
    height: "100%",
    boxShadow: "$level2",
    cursor: "crosshair"
  },
  ".react-colorful__saturation": {
    borderRadius: "$sm $sm 0 0"
  },
  ".react-colorful__alpha, .react-colorful__hue": {
    height: 10
  },
  ".react-colorful__last-control": {
    borderRadius: "0 0 $sm $sm"
  },
  ".react-colorful__pointer": {
    height: 12,
    width: 12
  }
});
function convertToRgb(value, format3) {
  return format3 !== "rgb" ? w3(value).toRgb() : value;
}
function Color2({
  value,
  displayValue,
  settings,
  onUpdate
}) {
  const {
    emitOnEditStart,
    emitOnEditEnd
  } = useInputContext();
  const {
    format: format3,
    hasAlpha
  } = settings;
  const {
    popinRef,
    wrapperRef,
    shown,
    show,
    hide
  } = usePopin();
  const timer = (0, import_react7.useRef)(0);
  const [initialRgb, setInitialRgb] = (0, import_react7.useState)(() => convertToRgb(value, format3));
  const ColorPicker = hasAlpha ? Ce : Ne;
  const showPicker = () => {
    setInitialRgb(convertToRgb(value, format3));
    show();
    emitOnEditStart();
  };
  const hidePicker = () => {
    hide();
    emitOnEditEnd();
    window.clearTimeout(timer.current);
  };
  const hideAfterDelay = () => {
    timer.current = window.setTimeout(hidePicker, 500);
  };
  (0, import_react7.useEffect)(() => {
    return () => window.clearTimeout(timer.current);
  }, []);
  return import_react7.default.createElement(import_react7.default.Fragment, null, import_react7.default.createElement(ColorPreview, {
    ref: popinRef,
    active: shown,
    onClick: () => showPicker(),
    style: {
      color: displayValue
    }
  }), shown && import_react7.default.createElement(Portal3, null, import_react7.default.createElement(Overlay, {
    onPointerUp: hidePicker
  }), import_react7.default.createElement(PickerWrapper, {
    ref: wrapperRef,
    onMouseEnter: () => window.clearTimeout(timer.current),
    onMouseLeave: (e12) => e12.buttons === 0 && hideAfterDelay()
  }, import_react7.default.createElement(ColorPicker, {
    color: initialRgb,
    onChange: onUpdate
  }))));
}
function ColorComponent() {
  const {
    value,
    displayValue,
    label,
    onChange,
    onUpdate,
    settings
  } = useInputContext();
  return import_react7.default.createElement(Row, {
    input: true
  }, import_react7.default.createElement(Label, null, label), import_react7.default.createElement(PickerContainer, null, import_react7.default.createElement(Color2, {
    value,
    displayValue,
    onChange,
    onUpdate,
    settings
  }), import_react7.default.createElement(ValueInput, {
    value: displayValue,
    onChange,
    onUpdate
  })));
}
var color = createInternalPlugin(_objectSpread2({
  component: ColorComponent
}, props$22));
function Vector3dComponent() {
  const {
    label,
    displayValue,
    onUpdate,
    settings
  } = useInputContext();
  return import_react7.default.createElement(Row, {
    input: true
  }, import_react7.default.createElement(Label, null, label), import_react7.default.createElement(Vector, {
    value: displayValue,
    settings,
    onUpdate
  }));
}
var vector3d = createInternalPlugin(_objectSpread2({
  component: Vector3dComponent
}, getVectorPlugin(["x", "y", "z"])));
var JoystickTrigger = styled("div", {
  $flexCenter: "",
  position: "relative",
  backgroundColor: "$elevation3",
  borderRadius: "$sm",
  cursor: "pointer",
  height: "$rowHeight",
  width: "$rowHeight",
  touchAction: "none",
  $draggable: "",
  $hover: "",
  "&:active": {
    cursor: "none"
  },
  "&::after": {
    content: '""',
    backgroundColor: "$accent2",
    height: 4,
    width: 4,
    borderRadius: 2
  }
});
var JoystickPlayground = styled("div", {
  $flexCenter: "",
  width: "$joystickWidth",
  height: "$joystickHeight",
  borderRadius: "$sm",
  boxShadow: "$level2",
  position: "fixed",
  zIndex: 1e4,
  overflow: "hidden",
  $draggable: "",
  transform: "translate(-50%, -50%)",
  variants: {
    isOutOfBounds: {
      true: {
        backgroundColor: "$elevation1"
      },
      false: {
        backgroundColor: "$elevation3"
      }
    }
  },
  "> div": {
    position: "absolute",
    $flexCenter: "",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "$highlight1",
    backgroundColor: "$elevation3",
    width: "80%",
    height: "80%",
    "&::after,&::before": {
      content: '""',
      position: "absolute",
      zindex: 10,
      backgroundColor: "$highlight1"
    },
    "&::before": {
      width: "100%",
      height: 1
    },
    "&::after": {
      height: "100%",
      width: 1
    }
  },
  "> span": {
    position: "relative",
    zindex: 100,
    width: 10,
    height: 10,
    backgroundColor: "$accent2",
    borderRadius: "50%"
  }
});
function Joystick({
  value,
  settings,
  onUpdate
}) {
  const timeout = (0, import_react7.useRef)();
  const outOfBoundsX = (0, import_react7.useRef)(0);
  const outOfBoundsY = (0, import_react7.useRef)(0);
  const stepMultiplier = (0, import_react7.useRef)(1);
  const [joystickShown, setShowJoystick] = (0, import_react7.useState)(false);
  const [isOutOfBounds, setIsOutOfBounds] = (0, import_react7.useState)(false);
  const [spanRef, set] = useTransform();
  const joystickeRef = (0, import_react7.useRef)(null);
  const playgroundRef = (0, import_react7.useRef)(null);
  (0, import_react7.useLayoutEffect)(() => {
    if (joystickShown) {
      const {
        top,
        left,
        width,
        height
      } = joystickeRef.current.getBoundingClientRect();
      playgroundRef.current.style.left = left + width / 2 + "px";
      playgroundRef.current.style.top = top + height / 2 + "px";
    }
  }, [joystickShown]);
  const {
    keys: [v1, v22],
    joystick
  } = settings;
  const yFactor = joystick === "invertY" ? 1 : -1;
  const {
    [v1]: {
      step: stepV1
    },
    [v22]: {
      step: stepV2
    }
  } = settings;
  const wpx = useTh("sizes", "joystickWidth");
  const hpx = useTh("sizes", "joystickHeight");
  const w4 = parseFloat(wpx) * 0.8 / 2;
  const h5 = parseFloat(hpx) * 0.8 / 2;
  const startOutOfBounds = (0, import_react7.useCallback)(() => {
    if (timeout.current)
      return;
    setIsOutOfBounds(true);
    if (outOfBoundsX.current)
      set({
        x: outOfBoundsX.current * w4
      });
    if (outOfBoundsY.current)
      set({
        y: outOfBoundsY.current * -h5
      });
    timeout.current = window.setInterval(() => {
      onUpdate((v5) => {
        const incX = stepV1 * outOfBoundsX.current * stepMultiplier.current;
        const incY = yFactor * stepV2 * outOfBoundsY.current * stepMultiplier.current;
        return Array.isArray(v5) ? {
          [v1]: v5[0] + incX,
          [v22]: v5[1] + incY
        } : {
          [v1]: v5[v1] + incX,
          [v22]: v5[v22] + incY
        };
      });
    }, 16);
  }, [w4, h5, onUpdate, set, stepV1, stepV2, v1, v22, yFactor]);
  const endOutOfBounds = (0, import_react7.useCallback)(() => {
    window.clearTimeout(timeout.current);
    timeout.current = void 0;
    setIsOutOfBounds(false);
  }, []);
  (0, import_react7.useEffect)(() => {
    function setStepMultiplier(event) {
      stepMultiplier.current = multiplyStep(event);
    }
    window.addEventListener("keydown", setStepMultiplier);
    window.addEventListener("keyup", setStepMultiplier);
    return () => {
      window.clearTimeout(timeout.current);
      window.removeEventListener("keydown", setStepMultiplier);
      window.removeEventListener("keyup", setStepMultiplier);
    };
  }, []);
  const bind = useDrag2(({
    first,
    active,
    delta: [dx, dy],
    movement: [mx, my]
  }) => {
    if (first)
      setShowJoystick(true);
    const _x = clamp(mx, -w4, w4);
    const _y = clamp(my, -h5, h5);
    outOfBoundsX.current = Math.abs(mx) > Math.abs(_x) ? Math.sign(mx - _x) : 0;
    outOfBoundsY.current = Math.abs(my) > Math.abs(_y) ? Math.sign(_y - my) : 0;
    let newX = value[v1];
    let newY = value[v22];
    if (active) {
      if (!outOfBoundsX.current) {
        newX += dx * stepV1 * stepMultiplier.current;
        set({
          x: _x
        });
      }
      if (!outOfBoundsY.current) {
        newY -= yFactor * dy * stepV2 * stepMultiplier.current;
        set({
          y: _y
        });
      }
      if (outOfBoundsX.current || outOfBoundsY.current)
        startOutOfBounds();
      else
        endOutOfBounds();
      onUpdate({
        [v1]: newX,
        [v22]: newY
      });
    } else {
      setShowJoystick(false);
      outOfBoundsX.current = 0;
      outOfBoundsY.current = 0;
      set({
        x: 0,
        y: 0
      });
      endOutOfBounds();
    }
  });
  return import_react7.default.createElement(JoystickTrigger, _extends2({
    ref: joystickeRef
  }, bind()), joystickShown && import_react7.default.createElement(Portal3, null, import_react7.default.createElement(JoystickPlayground, {
    ref: playgroundRef,
    isOutOfBounds
  }, import_react7.default.createElement("div", null), import_react7.default.createElement("span", {
    ref: spanRef
  }))));
}
var Container$1 = styled("div", {
  display: "grid",
  columnGap: "$colGap",
  variants: {
    withJoystick: {
      true: {
        gridTemplateColumns: "$sizes$rowHeight auto"
      },
      false: {
        gridTemplateColumns: "auto"
      }
    }
  }
});
function Vector2dComponent() {
  const {
    label,
    displayValue,
    onUpdate,
    settings
  } = useInputContext();
  return import_react7.default.createElement(Row, {
    input: true
  }, import_react7.default.createElement(Label, null, label), import_react7.default.createElement(Container$1, {
    withJoystick: !!settings.joystick
  }, settings.joystick && import_react7.default.createElement(Joystick, {
    value: displayValue,
    settings,
    onUpdate
  }), import_react7.default.createElement(Vector, {
    value: displayValue,
    settings,
    onUpdate
  })));
}
var _excluded$72 = ["joystick"];
var plugin = getVectorPlugin(["x", "y"]);
var normalize$22 = (_ref) => {
  let {
    joystick = true
  } = _ref, input = _objectWithoutProperties(_ref, _excluded$72);
  const {
    value,
    settings
  } = plugin.normalize(input);
  return {
    value,
    settings: _objectSpread2(_objectSpread2({}, settings), {}, {
      joystick
    })
  };
};
var vector2d = createInternalPlugin(_objectSpread2(_objectSpread2({
  component: Vector2dComponent
}, plugin), {}, {
  normalize: normalize$22
}));
var sanitize$12 = (v5) => {
  if (v5 === void 0)
    return void 0;
  if (v5 instanceof File) {
    try {
      return URL.createObjectURL(v5);
    } catch (e12) {
      return void 0;
    }
  }
  if (typeof v5 === "string" && v5.indexOf("blob:") === 0)
    return v5;
  throw Error(`Invalid image format [undefined | blob | File].`);
};
var schema$12 = (_o, s6) => typeof s6 === "object" && "image" in s6;
var normalize$12 = ({
  image: image2
}) => {
  return {
    value: image2
  };
};
var props$12 = Object.freeze({
  __proto__: null,
  sanitize: sanitize$12,
  schema: schema$12,
  normalize: normalize$12
});
var ImageContainer = styled("div", {
  position: "relative",
  display: "grid",
  gridTemplateColumns: "$sizes$rowHeight auto 20px",
  columnGap: "$colGap",
  alignItems: "center"
});
var DropZone = styled("div", {
  $flexCenter: "",
  overflow: "hidden",
  height: "$rowHeight",
  background: "$elevation3",
  textAlign: "center",
  color: "inherit",
  borderRadius: "$sm",
  outline: "none",
  userSelect: "none",
  cursor: "pointer",
  $inputStyle: "",
  $hover: "",
  $focusWithin: "",
  $active: "$accent1 $elevation1",
  variants: {
    isDragAccept: {
      true: {
        $inputStyle: "$accent1",
        backgroundColor: "$elevation1"
      }
    }
  }
});
var ImagePreview = styled("div", {
  boxSizing: "border-box",
  borderRadius: "$sm",
  height: "$rowHeight",
  width: "$rowHeight",
  $inputStyle: "",
  backgroundSize: "cover",
  backgroundPosition: "center",
  variants: {
    hasImage: {
      true: {
        cursor: "pointer",
        $hover: "",
        $active: ""
      }
    }
  }
});
var ImageLargePreview = styled("div", {
  $flexCenter: "",
  width: "$imagePreviewWidth",
  height: "$imagePreviewHeight",
  borderRadius: "$sm",
  boxShadow: "$level2",
  pointerEvents: "none",
  $inputStyle: "",
  backgroundSize: "cover",
  backgroundPosition: "center"
});
var Instructions = styled("div", {
  fontSize: "0.8em",
  height: "100%",
  padding: "$rowGap $md"
});
var Remove = styled("div", {
  $flexCenter: "",
  top: "0",
  right: "0",
  marginRight: "$sm",
  height: "100%",
  cursor: "pointer",
  variants: {
    disabled: {
      true: {
        color: "$elevation3",
        cursor: "default"
      }
    }
  },
  "&::after,&::before": {
    content: '""',
    position: "absolute",
    height: 2,
    width: 10,
    borderRadius: 1,
    backgroundColor: "currentColor"
  },
  "&::after": {
    transform: "rotate(45deg)"
  },
  "&::before": {
    transform: "rotate(-45deg)"
  }
});
function ImageComponent() {
  const {
    label,
    value,
    onUpdate,
    disabled
  } = useInputContext();
  const {
    popinRef,
    wrapperRef,
    shown,
    show,
    hide
  } = usePopin();
  const onDrop = (0, import_react7.useCallback)((acceptedFiles) => {
    if (acceptedFiles.length)
      onUpdate(acceptedFiles[0]);
  }, [onUpdate]);
  const clear = (0, import_react7.useCallback)((e12) => {
    e12.stopPropagation();
    onUpdate(void 0);
  }, [onUpdate]);
  const {
    getRootProps,
    getInputProps,
    isDragAccept
  } = useDropzone({
    maxFiles: 1,
    accept: "image/*",
    onDrop,
    disabled
  });
  return import_react7.default.createElement(Row, {
    input: true
  }, import_react7.default.createElement(Label, null, label), import_react7.default.createElement(ImageContainer, null, import_react7.default.createElement(ImagePreview, {
    ref: popinRef,
    hasImage: !!value,
    onPointerDown: () => !!value && show(),
    onPointerUp: hide,
    style: {
      backgroundImage: value ? `url(${value})` : "none"
    }
  }), shown && !!value && import_react7.default.createElement(Portal3, null, import_react7.default.createElement(Overlay, {
    onPointerUp: hide,
    style: {
      cursor: "pointer"
    }
  }), import_react7.default.createElement(ImageLargePreview, {
    ref: wrapperRef,
    style: {
      backgroundImage: `url(${value})`
    }
  })), import_react7.default.createElement(DropZone, getRootProps({
    isDragAccept
  }), import_react7.default.createElement("input", getInputProps()), import_react7.default.createElement(Instructions, null, isDragAccept ? "drop image" : "click or drop")), import_react7.default.createElement(Remove, {
    onClick: clear,
    disabled: !value
  })));
}
var image = createInternalPlugin(_objectSpread2({
  component: ImageComponent
}, props$12));
var number2 = v8n_esm_default().number();
var schema2 = (o9, s6) => v8n_esm_default().array().length(2).every.number().test(o9) && v8n_esm_default().schema({
  min: number2,
  max: number2
}).test(s6);
var format2 = (v5) => ({
  min: v5[0],
  max: v5[1]
});
var sanitize2 = (value, {
  bounds: [MIN, MAX]
}, prevValue) => {
  const _value = Array.isArray(value) ? format2(value) : value;
  const _newValue = {
    min: prevValue[0],
    max: prevValue[1]
  };
  const {
    min,
    max
  } = _objectSpread2(_objectSpread2({}, _newValue), _value);
  return [clamp(Number(min), MIN, Math.max(MIN, max)), clamp(Number(max), Math.min(MAX, min), MAX)];
};
var normalize2 = ({
  value,
  min,
  max
}) => {
  const boundsSettings = {
    min,
    max
  };
  const _settings = normalizeKeyedNumberSettings(format2(value), {
    min: boundsSettings,
    max: boundsSettings
  });
  const bounds = [min, max];
  const settings = _objectSpread2(_objectSpread2({}, _settings), {}, {
    bounds
  });
  const _value = sanitize2(format2(value), settings, value);
  return {
    value: _value,
    settings
  };
};
var props2 = Object.freeze({
  __proto__: null,
  schema: schema2,
  format: format2,
  sanitize: sanitize2,
  normalize: normalize2
});
var _excluded$62 = ["value", "bounds", "onDrag"];
var _excluded2$12 = ["bounds"];
var Container2 = styled("div", {
  display: "grid",
  columnGap: "$colGap",
  gridTemplateColumns: "auto calc($sizes$numberInputMinWidth * 2 + $space$rowGap)"
});
function IntervalSlider(_ref) {
  let {
    value,
    bounds: [min, max],
    onDrag
  } = _ref, settings = _objectWithoutProperties(_ref, _excluded$62);
  const ref = (0, import_react7.useRef)(null);
  const minScrubberRef = (0, import_react7.useRef)(null);
  const maxScrubberRef = (0, import_react7.useRef)(null);
  const rangeWidth = (0, import_react7.useRef)(0);
  const scrubberWidth = useTh("sizes", "scrubberWidth");
  const bind = useDrag2(({
    event,
    first,
    xy: [x4],
    movement: [mx],
    memo: _memo = {}
  }) => {
    if (first) {
      const {
        width,
        left
      } = ref.current.getBoundingClientRect();
      rangeWidth.current = width - parseFloat(scrubberWidth);
      const targetIsScrub = (event === null || event === void 0 ? void 0 : event.target) === minScrubberRef.current || (event === null || event === void 0 ? void 0 : event.target) === maxScrubberRef.current;
      _memo.pos = invertedRange((x4 - left) / width, min, max);
      const delta = Math.abs(_memo.pos - value.min) - Math.abs(_memo.pos - value.max);
      _memo.key = delta < 0 || delta === 0 && _memo.pos <= value.min ? "min" : "max";
      if (targetIsScrub)
        _memo.pos = value[_memo.key];
    }
    const newValue = _memo.pos + invertedRange(mx / rangeWidth.current, 0, max - min);
    onDrag({
      [_memo.key]: sanitizeStep(newValue, settings[_memo.key])
    });
    return _memo;
  });
  const minStyle = `calc(${range(value.min, min, max)} * (100% - ${scrubberWidth} - 8px) + 4px)`;
  const maxStyle = `calc(${1 - range(value.max, min, max)} * (100% - ${scrubberWidth} - 8px) + 4px)`;
  return import_react7.default.createElement(RangeWrapper, _extends2({
    ref
  }, bind()), import_react7.default.createElement(Range, null, import_react7.default.createElement(Indicator, {
    style: {
      left: minStyle,
      right: maxStyle
    }
  })), import_react7.default.createElement(Scrubber, {
    position: "left",
    ref: minScrubberRef,
    style: {
      left: minStyle
    }
  }), import_react7.default.createElement(Scrubber, {
    position: "right",
    ref: maxScrubberRef,
    style: {
      right: maxStyle
    }
  }));
}
function IntervalComponent() {
  const {
    label,
    displayValue,
    onUpdate,
    settings
  } = useInputContext();
  const _settings = _objectWithoutProperties(settings, _excluded2$12);
  return import_react7.default.createElement(import_react7.default.Fragment, null, import_react7.default.createElement(Row, {
    input: true
  }, import_react7.default.createElement(Label, null, label), import_react7.default.createElement(Container2, null, import_react7.default.createElement(IntervalSlider, _extends2({
    value: displayValue
  }, settings, {
    onDrag: onUpdate
  })), import_react7.default.createElement(Vector, {
    value: displayValue,
    settings: _settings,
    onUpdate,
    innerLabelTrim: 0
  }))));
}
var interval = createInternalPlugin(_objectSpread2({
  component: IntervalComponent
}, props2));
var createEventEmitter = () => {
  const listenerMapping = /* @__PURE__ */ new Map();
  return {
    on: (topic, listener) => {
      let listeners = listenerMapping.get(topic);
      if (listeners === void 0) {
        listeners = /* @__PURE__ */ new Set();
        listenerMapping.set(topic, listeners);
      }
      listeners.add(listener);
    },
    off: (topic, listener) => {
      const listeners = listenerMapping.get(topic);
      if (listeners === void 0) {
        return;
      }
      listeners.delete(listener);
      if (listeners.size === 0) {
        listenerMapping.delete(topic);
      }
    },
    emit: (topic, ...args) => {
      const listeners = listenerMapping.get(topic);
      if (listeners === void 0) {
        return;
      }
      for (const listener of listeners) {
        listener(...args);
      }
    }
  };
};
var _excluded$52 = ["type", "value"];
var _excluded23 = ["onChange", "transient", "onEditStart", "onEditEnd"];
var Store = function Store2() {
  const store = create(subscribeWithSelector(() => ({
    data: {}
  })));
  const eventEmitter = createEventEmitter();
  this.storeId = getUid();
  this.useStore = store;
  const folders = {};
  const orderedPaths = /* @__PURE__ */ new Set();
  this.getVisiblePaths = () => {
    const data = this.getData();
    const paths = Object.keys(data);
    const hiddenFolders = [];
    Object.entries(folders).forEach(([path, settings]) => {
      if (settings.render && paths.some((p5) => p5.indexOf(path) === 0) && !settings.render(this.get))
        hiddenFolders.push(path + ".");
    });
    const visiblePaths = [];
    orderedPaths.forEach((path) => {
      if (path in data && data[path].__refCount > 0 && hiddenFolders.every((p5) => path.indexOf(p5) === -1) && (!data[path].render || data[path].render(this.get))) {
        visiblePaths.push(path);
      }
    });
    return visiblePaths;
  };
  this.setOrderedPaths = (newPaths) => {
    newPaths.forEach((p5) => orderedPaths.add(p5));
  };
  this.orderPaths = (paths) => {
    this.setOrderedPaths(paths);
    return paths;
  };
  this.disposePaths = (paths) => {
    store.setState((s6) => {
      const data = s6.data;
      paths.forEach((path) => {
        if (path in data) {
          const input = data[path];
          input.__refCount--;
          if (input.__refCount === 0 && input.type in SpecialInputs) {
            delete data[path];
          }
        }
      });
      return {
        data
      };
    });
  };
  this.dispose = () => {
    store.setState(() => {
      return {
        data: {}
      };
    });
  };
  this.getFolderSettings = (path) => {
    return folders[path] || {};
  };
  this.getData = () => {
    return store.getState().data;
  };
  this.addData = (newData, override) => {
    store.setState((s6) => {
      const data = s6.data;
      Object.entries(newData).forEach(([path, newInputData]) => {
        let input = data[path];
        if (!!input) {
          const {
            type,
            value
          } = newInputData, rest2 = _objectWithoutProperties(newInputData, _excluded$52);
          if (type !== input.type) {
            warn(LevaErrors.INPUT_TYPE_OVERRIDE, type);
          } else {
            if (input.__refCount === 0 || override) {
              Object.assign(input, rest2);
            }
            input.__refCount++;
          }
        } else {
          data[path] = _objectSpread2(_objectSpread2({}, newInputData), {}, {
            __refCount: 1
          });
        }
      });
      return {
        data
      };
    });
  };
  this.setValueAtPath = (path, value, fromPanel) => {
    store.setState((s6) => {
      const data = s6.data;
      updateInput(data[path], value, path, this, fromPanel);
      return {
        data
      };
    });
  };
  this.setSettingsAtPath = (path, settings) => {
    store.setState((s6) => {
      const data = s6.data;
      data[path].settings = _objectSpread2(_objectSpread2({}, data[path].settings), settings);
      return {
        data
      };
    });
  };
  this.disableInputAtPath = (path, flag) => {
    store.setState((s6) => {
      const data = s6.data;
      data[path].disabled = flag;
      return {
        data
      };
    });
  };
  this.set = (values, fromPanel) => {
    store.setState((s6) => {
      const data = s6.data;
      Object.entries(values).forEach(([path, value]) => {
        try {
          updateInput(data[path], value, void 0, void 0, fromPanel);
        } catch (e12) {
          if (true) {
            console.warn(`[This message will only show in development]: \`set\` for path ${path} has failed.`, e12);
          }
        }
      });
      return {
        data
      };
    });
  };
  this.getInput = (path) => {
    try {
      return this.getData()[path];
    } catch (e12) {
      warn(LevaErrors.PATH_DOESNT_EXIST, path);
    }
  };
  this.get = (path) => {
    var _this$getInput;
    return (_this$getInput = this.getInput(path)) === null || _this$getInput === void 0 ? void 0 : _this$getInput.value;
  };
  this.emitOnEditStart = (path) => {
    eventEmitter.emit(`onEditStart:${path}`, this.get(path), path, _objectSpread2(_objectSpread2({}, this.getInput(path)), {}, {
      get: this.get
    }));
  };
  this.emitOnEditEnd = (path) => {
    eventEmitter.emit(`onEditEnd:${path}`, this.get(path), path, _objectSpread2(_objectSpread2({}, this.getInput(path)), {}, {
      get: this.get
    }));
  };
  this.subscribeToEditStart = (path, listener) => {
    const _path = `onEditStart:${path}`;
    eventEmitter.on(_path, listener);
    return () => eventEmitter.off(_path, listener);
  };
  this.subscribeToEditEnd = (path, listener) => {
    const _path = `onEditEnd:${path}`;
    eventEmitter.on(_path, listener);
    return () => eventEmitter.off(_path, listener);
  };
  const _getDataFromSchema = (schema3, rootPath, mappedPaths) => {
    const data = {};
    Object.entries(schema3).forEach(([key, rawInput]) => {
      if (key === "")
        return warn(LevaErrors.EMPTY_KEY);
      let newPath = join(rootPath, key);
      if (rawInput.type === SpecialInputs.FOLDER) {
        const newData = _getDataFromSchema(rawInput.schema, newPath, mappedPaths);
        Object.assign(data, newData);
        if (!(newPath in folders))
          folders[newPath] = rawInput.settings;
      } else if (key in mappedPaths) {
        warn(LevaErrors.DUPLICATE_KEYS, key, newPath, mappedPaths[key].path);
      } else {
        const normalizedInput = normalizeInput(rawInput, key, newPath, data);
        if (normalizedInput) {
          const {
            type,
            options,
            input
          } = normalizedInput;
          const {
            onChange,
            transient,
            onEditStart,
            onEditEnd
          } = options, _options = _objectWithoutProperties(options, _excluded23);
          data[newPath] = _objectSpread2(_objectSpread2(_objectSpread2({
            type
          }, _options), input), {}, {
            fromPanel: true
          });
          mappedPaths[key] = {
            path: newPath,
            onChange,
            transient,
            onEditStart,
            onEditEnd
          };
        } else {
          warn(LevaErrors.UNKNOWN_INPUT, newPath, rawInput);
        }
      }
    });
    return data;
  };
  this.getDataFromSchema = (schema3) => {
    const mappedPaths = {};
    const data = _getDataFromSchema(schema3, "", mappedPaths);
    return [data, mappedPaths];
  };
};
var levaStore = new Store();
function useCreateStore() {
  return (0, import_react7.useMemo)(() => new Store(), []);
}
if (typeof window !== "undefined") {
  window.__STORE = levaStore;
}
var defaultSettings$2 = {
  collapsed: false
};
function folder(schema3, settings) {
  return {
    type: SpecialInputs.FOLDER,
    schema: schema3,
    settings: _objectSpread2(_objectSpread2({}, defaultSettings$2), settings)
  };
}
var defaultSettings$1 = {
  disabled: false
};
function button(onClick, settings) {
  return {
    type: SpecialInputs.BUTTON,
    onClick,
    settings: _objectSpread2(_objectSpread2({}, defaultSettings$1), settings)
  };
}
var isInput = (v5) => "__levaInput" in v5;
var buildTree = (paths, filter) => {
  const tree = {};
  const _filter = filter ? filter.toLowerCase() : null;
  paths.forEach((path) => {
    const [valueKey, folderPath] = getKeyPath(path);
    if (!_filter || valueKey.toLowerCase().indexOf(_filter) > -1) {
      (0, import_merge_value.default)(tree, folderPath, {
        [valueKey]: {
          __levaInput: true,
          path
        }
      });
    }
  });
  return tree;
};
var _excluded$42 = ["type", "label", "path", "valueKey", "value", "settings", "setValue", "disabled"];
function ControlInput(_ref) {
  let {
    type,
    label,
    path,
    valueKey,
    value,
    settings,
    setValue,
    disabled
  } = _ref, rest2 = _objectWithoutProperties(_ref, _excluded$42);
  const {
    displayValue,
    onChange,
    onUpdate
  } = useInputSetters({
    type,
    value,
    settings,
    setValue
  });
  const Input = Plugins[type].component;
  if (!Input) {
    warn(LevaErrors.NO_COMPONENT_FOR_TYPE, type, path);
    return null;
  }
  return import_react7.default.createElement(InputContext.Provider, {
    value: _objectSpread2({
      key: valueKey,
      path,
      id: "" + path,
      label,
      displayValue,
      value,
      onChange,
      onUpdate,
      settings,
      setValue,
      disabled
    }, rest2)
  }, import_react7.default.createElement(StyledInputWrapper$1, {
    disabled
  }, import_react7.default.createElement(Input, null)));
}
var StyledButton = styled("button", {
  display: "block",
  $reset: "",
  fontWeight: "$button",
  height: "$rowHeight",
  borderStyle: "none",
  borderRadius: "$sm",
  backgroundColor: "$elevation1",
  color: "$highlight1",
  "&:not(:disabled)": {
    color: "$highlight3",
    backgroundColor: "$accent2",
    cursor: "pointer",
    $hover: "$accent3",
    $active: "$accent3 $accent1",
    $focus: ""
  }
});
function Button({
  onClick,
  settings,
  label
}) {
  const store = useStoreContext();
  return import_react7.default.createElement(Row, null, import_react7.default.createElement(StyledButton, {
    disabled: settings.disabled,
    onClick: () => onClick(store.get)
  }, label));
}
var StyledButtonGroup = styled("div", {
  $flex: "",
  justifyContent: "flex-end",
  gap: "$colGap"
});
var StyledButtonGroupButton = styled("button", {
  $reset: "",
  cursor: "pointer",
  borderRadius: "$xs",
  "&:hover": {
    backgroundColor: "$elevation3"
  }
});
var getOpts = ({
  label: _label,
  opts: _opts
}) => {
  let label = typeof _label === "string" ? _label.trim() === "" ? null : _label : _label;
  let opts = _opts;
  if (typeof _opts.opts === "object") {
    if (opts.label !== void 0) {
      label = _opts.label;
    }
    opts = _opts.opts;
  }
  return {
    label,
    opts
  };
};
function ButtonGroup(props3) {
  const {
    label,
    opts
  } = getOpts(props3);
  const store = useStoreContext();
  return import_react7.default.createElement(Row, {
    input: !!label
  }, label && import_react7.default.createElement(Label, null, label), import_react7.default.createElement(StyledButtonGroup, null, Object.entries(opts).map(([label2, onClick]) => import_react7.default.createElement(StyledButtonGroupButton, {
    key: label2,
    onClick: () => onClick(store.get)
  }, label2))));
}
var Canvas = styled("canvas", {
  height: "$monitorHeight",
  width: "100%",
  display: "block",
  borderRadius: "$sm"
});
var POINTS = 100;
function push(arr, val) {
  arr.push(val);
  if (arr.length > POINTS)
    arr.shift();
}
var MonitorCanvas = (0, import_react7.forwardRef)(function({
  initialValue
}, ref) {
  const accentColor = useTh("colors", "highlight3");
  const backgroundColor = useTh("colors", "elevation2");
  const fillColor = useTh("colors", "highlight1");
  const [gradientTop, gradientBottom] = (0, import_react7.useMemo)(() => {
    return [w3(fillColor).alpha(0.4).toRgbString(), w3(fillColor).alpha(0.1).toRgbString()];
  }, [fillColor]);
  const points = (0, import_react7.useRef)([initialValue]);
  const min = (0, import_react7.useRef)(initialValue);
  const max = (0, import_react7.useRef)(initialValue);
  const raf = (0, import_react7.useRef)();
  const drawPlot = (0, import_react7.useCallback)((_canvas, _ctx) => {
    if (!_canvas)
      return;
    const {
      width,
      height
    } = _canvas;
    const path = new Path2D();
    const interval2 = width / POINTS;
    const verticalPadding = height * 0.05;
    for (let i6 = 0; i6 < points.current.length; i6++) {
      const p5 = range(points.current[i6], min.current, max.current);
      const x4 = interval2 * i6;
      const y5 = height - p5 * (height - verticalPadding * 2) - verticalPadding;
      path.lineTo(x4, y5);
    }
    _ctx.clearRect(0, 0, width, height);
    const gradientPath = new Path2D(path);
    gradientPath.lineTo(interval2 * (points.current.length + 1), height);
    gradientPath.lineTo(0, height);
    gradientPath.lineTo(0, 0);
    const gradient = _ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, gradientTop);
    gradient.addColorStop(1, gradientBottom);
    _ctx.fillStyle = gradient;
    _ctx.fill(gradientPath);
    _ctx.strokeStyle = backgroundColor;
    _ctx.lineJoin = "round";
    _ctx.lineWidth = 14;
    _ctx.stroke(path);
    _ctx.strokeStyle = accentColor;
    _ctx.lineWidth = 2;
    _ctx.stroke(path);
  }, [accentColor, backgroundColor, gradientTop, gradientBottom]);
  const [canvas, ctx] = useCanvas2d(drawPlot);
  (0, import_react7.useImperativeHandle)(ref, () => ({
    frame: (val) => {
      if (min.current === void 0 || val < min.current)
        min.current = val;
      if (max.current === void 0 || val > max.current)
        max.current = val;
      push(points.current, val);
      raf.current = requestAnimationFrame(() => drawPlot(canvas.current, ctx.current));
    }
  }), [canvas, ctx, drawPlot]);
  (0, import_react7.useEffect)(() => () => cancelAnimationFrame(raf.current), []);
  return import_react7.default.createElement(Canvas, {
    ref: canvas
  });
});
var parse = (val) => Number.isFinite(val) ? val.toPrecision(2) : val.toString();
var MonitorLog = (0, import_react7.forwardRef)(function({
  initialValue
}, ref) {
  const [val, set] = (0, import_react7.useState)(parse(initialValue));
  (0, import_react7.useImperativeHandle)(ref, () => ({
    frame: (v5) => set(parse(v5))
  }), []);
  return import_react7.default.createElement("div", null, val);
});
function getValue(o9) {
  return typeof o9 === "function" ? o9() : o9.current;
}
function Monitor({
  label,
  objectOrFn,
  settings
}) {
  const ref = (0, import_react7.useRef)();
  const initialValue = (0, import_react7.useRef)(getValue(objectOrFn));
  (0, import_react7.useEffect)(() => {
    const timeout = window.setInterval(() => {
      var _ref$current;
      if (document.hidden)
        return;
      (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.frame(getValue(objectOrFn));
    }, settings.interval);
    return () => window.clearInterval(timeout);
  }, [objectOrFn, settings.interval]);
  return import_react7.default.createElement(Row, {
    input: true
  }, import_react7.default.createElement(Label, {
    align: "top"
  }, label), settings.graph ? import_react7.default.createElement(MonitorCanvas, {
    ref,
    initialValue: initialValue.current
  }) : import_react7.default.createElement(MonitorLog, {
    ref,
    initialValue: initialValue.current
  }));
}
var _excluded$32 = ["type", "label", "key"];
var specialComponents = {
  [SpecialInputs.BUTTON]: Button,
  [SpecialInputs.BUTTON_GROUP]: ButtonGroup,
  [SpecialInputs.MONITOR]: Monitor
};
var Control = import_react7.default.memo(({
  path
}) => {
  const [input, {
    set,
    setSettings,
    disable,
    storeId,
    emitOnEditStart,
    emitOnEditEnd
  }] = useInput(path);
  if (!input)
    return null;
  const {
    type,
    label,
    key
  } = input, inputProps = _objectWithoutProperties(input, _excluded$32);
  if (type in SpecialInputs) {
    const SpecialInputForType = specialComponents[type];
    return import_react7.default.createElement(SpecialInputForType, _extends2({
      label,
      path
    }, inputProps));
  }
  if (!(type in Plugins)) {
    log(LevaErrors.UNSUPPORTED_INPUT, type, path);
    return null;
  }
  return import_react7.default.createElement(ControlInput, _extends2({
    key: storeId + path,
    type,
    label,
    storeId,
    path,
    valueKey: key,
    setValue: set,
    setSettings,
    disable,
    emitOnEditStart,
    emitOnEditEnd
  }, inputProps));
});
function FolderTitle({
  toggle,
  toggled,
  name
}) {
  return import_react7.default.createElement(StyledTitle, {
    onClick: () => toggle()
  }, import_react7.default.createElement(Chevron, {
    toggled
  }), import_react7.default.createElement("div", null, name));
}
var Folder = ({
  name,
  path,
  tree
}) => {
  const store = useStoreContext();
  const newPath = join(path, name);
  const {
    collapsed,
    color: color2
  } = store.getFolderSettings(newPath);
  const [toggled, setToggle] = (0, import_react7.useState)(!collapsed);
  const folderRef = (0, import_react7.useRef)(null);
  const widgetColor = useTh("colors", "folderWidgetColor");
  const textColor = useTh("colors", "folderTextColor");
  (0, import_react7.useLayoutEffect)(() => {
    folderRef.current.style.setProperty("--leva-colors-folderWidgetColor", color2 || widgetColor);
    folderRef.current.style.setProperty("--leva-colors-folderTextColor", color2 || textColor);
  }, [color2, widgetColor, textColor]);
  return import_react7.default.createElement(StyledFolder, {
    ref: folderRef
  }, import_react7.default.createElement(FolderTitle, {
    name,
    toggled,
    toggle: () => setToggle((t12) => !t12)
  }), import_react7.default.createElement(TreeWrapper, {
    parent: newPath,
    tree,
    toggled
  }));
};
var TreeWrapper = import_react7.default.memo(({
  isRoot: _isRoot = false,
  fill: _fill = false,
  flat: _flat = false,
  parent,
  tree,
  toggled
}) => {
  const {
    wrapperRef,
    contentRef
  } = useToggle(toggled);
  const store = useStoreContext();
  const getOrder = ([key, o9]) => {
    var _store$getInput;
    const order = isInput(o9) ? (_store$getInput = store.getInput(o9.path)) === null || _store$getInput === void 0 ? void 0 : _store$getInput.order : store.getFolderSettings(join(parent, key)).order;
    return order || 0;
  };
  const entries = Object.entries(tree).sort((a5, b5) => getOrder(a5) - getOrder(b5));
  return import_react7.default.createElement(StyledWrapper, {
    ref: wrapperRef,
    isRoot: _isRoot,
    fill: _fill,
    flat: _flat
  }, import_react7.default.createElement(StyledContent, {
    ref: contentRef,
    isRoot: _isRoot,
    toggled
  }, entries.map(([key, value]) => isInput(value) ? import_react7.default.createElement(Control, {
    key: value.path,
    valueKey: value.valueKey,
    path: value.path
  }) : import_react7.default.createElement(Folder, {
    key,
    name: key,
    path: parent,
    tree: value
  }))));
});
var StyledRoot = styled("div", {
  position: "relative",
  fontFamily: "$mono",
  fontSize: "$root",
  color: "$rootText",
  backgroundColor: "$elevation1",
  variants: {
    fill: {
      false: {
        position: "fixed",
        top: "10px",
        right: "10px",
        zIndex: 1e3,
        width: "$rootWidth"
      },
      true: {
        position: "relative",
        width: "100%"
      }
    },
    flat: {
      false: {
        borderRadius: "$lg",
        boxShadow: "$level1"
      }
    },
    oneLineLabels: {
      true: {
        [`${StyledInputRow}`]: {
          gridTemplateColumns: "auto",
          gridAutoColumns: "minmax(max-content, 1fr)",
          gridAutoRows: "minmax($sizes$rowHeight), auto)",
          rowGap: 0,
          columnGap: 0,
          marginTop: "$rowGap"
        }
      }
    },
    hideTitleBar: {
      true: {
        $$titleBarHeight: "0px"
      },
      false: {
        $$titleBarHeight: "$sizes$titleBarHeight"
      }
    }
  },
  "&,*,*:after,*:before": {
    boxSizing: "border-box"
  },
  "*::selection": {
    backgroundColor: "$accent2"
  }
});
var iconWidth = 40;
var Icon = styled("i", {
  $flexCenter: "",
  width: iconWidth,
  userSelect: "none",
  cursor: "pointer",
  "> svg": {
    fill: "$highlight1",
    transition: "transform 350ms ease, fill 250ms ease"
  },
  "&:hover > svg": {
    fill: "$highlight3"
  },
  variants: {
    active: {
      true: {
        "> svg": {
          fill: "$highlight2"
        }
      }
    }
  }
});
var StyledTitleWithFilter = styled("div", {
  display: "flex",
  alignItems: "stretch",
  justifyContent: "space-between",
  height: "$titleBarHeight",
  variants: {
    mode: {
      drag: {
        cursor: "grab"
      }
    }
  }
});
var FilterWrapper = styled("div", {
  $flex: "",
  position: "relative",
  width: "100%",
  overflow: "hidden",
  transition: "height 250ms ease",
  color: "$highlight3",
  paddingLeft: "$md",
  [`> ${Icon}`]: {
    height: 30
  },
  variants: {
    toggled: {
      true: {
        height: 30
      },
      false: {
        height: 0
      }
    }
  }
});
var StyledFilterInput = styled("input", {
  $reset: "",
  flex: 1,
  position: "relative",
  height: 30,
  width: "100%",
  backgroundColor: "transparent",
  fontSize: "10px",
  borderRadius: "$root",
  "&:focus": {},
  "&::placeholder": {
    color: "$highlight2"
  }
});
var TitleContainer = styled("div", {
  touchAction: "none",
  $flexCenter: "",
  flex: 1,
  "> svg": {
    fill: "$highlight1"
  },
  color: "$highlight1",
  variants: {
    drag: {
      true: {
        $draggable: "",
        "> svg": {
          transition: "fill 250ms ease"
        },
        "&:hover": {
          color: "$highlight3"
        },
        "&:hover > svg": {
          fill: "$highlight3"
        }
      }
    },
    filterEnabled: {
      false: {
        paddingRight: iconWidth
      }
    }
  }
});
var FilterInput = import_react7.default.forwardRef(({
  setFilter,
  toggle
}, ref) => {
  const [value, set] = (0, import_react7.useState)("");
  const debouncedOnChange = (0, import_react7.useMemo)(() => debounce(setFilter, 250), [setFilter]);
  const clear = () => {
    setFilter("");
    set("");
  };
  const _onChange = (e12) => {
    const v5 = e12.currentTarget.value;
    toggle(true);
    set(v5);
  };
  (0, import_react7.useEffect)(() => {
    debouncedOnChange(value);
  }, [value, debouncedOnChange]);
  return import_react7.default.createElement(import_react7.default.Fragment, null, import_react7.default.createElement(StyledFilterInput, {
    ref,
    value,
    placeholder: "[Open filter with CMD+SHIFT+L]",
    onPointerDown: (e12) => e12.stopPropagation(),
    onChange: _onChange
  }), import_react7.default.createElement(Icon, {
    onClick: () => clear(),
    style: {
      visibility: value ? "visible" : "hidden"
    }
  }, import_react7.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "14",
    width: "14",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, import_react7.default.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
    clipRule: "evenodd"
  }))));
});
function TitleWithFilter({
  setFilter,
  onDrag,
  onDragStart,
  onDragEnd,
  toggle,
  toggled,
  title,
  drag,
  filterEnabled,
  from
}) {
  const [filterShown, setShowFilter] = (0, import_react7.useState)(false);
  const inputRef = (0, import_react7.useRef)(null);
  (0, import_react7.useEffect)(() => {
    var _inputRef$current, _inputRef$current2;
    if (filterShown)
      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
    else
      (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.blur();
  }, [filterShown]);
  const bind = useDrag2(({
    offset: [x4, y5],
    first,
    last
  }) => {
    onDrag({
      x: x4,
      y: y5
    });
    if (first) {
      onDragStart({
        x: x4,
        y: y5
      });
    }
    if (last) {
      onDragEnd({
        x: x4,
        y: y5
      });
    }
  }, {
    filterTaps: true,
    from: ({
      offset: [x4, y5]
    }) => [(from === null || from === void 0 ? void 0 : from.x) || x4, (from === null || from === void 0 ? void 0 : from.y) || y5]
  });
  (0, import_react7.useEffect)(() => {
    const handleShortcut = (event) => {
      if (event.key === "L" && event.shiftKey && event.metaKey) {
        setShowFilter((f5) => !f5);
      }
    };
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);
  return import_react7.default.createElement(import_react7.default.Fragment, null, import_react7.default.createElement(StyledTitleWithFilter, {
    mode: drag ? "drag" : void 0
  }, import_react7.default.createElement(Icon, {
    active: !toggled,
    onClick: () => toggle()
  }, import_react7.default.createElement(Chevron, {
    toggled,
    width: 12,
    height: 8
  })), import_react7.default.createElement(TitleContainer, _extends2({}, drag ? bind() : {}, {
    drag,
    filterEnabled
  }), title === void 0 && drag ? import_react7.default.createElement("svg", {
    width: "20",
    height: "10",
    viewBox: "0 0 28 14",
    xmlns: "http://www.w3.org/2000/svg"
  }, import_react7.default.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "2"
  }), import_react7.default.createElement("circle", {
    cx: "14",
    cy: "2",
    r: "2"
  }), import_react7.default.createElement("circle", {
    cx: "26",
    cy: "2",
    r: "2"
  }), import_react7.default.createElement("circle", {
    cx: "2",
    cy: "12",
    r: "2"
  }), import_react7.default.createElement("circle", {
    cx: "14",
    cy: "12",
    r: "2"
  }), import_react7.default.createElement("circle", {
    cx: "26",
    cy: "12",
    r: "2"
  })) : title), filterEnabled && import_react7.default.createElement(Icon, {
    active: filterShown,
    onClick: () => setShowFilter((f5) => !f5)
  }, import_react7.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "20",
    viewBox: "0 0 20 20"
  }, import_react7.default.createElement("path", {
    d: "M9 9a2 2 0 114 0 2 2 0 01-4 0z"
  }), import_react7.default.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z",
    clipRule: "evenodd"
  })))), import_react7.default.createElement(FilterWrapper, {
    toggled: filterShown
  }, import_react7.default.createElement(FilterInput, {
    ref: inputRef,
    setFilter,
    toggle
  })));
}
var _excluded$22 = ["store", "hidden", "theme", "collapsed"];
function LevaRoot(_ref) {
  let {
    store,
    hidden = false,
    theme,
    collapsed = false
  } = _ref, props3 = _objectWithoutProperties(_ref, _excluded$22);
  const themeContext = useDeepMemo(() => mergeTheme(theme), [theme]);
  const [toggled, setToggle] = (0, import_react7.useState)(!collapsed);
  const computedToggled = typeof collapsed === "object" ? !collapsed.collapsed : toggled;
  const computedSetToggle = (0, import_react7.useMemo)(() => {
    if (typeof collapsed === "object") {
      return (value) => {
        if (typeof value === "function") {
          collapsed.onChange(!value(!collapsed.collapsed));
        } else {
          collapsed.onChange(!value);
        }
      };
    }
    return setToggle;
  }, [collapsed]);
  if (!store || hidden)
    return null;
  return import_react7.default.createElement(ThemeContext.Provider, {
    value: themeContext
  }, import_react7.default.createElement(LevaCore, _extends2({
    store
  }, props3, {
    toggled: computedToggled,
    setToggle: computedSetToggle,
    rootClass: themeContext.className
  })));
}
var LevaCore = import_react7.default.memo(({
  store,
  rootClass,
  fill: _fill = false,
  flat: _flat = false,
  neverHide: _neverHide = false,
  oneLineLabels: _oneLineLabels = false,
  titleBar: _titleBar = {
    title: void 0,
    drag: true,
    filter: true,
    position: void 0,
    onDrag: void 0,
    onDragStart: void 0,
    onDragEnd: void 0
  },
  hideCopyButton: _hideCopyButton = false,
  toggled,
  setToggle
}) => {
  var _titleBar$drag, _titleBar$filter;
  const paths = useVisiblePaths(store);
  const [filter, setFilter] = (0, import_react7.useState)("");
  const tree = (0, import_react7.useMemo)(() => buildTree(paths, filter), [paths, filter]);
  const [rootRef, set] = useTransform();
  const shouldShow = _neverHide || paths.length > 0;
  const title = typeof _titleBar === "object" ? _titleBar.title || void 0 : void 0;
  const drag = typeof _titleBar === "object" ? (_titleBar$drag = _titleBar.drag) !== null && _titleBar$drag !== void 0 ? _titleBar$drag : true : true;
  const filterEnabled = typeof _titleBar === "object" ? (_titleBar$filter = _titleBar.filter) !== null && _titleBar$filter !== void 0 ? _titleBar$filter : true : true;
  const position = typeof _titleBar === "object" ? _titleBar.position || void 0 : void 0;
  const onDrag = typeof _titleBar === "object" ? _titleBar.onDrag || void 0 : void 0;
  const onDragStart = typeof _titleBar === "object" ? _titleBar.onDragStart || void 0 : void 0;
  const onDragEnd = typeof _titleBar === "object" ? _titleBar.onDragEnd || void 0 : void 0;
  import_react7.default.useEffect(() => {
    set({
      x: position === null || position === void 0 ? void 0 : position.x,
      y: position === null || position === void 0 ? void 0 : position.y
    });
  }, [position, set]);
  globalStyles();
  return import_react7.default.createElement(PanelSettingsContext.Provider, {
    value: {
      hideCopyButton: _hideCopyButton
    }
  }, import_react7.default.createElement(StyledRoot, {
    ref: rootRef,
    className: rootClass,
    fill: _fill,
    flat: _flat,
    oneLineLabels: _oneLineLabels,
    hideTitleBar: !_titleBar,
    style: {
      display: shouldShow ? "block" : "none"
    }
  }, _titleBar && import_react7.default.createElement(TitleWithFilter, {
    onDrag: (point) => {
      set(point);
      onDrag === null || onDrag === void 0 ? void 0 : onDrag(point);
    },
    onDragStart: (point) => onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(point),
    onDragEnd: (point) => onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(point),
    setFilter,
    toggle: (flag) => setToggle((t12) => flag !== null && flag !== void 0 ? flag : !t12),
    toggled,
    title,
    drag,
    filterEnabled,
    from: position
  }), shouldShow && import_react7.default.createElement(StoreContext.Provider, {
    value: store
  }, import_react7.default.createElement(TreeWrapper, {
    isRoot: true,
    fill: _fill,
    flat: _flat,
    tree,
    toggled
  }))));
});
var _excluded$12 = ["isRoot"];
var rootInitialized = false;
var rootEl = null;
function Leva(_ref) {
  let {
    isRoot = false
  } = _ref, props3 = _objectWithoutProperties(_ref, _excluded$12);
  (0, import_react7.useEffect)(() => {
    rootInitialized = true;
    if (!isRoot && rootEl) {
      rootEl.remove();
      rootEl = null;
    }
    return () => {
      if (!isRoot)
        rootInitialized = false;
    };
  }, [isRoot]);
  return import_react7.default.createElement(LevaRoot, _extends2({
    store: levaStore
  }, props3));
}
function useRenderRoot(isGlobalPanel) {
  (0, import_react7.useEffect)(() => {
    if (isGlobalPanel && !rootInitialized) {
      if (!rootEl) {
        rootEl = document.getElementById("leva__root") || Object.assign(document.createElement("div"), {
          id: "leva__root"
        });
        if (document.body) {
          document.body.appendChild(rootEl);
          render(import_react7.default.createElement(Leva, {
            isRoot: true
          }), rootEl);
        }
      }
      rootInitialized = true;
    }
  }, [isGlobalPanel]);
}
var _excluded5 = ["store"];
function LevaPanel(_ref) {
  let {
    store
  } = _ref, props3 = _objectWithoutProperties(_ref, _excluded5);
  const parentStore = useStoreContext();
  const _store = store === void 0 ? parentStore : store;
  return import_react7.default.createElement(LevaRoot, _extends2({
    store: _store
  }, props3));
}
function parseArgs(schemaOrFolderName, settingsOrDepsOrSchema, depsOrSettingsOrFolderSettings, depsOrSettings, depsOrUndefined) {
  let schema3;
  let folderName = void 0;
  let folderSettings;
  let hookSettings;
  let deps;
  if (typeof schemaOrFolderName === "string") {
    folderName = schemaOrFolderName;
    schema3 = settingsOrDepsOrSchema;
    if (Array.isArray(depsOrSettingsOrFolderSettings)) {
      deps = depsOrSettingsOrFolderSettings;
    } else {
      if (depsOrSettingsOrFolderSettings) {
        if ("store" in depsOrSettingsOrFolderSettings) {
          hookSettings = depsOrSettingsOrFolderSettings;
          deps = depsOrSettings;
        } else {
          folderSettings = depsOrSettingsOrFolderSettings;
          if (Array.isArray(depsOrSettings)) {
            deps = depsOrSettings;
          } else {
            hookSettings = depsOrSettings;
            deps = depsOrUndefined;
          }
        }
      }
    }
  } else {
    schema3 = schemaOrFolderName;
    if (Array.isArray(settingsOrDepsOrSchema)) {
      deps = settingsOrDepsOrSchema;
    } else {
      hookSettings = settingsOrDepsOrSchema;
      deps = depsOrSettingsOrFolderSettings;
    }
  }
  return {
    schema: schema3,
    folderName,
    folderSettings,
    hookSettings,
    deps: deps || []
  };
}
function useControls(schemaOrFolderName, settingsOrDepsOrSchema, depsOrSettingsOrFolderSettings, depsOrSettings, depsOrUndefined) {
  const {
    folderName,
    schema: schema3,
    folderSettings,
    hookSettings,
    deps
  } = parseArgs(schemaOrFolderName, settingsOrDepsOrSchema, depsOrSettingsOrFolderSettings, depsOrSettings, depsOrUndefined);
  const schemaIsFunction = typeof schema3 === "function";
  const depsChanged = (0, import_react7.useRef)(false);
  const firstRender = (0, import_react7.useRef)(true);
  const _schema = useDeepMemo(() => {
    depsChanged.current = true;
    const s6 = typeof schema3 === "function" ? schema3() : schema3;
    return folderName ? {
      [folderName]: folder(s6, folderSettings)
    } : s6;
  }, deps);
  const isGlobalPanel = !(hookSettings !== null && hookSettings !== void 0 && hookSettings.store);
  useRenderRoot(isGlobalPanel);
  const [store] = (0, import_react7.useState)(() => (hookSettings === null || hookSettings === void 0 ? void 0 : hookSettings.store) || levaStore);
  const [initialData, mappedPaths] = (0, import_react7.useMemo)(() => store.getDataFromSchema(_schema), [store, _schema]);
  const [allPaths, renderPaths, onChangePaths, onEditStartPaths, onEditEndPaths] = (0, import_react7.useMemo)(() => {
    const allPaths2 = [];
    const renderPaths2 = [];
    const onChangePaths2 = {};
    const onEditStartPaths2 = {};
    const onEditEndPaths2 = {};
    Object.values(mappedPaths).forEach(({
      path,
      onChange,
      onEditStart,
      onEditEnd,
      transient
    }) => {
      allPaths2.push(path);
      if (!!onChange) {
        onChangePaths2[path] = onChange;
        if (!transient) {
          renderPaths2.push(path);
        }
      } else {
        renderPaths2.push(path);
      }
      if (onEditStart) {
        onEditStartPaths2[path] = onEditStart;
      }
      if (onEditEnd) {
        onEditEndPaths2[path] = onEditEnd;
      }
    });
    return [allPaths2, renderPaths2, onChangePaths2, onEditStartPaths2, onEditEndPaths2];
  }, [mappedPaths]);
  const paths = (0, import_react7.useMemo)(() => store.orderPaths(allPaths), [allPaths, store]);
  const values = useValuesForPath(store, renderPaths, initialData);
  const set = (0, import_react7.useCallback)((values2) => {
    const _values = Object.entries(values2).reduce((acc, [p5, v5]) => Object.assign(acc, {
      [mappedPaths[p5].path]: v5
    }), {});
    store.set(_values, false);
  }, [store, mappedPaths]);
  const get = (0, import_react7.useCallback)((path) => store.get(mappedPaths[path].path), [store, mappedPaths]);
  (0, import_react7.useEffect)(() => {
    const shouldOverrideSettings = !firstRender.current && depsChanged.current;
    store.addData(initialData, shouldOverrideSettings);
    firstRender.current = false;
    depsChanged.current = false;
    return () => store.disposePaths(paths);
  }, [store, paths, initialData]);
  (0, import_react7.useEffect)(() => {
    const unsubscriptions = [];
    Object.entries(onChangePaths).forEach(([path, onChange]) => {
      onChange(store.get(path), path, _objectSpread2({
        initial: true,
        get: store.get
      }, store.getInput(path)));
      const unsub = store.useStore.subscribe((s6) => {
        const input = s6.data[path];
        const value = input.disabled ? void 0 : input.value;
        return [value, input];
      }, ([value, input]) => onChange(value, path, _objectSpread2({
        initial: false,
        get: store.get
      }, input)), {
        equalityFn: shallow
      });
      unsubscriptions.push(unsub);
    });
    return () => unsubscriptions.forEach((unsub) => unsub());
  }, [store, onChangePaths]);
  (0, import_react7.useEffect)(() => {
    const unsubscriptions = [];
    Object.entries(onEditStartPaths).forEach(([path, onEditStart]) => unsubscriptions.push(store.subscribeToEditStart(path, onEditStart)));
    Object.entries(onEditEndPaths).forEach(([path, onEditEnd]) => unsubscriptions.push(store.subscribeToEditEnd(path, onEditEnd)));
    return () => unsubscriptions.forEach((unsub) => unsub());
  }, [onEditStartPaths, onEditEndPaths, store]);
  if (schemaIsFunction)
    return [values, set, get];
  return values;
}
register(LevaInputs.SELECT, select);
register(LevaInputs.IMAGE, image);
register(LevaInputs.NUMBER, number);
register(LevaInputs.COLOR, color);
register(LevaInputs.STRING, string);
register(LevaInputs.BOOLEAN, boolean);
register(LevaInputs.INTERVAL, interval);
register(LevaInputs.VECTOR3D, vector3d);
register(LevaInputs.VECTOR2D, vector2d);

// node_modules/lamina/index.js
function getUniform(value) {
  if (typeof value === "string") {
    return new Color(value).convertLinearToSRGB();
  }
  return value;
}
function getSpecialParameters(label) {
  switch (label) {
    case "alpha":
      return {
        min: 0,
        max: 1
      };
    case "scale":
      return {
        min: 0
      };
    case "map":
      return {
        image: void 0
      };
    default:
      return {};
  }
}
function getLayerMaterialArgs({
  color: color2,
  alpha,
  lighting,
  name,
  ...rest2
} = {}) {
  return [{
    color: color2,
    alpha,
    lighting,
    name
  }, rest2];
}
function isSerializableType(prop) {
  return prop instanceof Vector3 || prop instanceof Vector2 || prop instanceof Vector4 || prop instanceof Matrix3 || prop instanceof Matrix4;
}
function serializeProp(prop) {
  if (isSerializableType(prop)) {
    return prop.toArray();
  } else if (prop instanceof Color) {
    return "#" + prop.clone().convertLinearToSRGB().getHexString();
  } else if (prop instanceof Texture) {
    return prop.image.src;
  }
  return prop;
}
var BlendModes = {
  normal: "normal",
  add: "add",
  subtract: "subtract",
  multiply: "multiply",
  lighten: "lighten",
  darken: "darken",
  divide: "divide",
  overlay: "overlay",
  screen: "screen",
  softlight: "softlight",
  negation: "negation",
  reflect: "reflect"
};
var NoiseTypes = {
  perlin: "perlin",
  simplex: "simplex",
  cell: "cell",
  curl: "curl",
  white: "white"
};
var MappingTypes = {
  local: "local",
  world: "world",
  uv: "uv"
};
var ShadingTypes = {
  phong: MeshPhongMaterial,
  physical: MeshPhysicalMaterial,
  toon: MeshToonMaterial,
  basic: MeshBasicMaterial,
  lambert: MeshLambertMaterial,
  standard: MeshStandardMaterial
};
var Abstract = class {
  constructor(c6, props3, onParse) {
    this.uuid = MathUtils.generateUUID().replace(/-/g, "_");
    this.name = "LayerMaterial";
    this.mode = "normal";
    this.visible = true;
    const defaults = Object.getOwnPropertyNames(c6).filter((e12) => e12.startsWith("u_"));
    const uniforms = defaults.reduce((a5, v5) => {
      var _Object$getOwnPropert;
      let value = (_Object$getOwnPropert = Object.getOwnPropertyDescriptor(c6, v5)) == null ? void 0 : _Object$getOwnPropert.value;
      if (isSerializableType(value) || value instanceof Color)
        value = value.clone();
      return {
        ...a5,
        [v5.slice(1)]: value
      };
    }, {});
    for (const key in uniforms) {
      const propName = key.split("_")[1];
      if ((props3 == null ? void 0 : props3[propName]) !== void 0)
        uniforms[key] = props3[propName];
    }
    if (props3) {
      Object.keys(props3).map((key) => {
        if (props3[key] !== void 0) {
          this[key] = props3[key];
        }
      });
    }
    this.uniforms = {};
    this.schema = [];
    const properties = {};
    Object.keys(uniforms).map((key) => {
      const propName = key.split("_")[1];
      this.uniforms[`u_${this.uuid}_${propName}`] = {
        value: getUniform(uniforms[key])
      };
      this.schema.push({
        value: uniforms[key],
        label: propName
      });
      properties[propName] = {
        set: (v5) => {
          this.uniforms[`u_${this.uuid}_${propName}`].value = getUniform(v5);
        },
        get: () => {
          return this.uniforms[`u_${this.uuid}_${propName}`].value;
        }
      };
    });
    if (props3 != null && props3.name)
      this.name = props3.name;
    if (props3 != null && props3.mode)
      this.mode = props3.mode;
    if (props3 != null && props3.visible)
      this.visible = props3.visible;
    Object.defineProperties(this, properties);
    this.vertexShader = "";
    this.fragmentShader = "";
    this.vertexVariables = "";
    this.fragmentVariables = "";
    this.onParse = onParse;
    this.buildShaders(c6);
    this.schema.push({
      value: this.mode,
      label: "mode",
      options: Object.values(BlendModes)
    });
    this.schema.push({
      value: this.visible,
      label: "visible"
    });
  }
  buildShaders(constructor) {
    var _this$onParse;
    const shaders = Object.getOwnPropertyNames(constructor).filter((e12) => e12 === "fragmentShader" || e12 === "vertexShader").reduce((a5, v5) => {
      var _Object$getOwnPropert2;
      return {
        ...a5,
        [v5]: (_Object$getOwnPropert2 = Object.getOwnPropertyDescriptor(constructor, v5)) == null ? void 0 : _Object$getOwnPropert2.value
      };
    }, {});
    const tokens = {
      vert: (0, import_glsl_tokenizer2.default)(shaders.vertexShader || ""),
      frag: (0, import_glsl_tokenizer2.default)(shaders.fragmentShader || "")
    };
    const descoped = {
      vert: (0, import_glsl_token_descope.default)(tokens.vert, this.renameTokens.bind(this)),
      frag: (0, import_glsl_token_descope.default)(tokens.frag, this.renameTokens.bind(this))
    };
    const funcs = {
      vert: (0, import_glsl_token_functions2.default)(descoped.vert),
      frag: (0, import_glsl_token_functions2.default)(descoped.frag)
    };
    const mainIndex = {
      vert: funcs.vert.map((e12) => {
        return e12.name;
      }).indexOf("main"),
      frag: funcs.frag.map((e12) => {
        return e12.name;
      }).indexOf("main")
    };
    const variables = {
      vert: mainIndex.vert >= 0 ? (0, import_glsl_token_string2.default)(descoped.vert.slice(0, funcs.vert[mainIndex.vert].outer[0])) : "",
      frag: mainIndex.frag >= 0 ? (0, import_glsl_token_string2.default)(descoped.frag.slice(0, funcs.frag[mainIndex.frag].outer[0])) : ""
    };
    const funcBodies = {
      vert: mainIndex.vert >= 0 ? this.getShaderFromIndex(descoped.vert, funcs.vert[mainIndex.vert].body) : "",
      frag: mainIndex.frag >= 0 ? this.getShaderFromIndex(descoped.frag, funcs.frag[mainIndex.frag].body) : ""
    };
    this.vertexShader = this.processFinal(funcBodies.vert, true);
    this.fragmentShader = this.processFinal(funcBodies.frag);
    this.vertexVariables = variables.vert;
    this.fragmentVariables = variables.frag;
    (_this$onParse = this.onParse) == null ? void 0 : _this$onParse.call(this, this);
    this.schema = this.schema.filter((value, index) => {
      const _value = value.label;
      return index === this.schema.findIndex((obj) => {
        return obj.label === _value;
      });
    });
  }
  renameTokens(name) {
    if (name.startsWith("u_")) {
      const slice = name.slice(2);
      return `u_${this.uuid}_${slice}`;
    } else if (name.startsWith("v_")) {
      const slice = name.slice(2);
      return `v_${this.uuid}_${slice}`;
    } else if (name.startsWith("f_")) {
      const slice = name.slice(2);
      return `f_${this.uuid}_${slice}`;
    } else {
      return name;
    }
  }
  processFinal(shader, isVertex) {
    const s6 = shader.replace(/\sf_/gm, ` f_${this.uuid}_`).replace(/\(f_/gm, `(f_${this.uuid}_`);
    const returnValue = s6.match(/^.*return.*$/gm);
    let sReplaced = s6.replace(/^.*return.*$/gm, "");
    if (returnValue != null && returnValue[0]) {
      const returnVariable = returnValue[0].replace("return", "").trim().replace(";", "");
      const blendMode = this.getBlendMode(returnVariable, "lamina_finalColor");
      sReplaced += isVertex ? `lamina_finalPosition = ${returnVariable};` : `lamina_finalColor = ${blendMode};`;
    }
    return sReplaced;
  }
  getShaderFromIndex(tokens, index) {
    return (0, import_glsl_token_string2.default)(tokens.slice(index[0], index[1]));
  }
  getBlendMode(b5, a5) {
    switch (this.mode) {
      default:
      case "normal":
        return `lamina_blend_alpha(${a5}, ${b5}, ${b5}.a)`;
      case "add":
        return `lamina_blend_add(${a5}, ${b5}, ${b5}.a)`;
      case "subtract":
        return `lamina_blend_subtract(${a5}, ${b5}, ${b5}.a)`;
      case "multiply":
        return `lamina_blend_multiply(${a5}, ${b5}, ${b5}.a)`;
      case "lighten":
        return `lamina_blend_lighten(${a5}, ${b5}, ${b5}.a)`;
      case "darken":
        return `lamina_blend_darken(${a5}, ${b5}, ${b5}.a)`;
      case "divide":
        return `lamina_blend_divide(${a5}, ${b5}, ${b5}.a)`;
      case "overlay":
        return `lamina_blend_overlay(${a5}, ${b5}, ${b5}.a)`;
      case "screen":
        return `lamina_blend_screen(${a5}, ${b5}, ${b5}.a)`;
      case "softlight":
        return `lamina_blend_softlight(${a5}, ${b5}, ${b5}.a)`;
      case "reflect":
        return `lamina_blend_reflect(${a5}, ${b5}, ${b5}.a)`;
      case "negation":
        return `lamina_blend_negation(${a5}, ${b5}, ${b5}.a)`;
    }
  }
  getSchema() {
    const latestSchema = this.schema.map(({
      label,
      options,
      ...rest2
    }) => {
      return {
        label,
        options,
        ...getSpecialParameters(label),
        ...rest2,
        // @ts-ignore
        value: serializeProp(this[label])
      };
    });
    return latestSchema;
  }
  serialize() {
    const name = this.constructor.name.split("$")[0];
    let nonUniformPropKeys = Object.keys(this);
    nonUniformPropKeys = nonUniformPropKeys.filter((e12) => !["uuid", "uniforms", "schema", "fragmentShader", "vertexShader", "fragmentVariables", "vertexVariables", "attribs", "events", "__r3f", "onParse"].includes(e12));
    const nonUniformProps = {};
    nonUniformPropKeys.forEach((k5) => {
      nonUniformProps[k5] = this[k5];
    });
    const props3 = {};
    for (const key in this.uniforms) {
      const name2 = key.replace(`u_${this.uuid}_`, "");
      props3[name2] = serializeProp(this.uniforms[key].value);
    }
    return {
      constructor: name,
      properties: {
        ...props3,
        ...nonUniformProps
      }
    };
  }
};
var Depth$1 = class extends Abstract {
  constructor(props3) {
    super(Depth$1, {
      name: "Depth",
      ...props3
    }, (self2) => {
      self2.schema.push({
        value: self2.mapping,
        label: "mapping",
        options: ["vector", "world", "camera"]
      });
      const mapping = Depth$1.getMapping(self2.uuid, self2.mapping);
      self2.fragmentShader = self2.fragmentShader.replace("lamina_mapping_template", mapping);
    });
    this.mapping = "vector";
  }
  static getMapping(uuid, type) {
    switch (type) {
      default:
      case "vector":
        return `length(v_${uuid}_worldPosition - u_${uuid}_origin)`;
      case "world":
        return `length(v_${uuid}_position - vec3(0.))`;
      case "camera":
        return `length(v_${uuid}_worldPosition - cameraPosition)`;
    }
  }
};
Depth$1.u_near = 2;
Depth$1.u_far = 10;
Depth$1.u_origin = new Vector3(0, 0, 0);
Depth$1.u_colorA = "white";
Depth$1.u_colorB = "black";
Depth$1.u_alpha = 1;
Depth$1.vertexShader = `
  varying vec3 v_worldPosition;
  varying vec3 v_position;

  void main() {
    v_worldPosition = (vec4(position, 1.0) * modelMatrix).xyz;
    v_position = position;
  }
  `;
Depth$1.fragmentShader = `   
    uniform float u_alpha;
    uniform float u_near;
    uniform float u_far;
    uniform float u_isVector;
    uniform vec3 u_origin;
    uniform vec3 u_colorA;
    uniform vec3 u_colorB;

    varying vec3 v_worldPosition;
    varying vec3 v_position;

    void main() {
      float f_dist = lamina_mapping_template;
      float f_depth = (f_dist - u_near) / (u_far - u_near);
			vec3 f_depthColor =  mix(u_colorB, u_colorA, 1.0 - clamp(f_depth, 0., 1.));
  
  
      return vec4(f_depthColor, u_alpha);
    }
  `;
var Color$1 = class extends Abstract {
  constructor(props3) {
    super(Color$1, {
      name: "Color",
      ...props3
    });
  }
};
Color$1.u_color = "red";
Color$1.u_alpha = 1;
Color$1.fragmentShader = `   
    uniform vec3 u_color;
    uniform float u_alpha;

    void main() {
      return vec4(u_color, u_alpha);
    }
  `;
var Noise$1 = class extends Abstract {
  constructor(props3) {
    super(Noise$1, {
      name: "noise",
      ...props3
    }, (self2) => {
      self2.schema.push({
        value: self2.type,
        label: "type",
        options: Object.values(NoiseTypes)
      });
      self2.schema.push({
        value: self2.mapping,
        label: "mapping",
        options: Object.values(MappingTypes)
      });
      const noiseFunc = Noise$1.getNoiseFunction(self2.type);
      const mapping = Noise$1.getMapping(self2.mapping);
      self2.vertexShader = self2.vertexShader.replace("lamina_mapping_template", mapping);
      self2.fragmentShader = self2.fragmentShader.replace("lamina_noise_template", noiseFunc);
    });
    this.type = "perlin";
    this.mapping = "local";
  }
  static getNoiseFunction(type) {
    switch (type) {
      default:
      case "perlin":
        return `lamina_noise_perlin`;
      case "simplex":
        return `lamina_noise_simplex`;
      case "cell":
        return `lamina_noise_worley`;
      case "white":
        return `lamina_noise_white`;
      case "curl":
        return `lamina_noise_swirl`;
    }
  }
  static getMapping(type) {
    switch (type) {
      default:
      case "local":
        return `position`;
      case "world":
        return `(modelMatrix * vec4(position,1.0)).xyz`;
      case "uv":
        return `vec3(uv, 0.)`;
    }
  }
};
Noise$1.u_colorA = "#666666";
Noise$1.u_colorB = "#666666";
Noise$1.u_colorC = "#FFFFFF";
Noise$1.u_colorD = "#FFFFFF";
Noise$1.u_alpha = 1;
Noise$1.u_scale = 1;
Noise$1.u_offset = new Vector3(0, 0, 0);
Noise$1.vertexShader = `
    varying vec3 v_position;

    void main() {
        v_position = lamina_mapping_template;
    }
  `;
Noise$1.fragmentShader = `   
    uniform vec3 u_colorA;
    uniform vec3 u_colorB;
    uniform vec3 u_colorC;
    uniform vec3 u_colorD;
    uniform vec3 u_offset;

    uniform float u_alpha;
    uniform float u_scale;

    varying vec3 v_position;


    void main() {
        float f_n = lamina_noise_template((v_position + u_offset) * u_scale);

        float f_step1 = 0.;
        float f_step2 = 0.2;
        float f_step3 = 0.6;
        float f_step4 = 1.;

        vec3 f_color = mix(u_colorA, u_colorB, smoothstep(f_step1, f_step2, f_n));
        f_color = mix(f_color, u_colorC, smoothstep(f_step2, f_step3, f_n));
        f_color = mix(f_color, u_colorD, smoothstep(f_step3, f_step4, f_n));

        return vec4(f_color, u_alpha);
    }
  `;
var Fresnel$1 = class extends Abstract {
  constructor(props3) {
    super(Fresnel$1, {
      name: "Fresnel",
      ...props3
    });
  }
};
Fresnel$1.u_color = "white";
Fresnel$1.u_alpha = 1;
Fresnel$1.u_bias = 0;
Fresnel$1.u_intensity = 1;
Fresnel$1.u_power = 2;
Fresnel$1.u_factor = 1;
Fresnel$1.vertexShader = `
    varying vec3 v_worldPosition;
    varying vec3 v_worldNormal;

    void main() {
        v_worldPosition = vec3(-viewMatrix[0][2], -viewMatrix[1][2], -viewMatrix[2][2]);
        v_worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );
        
    }
  `;
Fresnel$1.fragmentShader = `   
    uniform vec3 u_color;
    uniform float u_alpha;
    uniform float u_bias;
    uniform float u_intensity;
    uniform float u_power;
    uniform float u_factor;

    varying vec3 v_worldPosition;
    varying vec3 v_worldNormal;

    void main() {
        float f_a = (u_factor  + dot(v_worldPosition, v_worldNormal));
        float f_fresnel = u_bias + u_intensity * pow(abs(f_a), u_power);

        f_fresnel = clamp(f_fresnel, 0.0, 1.0);
        return vec4(f_fresnel * u_color, u_alpha);
    }
  `;
var Gradient$1 = class extends Abstract {
  constructor(props3) {
    super(Gradient$1, {
      name: "Gradient",
      ...props3
    }, (self2) => {
      self2.schema.push({
        value: self2.axes,
        label: "axes",
        options: ["x", "y", "z"]
      });
      self2.schema.push({
        value: self2.mapping,
        label: "mapping",
        options: Object.values(MappingTypes)
      });
      const mapping = Gradient$1.getMapping(self2.mapping);
      self2.vertexShader = self2.vertexShader.replace("lamina_mapping_template", mapping || "local");
      self2.fragmentShader = self2.fragmentShader.replace("axes_template", self2.axes || "x");
    });
    this.axes = "x";
    this.mapping = "local";
  }
  static getMapping(type) {
    switch (type) {
      default:
      case "local":
        return `position`;
      case "world":
        return `(modelMatrix * vec4(position,1.0)).xyz`;
      case "uv":
        return `vec3(uv, 0.)`;
    }
  }
};
Gradient$1.u_colorA = "white";
Gradient$1.u_colorB = "black";
Gradient$1.u_alpha = 1;
Gradient$1.u_start = 1;
Gradient$1.u_end = -1;
Gradient$1.u_contrast = 1;
Gradient$1.vertexShader = `
		varying vec3 v_position;

		vod main() {
      v_position = lamina_mapping_template;
		}
  `;
Gradient$1.fragmentShader = `   
    uniform vec3 u_colorA;
    uniform vec3 u_colorB;
    uniform vec3 u_axis;
    uniform float u_alpha;
    uniform float u_start;
    uniform float u_end;
    uniform float u_contrast;

		varying vec3 v_position;

    void main() {

      float f_step = smoothstep(u_start, u_end, v_position.axes_template * u_contrast);
      vec3 f_color = mix(u_colorA, u_colorB, f_step);

      return vec4(f_color, u_alpha);
    }
  `;
var Matcap$1 = class extends Abstract {
  constructor(props3) {
    super(Matcap$1, {
      name: "Matcap",
      ...props3
    });
  }
};
Matcap$1.u_alpha = 1;
Matcap$1.u_map = void 0;
Matcap$1.vertexShader = `
    varying vec3 v_position;
    varying vec3 v_normal;
    
    void main() {
      v_position = normalize( vec3( modelViewMatrix * vec4( position, 1.0 ) ) );
      v_normal = normalize( normalMatrix * normal );
    }
    `;
Matcap$1.fragmentShader = ` 
		uniform sampler2D u_map;  
		uniform float u_alpha;  
		varying vec3 v_position;
		varying vec3 v_normal;

		
    void main() {
			vec3 f_r = reflect( v_position, v_normal );
			float f_m = 2. * sqrt( pow( f_r.x, 2. ) + pow( f_r.y, 2. ) + pow( f_r.z + 1., 2. ) );
			vec2 f_vN = f_r.xy / f_m + .5;

			vec3 f_base = texture2D(u_map, f_vN).rgb;

      return vec4(f_base, u_alpha);
    }
  `;
var Texture$1 = class extends Abstract {
  constructor(props3) {
    super(Texture$1, {
      name: "Texture",
      ...props3
    });
  }
};
Texture$1.u_alpha = 1;
Texture$1.u_map = void 0;
Texture$1.vertexShader = `
    varying vec2 v_uv;
    
    void main() {
        v_uv = uv;
    }
    `;
Texture$1.fragmentShader = ` 
		uniform sampler2D u_map;  
		uniform float u_alpha;  
		varying vec2 v_uv;

    void main() {
			vec4 f_color = texture2D(u_map, v_uv);
      return vec4(f_color.rgb, f_color.a * u_alpha);
    }
  `;
var Displace$1 = class extends Abstract {
  constructor(props3) {
    super(Displace$1, {
      name: "Displace",
      ...props3
    }, (self2) => {
      self2.schema.push({
        value: self2.type,
        label: "type",
        options: Object.values(NoiseTypes)
      });
      self2.schema.push({
        value: self2.mapping,
        label: "mapping",
        options: Object.values(MappingTypes)
      });
      const noiseFunc = Displace$1.getNoiseFunction(self2.type);
      const mapping = Displace$1.getMapping(self2.mapping);
      self2.vertexVariables = self2.vertexVariables.replace("lamina_mapping_template", mapping);
      self2.vertexVariables = self2.vertexVariables.replace("lamina_noise_template", noiseFunc);
    });
    this.type = "perlin";
    this.mapping = "local";
  }
  static getNoiseFunction(type) {
    switch (type) {
      default:
      case "perlin":
        return `lamina_noise_perlin`;
      case "simplex":
        return `lamina_noise_simplex`;
      case "cell":
        return `lamina_noise_worley`;
      case "white":
        return `lamina_noise_white`;
      case "curl":
        return `lamina_noise_swirl`;
    }
  }
  static getMapping(type) {
    switch (type) {
      default:
      case "local":
        return `p`;
      case "world":
        return `(modelMatrix * vec4(p,1.0)).xyz`;
      case "uv":
        return `vec3(uv, 0.)`;
    }
  }
};
Displace$1.u_strength = 1;
Displace$1.u_scale = 1;
Displace$1.u_offset = new Vector3(0, 0, 0);
Displace$1.vertexShader = `
       
      uniform float u_strength;
      uniform float u_scale;
      uniform vec3 u_offset;

      vec3 displace(vec3 p) {
				vec3 f_position = lamina_mapping_template;
        float f_n = lamina_noise_template((f_position + u_offset) * u_scale) * u_strength;
        vec3 f_newPosition = p + (f_n * normal);

				return f_newPosition;
      }

      
			vec3 orthogonal(vec3 v) {
  		  return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0)
  		  : vec3(0.0, -v.z, v.y));
  		}
  		vec3 recalcNormals(vec3 newPos) {
  		  float offset = 0.001;
  		  vec3 tangent = orthogonal(normal);
  		  vec3 bitangent = normalize(cross(normal, tangent));
  		  vec3 neighbour1 = position + tangent * offset;
  		  vec3 neighbour2 = position + bitangent * offset;
  		  vec3 displacedNeighbour1 = displace(neighbour1);
  		  vec3 displacedNeighbour2 = displace(neighbour2);
  		  vec3 displacedTangent = displacedNeighbour1 - newPos;
  		  vec3 displacedBitangent = displacedNeighbour2 - newPos;
  		  return normalize(cross(displacedTangent, displacedBitangent));
  		}
  
  
      void main() {
       
				vec3 f_newPosition = displace(position);
        lamina_finalNormal = recalcNormals(f_newPosition);

        return f_newPosition;
      }
    `;
var Normal$1 = class extends Abstract {
  constructor(props3) {
    super(Normal$1, {
      name: "Normal",
      ...props3
    });
  }
};
Normal$1.u_alpha = 1;
Normal$1.u_direction = new Vector3(1, 1, 1);
Normal$1.vertexShader = `   
  varying vec3 v_normals; 

  void main() {
    v_normals = normal;
  }
`;
Normal$1.fragmentShader = `   
  	uniform float u_alpha;
  	uniform vec3 u_color;
  	uniform vec3 u_direction;

		varying vec3 v_normals;

    void main() {
			vec3 f_normalColor = vec3(1.);
      f_normalColor.x = v_normals.x * u_direction.x;
      f_normalColor.y = v_normals.y * u_direction.y;
      f_normalColor.z = v_normals.z * u_direction.z;

      return vec4(f_normalColor, u_alpha);
    }
  `;
var BlendModesChunk = (
  /* glsl */
  `
vec4 lamina_blend_add(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(min(x.xyz + y.xyz, 1.0) * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec3 lamina_blend_alpha(const in vec3 x, const in vec3 y, const in float opacity) {

	return y * opacity + x * (1.0 - opacity);

}

vec4 lamina_blend_alpha(const in vec4 x, const in vec4 y, const in float opacity) {

	float a = min(y.a, opacity);

	return vec4(lamina_blend_alpha(x.rgb, y.rgb, a), x.a);

}
vec4 lamina_blend_average(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4((x.xyz + y.xyz) * 0.5 * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_color_burn(const in float x, const in float y) {

	return (y == 0.0) ? y : max(1.0 - (1.0 - x) / y, 0.0);

}

vec4 lamina_blend_color_burn(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_color_burn(x.r, y.r),
		lamina_blend_color_burn(x.g, y.g),
		lamina_blend_color_burn(x.b, y.b),
		lamina_blend_color_burn(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_color_dodge(const in float x, const in float y) {

	return (y == 1.0) ? y : min(x / (1.0 - y), 1.0);

}

vec4 lamina_blend_color_dodge(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_color_dodge(x.r, y.r),
		lamina_blend_color_dodge(x.g, y.g),
		lamina_blend_color_dodge(x.b, y.b),
		lamina_blend_color_dodge(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_darken(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(min(x.xyz, y.xyz) * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_difference(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(abs(x.xyz - y.xyz) * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_divide(const in float x, const in float y) {

	return (y > 0.0) ? min(x / y, 1.0) : 1.0;

}

vec4 lamina_blend_divide(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_divide(x.r, y.r),
		lamina_blend_divide(x.g, y.g),
		lamina_blend_divide(x.b, y.b),
		lamina_blend_divide(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_exclusion(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4((x.xyz + y.xyz - 2.0 * x.xyz * y.xyz) * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_lighten(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(max(x.xyz, y.xyz) * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_multiply(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4( x.xyz * y.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_negation(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4((1.0 - abs(1.0 - x.xyz - y.xyz)) * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_normal(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(y.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_overlay(const in float x, const in float y) {

	return (x < 0.5) ? (2.0 * x * y) : (1.0 - 2.0 * (1.0 - x) * (1.0 - y));

}

vec4 lamina_blend_overlay(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_overlay(x.r, y.r),
		lamina_blend_overlay(x.g, y.g),
		lamina_blend_overlay(x.b, y.b),
		lamina_blend_overlay(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_reflect(const in float x, const in float y) {

	return (y == 1.0) ? y : min(x * x / (1.0 - y), 1.0);

}

vec4 lamina_blend_reflect(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_reflect(x.r, y.r),
		lamina_blend_reflect(x.g, y.g),
		lamina_blend_reflect(x.b, y.b),
		lamina_blend_reflect(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_screen(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4((1.0 - (1.0 - x.xyz) * (1.0 - y.xyz)) * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_softlight(const in float x, const in float y) {

	return (y < 0.5) ?
		(2.0 * x * y + x * x * (1.0 - 2.0 * y)) :
		(sqrt(x) * (2.0 * y - 1.0) + 2.0 * x * (1.0 - y));

}

vec4 lamina_blend_softlight(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_softlight(x.r, y.r),
		lamina_blend_softlight(x.g, y.g),
		lamina_blend_softlight(x.b, y.b),
		lamina_blend_softlight(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_subtract(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(max(x.xyz + y.xyz - 1.0, 0.0) * opacity + x.xyz * (1.0 - opacity), x.a);

}

`
);
var NoiseChunk = (
  /* glsl */
  `

// From: https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
// Huge thanks to the creators of these algorithms

float lamina_noise_mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 lamina_noise_mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 lamina_noise_perm(vec4 x){return lamina_noise_mod289(((x * 34.0) + 1.0) * x);}
vec4 lamina_noise_permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
vec4 lamina_noise_taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }


float lamina_noise_white(vec2 p) {
  return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) *
               (0.1 + abs(sin(p.y * 13.0 + p.x))));
}

float lamina_noise_white(vec3 p) {
  return lamina_noise_white(p.xy);
}


vec3 lamina_noise_fade(vec3 t) { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }

float lamina_noise_perlin(vec3 P) {
  vec3 Pi0 = floor(P);        // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P);        // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = lamina_noise_permute(lamina_noise_permute(ix) + iy);
  vec4 ixy0 = lamina_noise_permute(ixy + iz0);
  vec4 ixy1 = lamina_noise_permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
  vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
  vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
  vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
  vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
  vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
  vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
  vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);

  vec4 norm0 = lamina_noise_taylorInvSqrt(
      vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = lamina_noise_taylorInvSqrt(
      vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = lamina_noise_fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111),
                 fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return lamina_normalize(2.2 * n_xyz);
}

float lamina_noise_simplex(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  // Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  //  x0 = x0 - 0. + 0.0 * C
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1. + 3.0 * C.xxx;

  // Permutations
  i = mod(i, 289.0);
  vec4 p = lamina_noise_permute(lamina_noise_permute(lamina_noise_permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y +
                             vec4(0.0, i1.y, i2.y, 1.0)) +
                    i.x + vec4(0.0, i1.x, i2.x, 1.0));

  // Gradients
  // ( N*N points uniformly over a square, mapped onto an octahedron.)
  float n_ = 1.0 / 7.0; // N=7
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z); //  mod(p,N*N)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_); // mod(j,N)

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  // Normalise gradients
  vec4 norm =
      lamina_noise_taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  // Mix final noise value
  vec4 m =
      max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return lamina_normalize(42.0 *
         dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3))));
}

vec3 lamina_noise_simplex3(vec3 x) {
  float s = lamina_noise_simplex(vec3(x));
  float s1 = lamina_noise_simplex(vec3(x.y - 19.1, x.z + 33.4, x.x + 47.2));
  float s2 = lamina_noise_simplex(vec3(x.z + 74.2, x.x - 124.5, x.y + 99.4));
  vec3 c = vec3(s, s1, s2);
  return c;
}

vec3 lamina_noise_curl(vec3 p) {
  const float e = .1;
  vec3 dx = vec3(e, 0.0, 0.0);
  vec3 dy = vec3(0.0, e, 0.0);
  vec3 dz = vec3(0.0, 0.0, e);

  vec3 p_x0 = lamina_noise_simplex3(p - dx);
  vec3 p_x1 = lamina_noise_simplex3(p + dx);
  vec3 p_y0 = lamina_noise_simplex3(p - dy);
  vec3 p_y1 = lamina_noise_simplex3(p + dy);
  vec3 p_z0 = lamina_noise_simplex3(p - dz);
  vec3 p_z1 = lamina_noise_simplex3(p + dz);

  float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;
  float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;
  float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;

  const float divisor = 1.0 / (2.0 * e);
  return normalize(vec3(x, y, z) * divisor);
}

vec3 lamina_permute(vec3 x) {
  return mod((34.0 * x + 1.0) * x, 289.0);
}

vec3 lamina_dist(vec3 x, vec3 y, vec3 z,  bool manhattanDistance) {
  return manhattanDistance ?  abs(x) + abs(y) + abs(z) :  (x * x + y * y + z * z);
}

// From: https://github.com/Erkaman/glsl-worley
float lamina_noise_worley(vec3 P) {
  float jitter = 1.;
  bool manhattanDistance = false; 

  float K = 0.142857142857; // 1/7
  float Ko = 0.428571428571; // 1/2-K/2
  float  K2 = 0.020408163265306; // 1/(7*7)
  float Kz = 0.166666666667; // 1/6
  float Kzo = 0.416666666667; // 1/2-1/6*2

	vec3 Pi = mod(floor(P), 289.0);
 	vec3 Pf = fract(P) - 0.5;

	vec3 Pfx = Pf.x + vec3(1.0, 0.0, -1.0);
	vec3 Pfy = Pf.y + vec3(1.0, 0.0, -1.0);
	vec3 Pfz = Pf.z + vec3(1.0, 0.0, -1.0);

	vec3 p = lamina_permute(Pi.x + vec3(-1.0, 0.0, 1.0));
	vec3 p1 = lamina_permute(p + Pi.y - 1.0);
	vec3 p2 = lamina_permute(p + Pi.y);
	vec3 p3 = lamina_permute(p + Pi.y + 1.0);

	vec3 p11 = lamina_permute(p1 + Pi.z - 1.0);
	vec3 p12 = lamina_permute(p1 + Pi.z);
	vec3 p13 = lamina_permute(p1 + Pi.z + 1.0);

	vec3 p21 = lamina_permute(p2 + Pi.z - 1.0);
	vec3 p22 = lamina_permute(p2 + Pi.z);
	vec3 p23 = lamina_permute(p2 + Pi.z + 1.0);

	vec3 p31 = lamina_permute(p3 + Pi.z - 1.0);
	vec3 p32 = lamina_permute(p3 + Pi.z);
	vec3 p33 = lamina_permute(p3 + Pi.z + 1.0);

	vec3 ox11 = fract(p11*K) - Ko;
	vec3 oy11 = mod(floor(p11*K), 7.0)*K - Ko;
	vec3 oz11 = floor(p11*K2)*Kz - Kzo; // p11 < 289 guaranteed

	vec3 ox12 = fract(p12*K) - Ko;
	vec3 oy12 = mod(floor(p12*K), 7.0)*K - Ko;
	vec3 oz12 = floor(p12*K2)*Kz - Kzo;

	vec3 ox13 = fract(p13*K) - Ko;
	vec3 oy13 = mod(floor(p13*K), 7.0)*K - Ko;
	vec3 oz13 = floor(p13*K2)*Kz - Kzo;

	vec3 ox21 = fract(p21*K) - Ko;
	vec3 oy21 = mod(floor(p21*K), 7.0)*K - Ko;
	vec3 oz21 = floor(p21*K2)*Kz - Kzo;

	vec3 ox22 = fract(p22*K) - Ko;
	vec3 oy22 = mod(floor(p22*K), 7.0)*K - Ko;
	vec3 oz22 = floor(p22*K2)*Kz - Kzo;

	vec3 ox23 = fract(p23*K) - Ko;
	vec3 oy23 = mod(floor(p23*K), 7.0)*K - Ko;
	vec3 oz23 = floor(p23*K2)*Kz - Kzo;

	vec3 ox31 = fract(p31*K) - Ko;
	vec3 oy31 = mod(floor(p31*K), 7.0)*K - Ko;
	vec3 oz31 = floor(p31*K2)*Kz - Kzo;

	vec3 ox32 = fract(p32*K) - Ko;
	vec3 oy32 = mod(floor(p32*K), 7.0)*K - Ko;
	vec3 oz32 = floor(p32*K2)*Kz - Kzo;

	vec3 ox33 = fract(p33*K) - Ko;
	vec3 oy33 = mod(floor(p33*K), 7.0)*K - Ko;
	vec3 oz33 = floor(p33*K2)*Kz - Kzo;

	vec3 dx11 = Pfx + jitter*ox11;
	vec3 dy11 = Pfy.x + jitter*oy11;
	vec3 dz11 = Pfz.x + jitter*oz11;

	vec3 dx12 = Pfx + jitter*ox12;
	vec3 dy12 = Pfy.x + jitter*oy12;
	vec3 dz12 = Pfz.y + jitter*oz12;

	vec3 dx13 = Pfx + jitter*ox13;
	vec3 dy13 = Pfy.x + jitter*oy13;
	vec3 dz13 = Pfz.z + jitter*oz13;

	vec3 dx21 = Pfx + jitter*ox21;
	vec3 dy21 = Pfy.y + jitter*oy21;
	vec3 dz21 = Pfz.x + jitter*oz21;

	vec3 dx22 = Pfx + jitter*ox22;
	vec3 dy22 = Pfy.y + jitter*oy22;
	vec3 dz22 = Pfz.y + jitter*oz22;

	vec3 dx23 = Pfx + jitter*ox23;
	vec3 dy23 = Pfy.y + jitter*oy23;
	vec3 dz23 = Pfz.z + jitter*oz23;

	vec3 dx31 = Pfx + jitter*ox31;
	vec3 dy31 = Pfy.z + jitter*oy31;
	vec3 dz31 = Pfz.x + jitter*oz31;

	vec3 dx32 = Pfx + jitter*ox32;
	vec3 dy32 = Pfy.z + jitter*oy32;
	vec3 dz32 = Pfz.y + jitter*oz32;

	vec3 dx33 = Pfx + jitter*ox33;
	vec3 dy33 = Pfy.z + jitter*oy33;
	vec3 dz33 = Pfz.z + jitter*oz33;

	vec3 d11 = lamina_dist(dx11, dy11, dz11, manhattanDistance);
	vec3 d12 = lamina_dist(dx12, dy12, dz12, manhattanDistance);
	vec3 d13 = lamina_dist(dx13, dy13, dz13, manhattanDistance);
	vec3 d21 = lamina_dist(dx21, dy21, dz21, manhattanDistance);
	vec3 d22 = lamina_dist(dx22, dy22, dz22, manhattanDistance);
	vec3 d23 = lamina_dist(dx23, dy23, dz23, manhattanDistance);
	vec3 d31 = lamina_dist(dx31, dy31, dz31, manhattanDistance);
	vec3 d32 = lamina_dist(dx32, dy32, dz32, manhattanDistance);
	vec3 d33 = lamina_dist(dx33, dy33, dz33, manhattanDistance);

	vec3 d1a = min(d11, d12);
	d12 = max(d11, d12);
	d11 = min(d1a, d13); // Smallest now not in d12 or d13
	d13 = max(d1a, d13);
	d12 = min(d12, d13); // 2nd smallest now not in d13
	vec3 d2a = min(d21, d22);
	d22 = max(d21, d22);
	d21 = min(d2a, d23); // Smallest now not in d22 or d23
	d23 = max(d2a, d23);
	d22 = min(d22, d23); // 2nd smallest now not in d23
	vec3 d3a = min(d31, d32);
	d32 = max(d31, d32);
	d31 = min(d3a, d33); // Smallest now not in d32 or d33
	d33 = max(d3a, d33);
	d32 = min(d32, d33); // 2nd smallest now not in d33
	vec3 da = min(d11, d21);
	d21 = max(d11, d21);
	d11 = min(da, d31); // Smallest now in d11
	d31 = max(da, d31); // 2nd smallest now not in d31
	d11.xy = (d11.x < d11.y) ? d11.xy : d11.yx;
	d11.xz = (d11.x < d11.z) ? d11.xz : d11.zx; // d11.x now smallest
	d12 = min(d12, d21); // 2nd smallest now not in d21
	d12 = min(d12, d22); // nor in d22
	d12 = min(d12, d31); // nor in d31
	d12 = min(d12, d32); // nor in d32
	d11.yz = min(d11.yz,d12.xy); // nor in d12.yz
	d11.y = min(d11.y,d12.z); // Only two more to go
	d11.y = min(d11.y,d11.z); // Done! (Phew!)

  vec2 F = sqrt(d11.xy);
	return F.x; // F1, F2

}

float lamina_noise_swirl(vec3 position) {
    float scale = 0.1;
    float freq = 4. * scale;
    float t = 1.;

    vec3 pos = (position * scale) + lamina_noise_curl(position * 7. * scale);

    float worley1 = 1. - lamina_noise_worley((pos * (freq * 2.)) +  (t * 2.));
    float worley2 = 1. - lamina_noise_worley((pos * (freq * 4.)) +  (t * 4.));
    float worley3 = 1. - lamina_noise_worley((pos * (freq * 8.)) +  (t * 8.));
    float worley4 = 1. - lamina_noise_worley((pos * (freq * 16.)) +  (t * 16.));
    
    float fbm1 = worley1 * .625 + worley2 * .25 + worley3 * .125;
    float fbm2 = worley2 * .625 + worley3 * .25 + worley4 * .125;
    float fbm3 = worley3 * .75 + worley4 * .25;

    vec3 curlWorleyFbm = vec3(fbm1, fbm2, fbm3);
    float curlWorley = curlWorleyFbm.r * .625 + curlWorleyFbm.g * .25 + 
        curlWorleyFbm.b * .125;

    return curlWorley;
}
  
  
`
);
var HelpersChunk = (
  /* glsl */
  `

float lamina_map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

float lamina_normalize(float v) { return lamina_map(v, -1.0, 1.0, 0.0, 1.0); }
`
);
var LayerMaterial$1 = class extends CustomShaderMaterial {
  constructor({
    color: color2,
    alpha,
    lighting,
    layers,
    name,
    ...props3
  } = {}) {
    super({
      baseMaterial: ShadingTypes[lighting || "basic"],
      ...props3
    });
    this.name = "LayerMaterial";
    this.layers = [];
    this.lighting = "basic";
    const _baseColor = color2 || "white";
    const _alpha = alpha != null ? alpha : 1;
    this.uniforms = {
      u_lamina_color: {
        value: typeof _baseColor === "string" ? new Color(_baseColor).convertSRGBToLinear() : _baseColor
      },
      u_lamina_alpha: {
        value: _alpha
      }
    };
    this.layers = layers || this.layers;
    this.lighting = lighting || this.lighting;
    this.name = name || this.name;
    this.refresh();
  }
  genShaders() {
    let vertexVariables = "";
    let fragmentVariables = "";
    let vertexShader = "";
    let fragmentShader = "";
    let uniforms = {};
    this.layers.filter((l6) => l6.visible).forEach((l6) => {
      vertexVariables += l6.vertexVariables + "\n";
      fragmentVariables += l6.fragmentVariables + "\n";
      vertexShader += l6.vertexShader + "\n";
      fragmentShader += l6.fragmentShader + "\n";
      uniforms = {
        ...uniforms,
        ...l6.uniforms
      };
    });
    uniforms = {
      ...uniforms,
      ...this.uniforms
    };
    return {
      uniforms,
      vertexShader: `
        ${HelpersChunk}
        ${NoiseChunk}
        ${vertexVariables}

        void main() {
          vec3 lamina_finalPosition = position;
          vec3 lamina_finalNormal = normal;

          ${vertexShader}

          csm_Position = lamina_finalPosition;
          csm_Normal = lamina_finalNormal;
        }
        `,
      fragmentShader: `
        ${HelpersChunk}
        ${NoiseChunk}
        ${BlendModesChunk}
        ${fragmentVariables}

        uniform vec3 u_lamina_color;
        uniform float u_lamina_alpha;

        void main() {
          vec4 lamina_finalColor = vec4(u_lamina_color, u_lamina_alpha);

          ${fragmentShader}

          csm_DiffuseColor = lamina_finalColor;
         
        }
        `
    };
  }
  refresh() {
    const {
      uniforms,
      fragmentShader,
      vertexShader
    } = this.genShaders();
    super.update({
      fragmentShader,
      vertexShader,
      uniforms
    });
  }
  serialize() {
    return {
      constructor: "LayerMaterial",
      properties: {
        color: this.color,
        alpha: this.alpha,
        name: this.name,
        lighting: this.lighting
      }
    };
  }
  set color(v5) {
    var _this$uniforms, _this$uniforms$u_lami;
    if ((_this$uniforms = this.uniforms) != null && (_this$uniforms$u_lami = _this$uniforms.u_lamina_color) != null && _this$uniforms$u_lami.value)
      this.uniforms.u_lamina_color.value = typeof v5 === "string" ? new Color(v5).convertSRGBToLinear() : v5;
  }
  get color() {
    var _this$uniforms2, _this$uniforms2$u_lam;
    return (_this$uniforms2 = this.uniforms) == null ? void 0 : (_this$uniforms2$u_lam = _this$uniforms2.u_lamina_color) == null ? void 0 : _this$uniforms2$u_lam.value;
  }
  set alpha(v5) {
    this.uniforms.u_lamina_alpha.value = v5;
  }
  get alpha() {
    return this.uniforms.u_lamina_alpha.value;
  }
};
var LAYERS = Object.freeze({
  __proto__: null,
  LayerMaterial: LayerMaterial$1,
  Abstract,
  Depth: Depth$1,
  Color: Color$1,
  Noise: Noise$1,
  Fresnel: Fresnel$1,
  Gradient: Gradient$1,
  Matcap: Matcap$1,
  Texture: Texture$1,
  Displace: Displace$1,
  Normal: Normal$1
});
function getPropsFromLayer(layer) {
  const constructor = LAYERS[layer.constructor];
  const instance = new constructor();
  let props3 = "";
  Object.entries(layer.properties).forEach(([key, val]) => {
    var _constructor2;
    const defaultVal = (_constructor2 = constructor["u_" + key]) != null ? _constructor2 : instance[key];
    switch (key) {
      case "name":
        if (val !== layer.constructor)
          props3 += ` ${key}={${JSON.stringify(val)}}`;
        break;
      case "visible":
        if (!val)
          props3 += ` ${key}={${JSON.stringify(val)}}`;
        break;
      default:
        if (val !== defaultVal)
          props3 += ` ${key}={${JSON.stringify(val)}}`;
        break;
    }
  });
  return props3;
}
function serializedLayersToJSX(layers, material) {
  const materialProps = getPropsFromLayer(material);
  const jsx = `
    <LayerMaterial${materialProps}>
      ${layers.map((layer) => {
    const props3 = getPropsFromLayer(layer);
    return `<${layer.constructor}${props3} />`;
  }).join("\n	")}
    </LayerMaterial>
    `;
  return jsx;
}
function getJSPropsFromLayer(layer) {
  const constructor = LAYERS[layer.constructor];
  const instance = new constructor();
  let props3 = "	";
  let entries = Object.entries(layer.properties);
  entries.forEach(([key, val], idx) => {
    var _constructor;
    const eol = "\n		";
    if (key.includes("color")) {
      const v5 = typeof val === "string" ? val : "#" + val.getHexString();
      props3 += `${key}: ${JSON.stringify(v5)},${eol}`;
    } else {
      const defaultVal = (_constructor = constructor["u_" + key]) != null ? _constructor : instance[key];
      switch (key) {
        case "name":
          if (val !== layer.constructor)
            props3 += `${key}: ${JSON.stringify(val)},${eol}`;
          break;
        case "visible":
          if (!val)
            props3 += `${key}:${JSON.stringify(val)},${eol}`;
          break;
        default:
          if (val !== defaultVal)
            props3 += `${key}: ${JSON.stringify(val)},${eol}`;
          break;
      }
    }
  });
  return props3;
}
function serializedLayersToJS(layers, material) {
  const materialProps = getJSPropsFromLayer(material);
  const jsLayers = `${layers.map((l6) => {
    return `new ${l6.constructor}({
      ${getJSPropsFromLayer(l6)}
      })`;
  }).join(",\n		")}`;
  const js = `
  new LayerMaterial({
    ${materialProps}
    layers: [
      ${jsLayers}
    ]
  })`;
  return js;
}
extend({
  LayerMaterial: LayerMaterial$1
});
function DynamicLeva({
  name,
  layers,
  store,
  setUpdate
}) {
  useControls(name, () => {
    const o9 = {};
    layers.forEach((layer, i6) => {
      const n6 = `${layer.label} ~${i6}`;
      o9[n6] = layer;
      o9[n6].onChange = () => setUpdate([`${name}.${n6}`, layer.label]);
    });
    return o9;
  }, {
    store
  }, [layers, name]);
  return null;
}
var DebugLayerMaterial = import_react10.default.forwardRef(({
  children,
  ...props3
}, forwardRef12) => {
  var _ref$current, _ref$current2, _ref$current3;
  const ref = import_react10.default.useRef(null);
  (0, import_react10.useImperativeHandle)(forwardRef12, () => ref.current);
  const store = useCreateStore();
  const [layers, setLayers] = import_react10.default.useState({});
  const [path, setPath] = import_react10.default.useState(["", ""]);
  const textureLoader = (0, import_react10.useMemo)(() => new TextureLoader(), []);
  useControls({
    "Copy JSX": button(() => {
      const serialized = ref.current.layers.map((l6) => l6.serialize());
      const jsx = serializedLayersToJSX(serialized, ref.current.serialize());
      navigator.clipboard.writeText(jsx);
    }),
    "Copy JS": button(() => {
      const serialized = ref.current.layers.map((l6) => l6.serialize());
      const js = serializedLayersToJS(serialized, ref.current.serialize());
      navigator.clipboard.writeText(js);
    })
  }, {
    store
  });
  const {
    Lighting
  } = useControls("Base", {
    Color: {
      value: "#" + new Color(((_ref$current = ref.current) == null ? void 0 : _ref$current.color) || (props3 == null ? void 0 : props3.color) || "white").convertLinearToSRGB().getHexString(),
      onChange: (v5) => {
        ref.current.color = v5;
      }
    },
    Alpha: {
      value: ((_ref$current2 = ref.current) == null ? void 0 : _ref$current2.alpha) || (props3 == null ? void 0 : props3.alpha) || 1,
      min: 0,
      max: 1,
      onChange: (v5) => {
        ref.current.alpha = v5;
      }
    },
    Lighting: {
      value: ((_ref$current3 = ref.current) == null ? void 0 : _ref$current3.lighting) || (props3 == null ? void 0 : props3.lighting) || "basic",
      options: Object.keys(ShadingTypes)
    }
  }, {
    store
  });
  const [args, otherProps] = (0, import_react10.useMemo)(() => getLayerMaterialArgs({
    ...props3,
    lighting: Lighting
  }), [props3, Lighting]);
  import_react10.default.useEffect(() => {
    const layers2 = ref.current.layers;
    const schema3 = {};
    layers2.forEach((layer, i6) => {
      if (layer.getSchema)
        schema3[`${layer.name} ~${i6}`] = layer.getSchema();
    });
    setLayers(schema3);
  }, [children]);
  import_react10.default.useEffect(() => {
    const data = store.getData();
    const updatedData = data[path[0]];
    if (updatedData) {
      const split2 = path[0].split(".");
      const index = parseInt(split2[0].split(" ~")[1]);
      const property = path[1];
      const id = ref.current.layers[index].uuid;
      const uniform = ref.current.uniforms[`u_${id}_${property}`];
      const layer = ref.current.layers[index];
      if (property !== "map") {
        layer[property] = updatedData.value;
        if (uniform) {
          uniform.value = getUniform(updatedData.value);
        } else {
          layer.buildShaders(layer.constructor);
          ref.current.refresh();
        }
      } else {
        (async () => {
          try {
            if (updatedData.value) {
              const t12 = await textureLoader.loadAsync(updatedData.value);
              layer[property] = t12;
              uniform.value = t12;
            } else {
              layer[property] = void 0;
              uniform.value = void 0;
            }
          } catch (error) {
            console.error(error);
          }
        })();
      }
    }
  }, [path]);
  import_react10.default.useLayoutEffect(() => {
    ref.current.layers = ref.current.__r3f.objects;
    ref.current.refresh();
  }, [children, args]);
  import_react10.default.useLayoutEffect(() => {
    const root = document.body.querySelector("#root");
    const div2 = document.createElement("div");
    if (root) {
      root.appendChild(div2);
      const levaRoot = (0, import_client.createRoot)(div2);
      levaRoot.render(import_react10.default.createElement(LevaPanel, {
        titleBar: {
          title: props3.name || ref.current.name
        },
        store
      }));
    }
    return () => {
      div2.remove();
    };
  }, [props3.name]);
  return import_react10.default.createElement(import_react10.default.Fragment, null, Object.entries(layers).map(([name, layers2], i6) => import_react10.default.createElement(DynamicLeva, {
    key: `${name} ~${i6}`,
    name,
    layers: layers2,
    store,
    setUpdate: setPath
  })), import_react10.default.createElement("layerMaterial", _extends({
    args: [args],
    ref
  }, otherProps), children));
});
extend({
  LayerMaterial: LayerMaterial$1,
  Depth_: Depth$1,
  Color_: Color$1,
  Noise_: Noise$1,
  Fresnel_: Fresnel$1,
  Gradient_: Gradient$1,
  Matcap_: Matcap$1,
  Texture_: Texture$1,
  Displace_: Displace$1,
  Normal_: Normal$1
});
var LayerMaterial = import_react10.default.forwardRef(({
  children,
  ...props3
}, forwardRef12) => {
  const ref = import_react10.default.useRef(null);
  (0, import_react10.useImperativeHandle)(forwardRef12, () => ref.current);
  import_react10.default.useLayoutEffect(() => {
    ref.current.layers = ref.current.__r3f.objects;
    ref.current.refresh();
  }, [children]);
  const [args, otherProps] = (0, import_react10.useMemo)(() => getLayerMaterialArgs(props3), [props3]);
  return import_react10.default.createElement("layerMaterial", _extends({
    args: [args],
    ref
  }, otherProps), children);
});
function getNonUniformArgs(props3) {
  return [{
    mode: props3 == null ? void 0 : props3.mode,
    visible: props3 == null ? void 0 : props3.visible,
    type: props3 == null ? void 0 : props3.type,
    mapping: props3 == null ? void 0 : props3.mapping,
    map: props3 == null ? void 0 : props3.map,
    axes: props3 == null ? void 0 : props3.axes
  }];
}
var Depth = import_react10.default.forwardRef((props3, forwardRef12) => {
  return import_react10.default.createElement("depth_", _extends({
    args: getNonUniformArgs(props3),
    ref: forwardRef12
  }, props3));
});
var Color3 = import_react10.default.forwardRef((props3, ref) => {
  return import_react10.default.createElement("color_", _extends({
    ref,
    args: getNonUniformArgs(props3)
  }, props3));
});
var Noise = import_react10.default.forwardRef((props3, ref) => {
  return import_react10.default.createElement("noise_", _extends({
    ref,
    args: getNonUniformArgs(props3)
  }, props3));
});
var Fresnel = import_react10.default.forwardRef((props3, ref) => {
  return import_react10.default.createElement("fresnel_", _extends({
    ref,
    args: getNonUniformArgs(props3)
  }, props3));
});
var Gradient = import_react10.default.forwardRef((props3, ref) => {
  return import_react10.default.createElement("gradient_", _extends({
    ref,
    args: getNonUniformArgs(props3)
  }, props3));
});
var Matcap = import_react10.default.forwardRef((props3, ref) => {
  return import_react10.default.createElement("matcap_", _extends({
    ref,
    args: getNonUniformArgs(props3)
  }, props3));
});
var Texture2 = import_react10.default.forwardRef((props3, ref) => {
  return import_react10.default.createElement("texture_", _extends({
    ref,
    args: getNonUniformArgs(props3)
  }, props3));
});
var Displace = import_react10.default.forwardRef((props3, ref) => {
  return import_react10.default.createElement("displace_", _extends({
    ref,
    args: getNonUniformArgs(props3)
  }, props3));
});
var Normal = import_react10.default.forwardRef((props3, ref) => {
  return import_react10.default.createElement("normal_", _extends({
    ref,
    args: getNonUniformArgs(props3)
  }, props3));
});
export {
  Color3 as Color,
  DebugLayerMaterial,
  Depth,
  Displace,
  Fresnel,
  Gradient,
  LayerMaterial,
  Matcap,
  Noise,
  Normal,
  Texture2 as Texture
};
/*! Bundled license information:

isobject/index.js:
  (*!
   * isobject <https://github.com/jonschlinkert/isobject>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

is-plain-object/index.js:
  (*!
   * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

is-extendable/index.js:
  (*!
   * is-extendable <https://github.com/jonschlinkert/is-extendable>
   *
   * Copyright (c) 2015-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

for-in/index.js:
  (*!
   * for-in <https://github.com/jonschlinkert/for-in>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

get-value/index.js:
  (*!
   * get-value <https://github.com/jonschlinkert/get-value>
   *
   * Copyright (c) 2014-2015, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

assign-symbols/index.js:
  (*!
   * assign-symbols <https://github.com/jonschlinkert/assign-symbols>
   *
   * Copyright (c) 2015, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

split-string/index.js:
  (*!
   * split-string <https://github.com/jonschlinkert/split-string>
   *
   * Copyright (c) 2015-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

is-extendable/index.js:
  (*!
   * is-extendable <https://github.com/jonschlinkert/is-extendable>
   *
   * Copyright (c) 2015, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

is-extendable/index.js:
  (*!
   * is-extendable <https://github.com/jonschlinkert/is-extendable>
   *
   * Copyright (c) 2015, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

set-value/index.js:
  (*!
   * set-value <https://github.com/jonschlinkert/set-value>
   *
   * Copyright (c) 2014-2015, 2017, Jon Schlinkert.
   * Released under the MIT License.
   *)
*/
//# sourceMappingURL=lamina.js.map

;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		var dataType =	'int integer bigint smallint tinyint mediumint decimal numeric float real double bit boolean number binary_float binary_double serial char varchar varchar2 text tinytext mediumtext longtext nchar nvarchar2 clob nclob blob longblob raw long raw binary varbinary date time datetime timestamp year timestamp with time zone interval year to month json xmltype rowid urowid enum set geometry point linestring sdo_geometry bfile mediumblob float(p) double precision unsigned zerofill long';

		var funcs	=	'max min count concat substr length upper lower trim lpad rpad replace regexp_replace instr ascii chr nvl coalesce concat_ws format initcap left right reverse soundex abs round ceil floor mod power sqrt exp log ln sin cos tan rand trunc sign acos asin atan atan2 greatest least sum avg stddev variance median percentile_cont now sysdate current_date current_time current_timestamp extract date_add date_sub add_months months_between to_date to_char date_format date_trunc datediff timestampdiff last_day next_day cast convert to_number to_clob to_blob hex unhex bin_to_uuid uuid_to_bin case decode nvl2 nullif ifnull isnull iif row_number rank dense_rank lead lag first_value last_value ntile cume_dist percent_rank over partition_by json_extract json_value xmlagg xmlelement pg_sleep sys_context utl_inaddr getutcdate group_concat listagg string_agg array_agg stats_mode corr covar_pop md5 sha1 sha256 sha512 aes_encrypt aes_decrypt dbms_crypto pgp_sym_encrypt hashbytes st_geometrytype sdo_geometry st_distance st_intersects st_buffer st_union';

		var keywords =	'select insert update delete merge create alter drop truncate rename grant revoke commit rollback savepoint begin start transaction from where group by having order by limit fetch top offset as inner join left join right join full join cross join natural join primary key foreign key unique not null check default union union all case when then else distinct with over partition by explain window row_number rank json_extract match against comment and or not in between exists';

		var operators =	'= <> != < > <= >= + - * / % ! ~ & | ^ << >> || -> ->> #> @> <@ :: ? ?| ?& like ilike rlike regexp is isnull is not null @ @@ <=> \ * % _ ~~ !~~';

		this.regexList = [
			{ regex: /--(.*)$/gm,												css: 'comments' },			// one line and multiline comments
			{ regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,	css: 'string' },			// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.multiLineSingleQuotedString,	css: 'string' },			// single quoted strings
			{ regex: new RegExp(this.getKeywords(dataType), 'gmi'),				css: 'constants' },			// dataType
			{ regex: /\(\d+\)/gm,				css: 'constants' },			// dataTypeLength
			{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),				css: 'functions' },			// functions
			{ regex: new RegExp(this.getKeywords(operators), 'gmi'),			css: 'color1' },			// operators and such
			{ regex: new RegExp(this.getKeywords(keywords), 'gmi'),				css: 'keyword' }			// keyword
			];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['sql'];

	SyntaxHighlighter.brushes.Sql = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();


<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h2>Book Collection</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Title</th>
      <th style="text-align:left">Author</th>
      <th style="text-align:left">ISBN</th>
      <th style="text-align:left">Publisher</th>
      <th style="text-align:left">Editor</th>
      <th style="text-align:left">Price</th>
    </tr>
    <xsl:for-each select="BookStore/book">
    <tr>
      <td><xsl:value-of select="Title"/></td>
      <td><xsl:value-of select="Author"/></td>
      <td><xsl:value-of select="ISBN"/></td>
      <td><xsl:value-of select="Publisher"/></td>
      <td><xsl:value-of select="Edition"/></td>
      <td><xsl:value-of select="Price"/></td>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>


USE [CC_Form]
GO

/****** Object:  Table [dbo].[submmit]    Script Date: 7/30/2020 11:11:18 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[submmit](
	[Form_no] [int] IDENTITY(1,1) NOT NULL,
	[Fname] [nvarchar](50) NULL,
	[Lname] [nvarchar](50) NULL,
	[Dob] [date] NULL,
	[Salary] [nvarchar](50) NULL,
	[CC_Type] [nvarchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[Form_no] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO



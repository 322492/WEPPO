USE [testowa]
GO

/****** Object:  Database [testowa]    Script Date: 29.01.2022 10:20:53 ******/
CREATE TABLE [dbo].[Child](
[ID] [int] IDENTITY(1,1) NOT NULL,
[ChildName] [nvarchar](150) NOT NULL,
[ID_PARENT] [int] NOT NULL,
CONSTRAINT [PK_Child] PRIMARY KEY CLUSTERED
(
[ID] ASC
)
) ON [PRIMARY]
GO

CREATE TABLE [dbo].[Parent](
[ID] [int] IDENTITY(1,1) NOT NULL,
[ParentName] [nvarchar](150) NOT NULL,
CONSTRAINT [PK_Parent] PRIMARY KEY CLUSTERED
(
[ID] ASC
)
) ON [PRIMARY]
ALTER TABLE [dbo].[Child] WITH CHECK ADD CONSTRAINT
[FK_Child_Parent] FOREIGN KEY([ID_PARENT])
REFERENCES [dbo].[Parent] ([ID])


INSERT INTO Parent (ParentName) VALUES ('Parent2')
INSERT INTO Parent (ParentName) VALUES ('Parent3')
INSERT INTO Parent (ParentName) VALUES ('Parent4')
INSERT INTO Parent (ParentName) VALUES ('Parent1')

SELECT * FROM PARENT

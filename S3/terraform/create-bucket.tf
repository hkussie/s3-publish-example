provider "aws" {
    region = "us-east-1"
    access_key = "test"
    secret_key = "test"
    s3_use_path_style = true
    endpoints {
      s3 = "http://localhost:4566"
      sts = "http://localhost:4566"
    }
}

variable "bucket_prefix" {
  description = "Prefix for the S3 bucket name"
  type = string
  default = "testing-bucket"
}

resource "random_id" "bucket_suffix" {
  byte_length = 4
}

resource "aws_s3_bucket" "testing_bucket" {
  bucket = "${var.bucket_prefix}-${random_id.bucket_suffix.hex}"
}

/*
-----------------------------------------------------------------
(Everyting above this line successfully creates a bucket and then generates a random hash following the testing_bucket prefix)

resource "aws_iam_policy" "s3_policy" {
  name        = "S3BucketPolicy"
  description = "Policy to allow getting S3 bucket policy"

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = [
          "s3:GetBucketPolicy"
        ],
        Effect   = "Allow",
        Resource = "arn:aws:s3:::testing-bucket"  # Replace with your bucket name
      }
    ]
  })
}

resource "aws_iam_role" "s3_role" {
  name = "s3-access-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = "sts:AssumeRole",
        Effect = "Allow",
        Principal = {
          Service = "lambda.amazonaws.com"  # Assuming you're using Lambda; adjust as needed
        }
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "s3_policy_attachment" {
  policy_arn = aws_iam_policy.s3_policy.arn
  role       = aws_iam_role.s3_role.name
}
*/ 